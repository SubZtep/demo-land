<template lang="pug">
.grid(:style="cssVars")
  div(
    v-for="(item, idx) in map"
    :key="`${idx}-${item ?? 'nope'}`"
    :style="itemCssVars(item)"
    @click="zoom(idx % width, ~~(idx / width))"
  )
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, toRefs, watch } from "vue"
import MandelbrotWorker from "../workers/mandelbrot?worker"
import usePalette from "../use/palette"

interface Props {
  width: number
  height: number
  maxIteration: number
  zoomFactor: number
  paletteSize: number
}

export default defineComponent({
  name: "MandelbrotSet",
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
  setup: (props: Props) => {
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
      itemCssVars: (m: number | null) => {
        if (m === null) return {}
        const c = palette[m % (palette.length - 1)]
        return {
          "--r": c[0],
          "--g": c[1],
          "--b": c[2],
        }
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
  background-color: #6666;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(var(--width), 1fr);
  grid-template-rows: repeat(var(--height), 1fr);

  --r: 0;
  --g: 0;
  --b: 0;
}

.grid > div {
  cursor: pointer;
  width: 8px;
  height: 8px;
  background-color: rgb(var(--r), var(--g), var(--b));
}
</style>
