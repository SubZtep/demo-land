<template lang="pug">
.grid(:style="cssVars")
  template(v-for="(m, idx) in map")
    Tile(
      v-if="m"
      :key="`${idx}-${m}`"
      :rgb="palette[m % (palette.length - 1)]"
      @click="zoom(idx % width, ~~(idx / width))")
    Cube(v-else :key="`${idx}-nope`")
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, toRefs } from "vue"
import { throttledWatch } from "@vueuse/core"
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
  setup: props => {
    const { width, height, maxIteration, zoomFactor } = props
    const { generatePalette } = usePalette()
    const paletteSize = toRefs(props).paletteSize
    const palette = ref<RGB[]>([])
    const map = ref<MandelbrotSetMap>([])
    let realSet: NumberSet = { start: -2, end: 1 }
    let imaginarySet: NumberSet = { start: -1, end: 1 }

    const worker = new MandelbrotWorker()
    worker.postMessage({ width, height, maxIteration, realSet, imaginarySet })
    worker.onmessage = ({ data }: MessageEvent<MandelbrotSetMap>) => {
      map.value = data
    }

    throttledWatch(
      paletteSize,
      value => {
        palette.value = generatePalette(value)
      },
      {
        immediate: true,
        throttle: 16,
      }
    )

    onUnmounted(() => worker.terminate())

    return {
      map,
      width,
      height,
      palette,
      cssVars: {
        "--width": width,
        "--height": height,
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
