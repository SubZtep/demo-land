<template lang="pug">
.grid(:style="cssVars")
  template(v-for="(item, idx) in map")
    Tile(
      v-if="item"
      :key="`${idx}-${item}`"
      :rgb="itemRgb(item)"
      @click="zoom(idx % width, ~~(idx / width))")
    Cube(v-else :key="`${idx}-nope`" :edge="50")
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, toRefs, watch } from "vue"
import MandelbrotWorker from "../workers/mandelbrot?worker"
import usePalette from "../use/palette"
import Cube from "./Cube.vue"
import Tile from "./Tile.vue"

export default defineComponent({
  name: "MandelbrotSet",
  components: {
    Cube,
    Tile,
  },
  props: {
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 50,
    },
    maxIteration: {
      type: Number,
      default: 80,
    },
    zoomFactor: {
      type: Number,
      default: 0.1,
    },
    paletteSize: {
      type: Number,
      default: 250,
    },
  },
  setup: (props) => {
    const { width, height, maxIteration, zoomFactor } = props
    const paletteSize = toRefs(props).paletteSize
    let realSet: NumberSet = { start: -2, end: 1 }
    let imaginarySet: NumberSet = { start: -1, end: 1 }
    const map = ref<MandelbrotSetMap>([])
    let palette: RGB[]

    const worker = new MandelbrotWorker()
    worker.postMessage({ width, height, maxIteration, realSet, imaginarySet })
    worker.onmessage = ({ data }: MessageEvent<MandelbrotSetMap>) => {
      map.value = data
    }

    watch(paletteSize, value => (palette = usePalette(value)), { immediate: true })
    onUnmounted(() => worker.terminate())

    return {
      map,
      width,
      height,
      cssVars: {
        "--width": width,
        "--height": height,
      },
      itemRgb: (m: number | null) => {
        if (m === null) return [0,0,0]
        return palette[m % (palette.length - 1)] ?? [0,0,0]
      },
      zoom: (x: number, y: number) => {
        const zfw = width * zoomFactor
        const zfh = height * zoomFactor

        const getRelativePoint = (pos: number, length: number, set: NumberSet) =>
          set.start + (pos / length) * (set.end - set.start)

        realSet = {
          start: getRelativePoint(x - zfw, width, realSet),
          end: getRelativePoint(x + zfw, width, realSet),
        }
        imaginarySet = {
          start: getRelativePoint(y - zfh, height, imaginarySet),
          end: getRelativePoint(y + zfh, height, imaginarySet),
        }

        worker.postMessage({ width, height, maxIteration, realSet, imaginarySet })
      },
    }
  },
})
</script>

<style scoped>
.grid {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(var(--width), 1fr);
  grid-template-rows: repeat(var(--height), 1fr);
  transform-style: preserve-3d;
  backface-visibility: hidden;

  transform-origin: center center;
  transform: rotateY(calc((var(--px) - 50) * 0.3deg)) rotateX(calc((var(--py) - 50) * -0.3deg));
  transform-style: preserve-3d;
  transition-duration: 300ms;
  transition-timing-function: ease-out;

  --r: 0;
  --g: 0;
  --b: 0;
}
</style>
