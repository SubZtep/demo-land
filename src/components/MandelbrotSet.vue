<template lang="pug">
.grid(:style="cssVars")
  div(
    v-for="idx in divs",
    :key="idx",
    :style="`background-color: ${map.get(`${idx % width}-${~~(idx / width)}`) ?? 'transparent'}`",
    @click="zoom(idx % width, ~~(idx / width))"
  )
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from "vue"
import MandelbrotWorker from "../workers/mandelbrot?worker"

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
  },
  setup: ({ width, height, maxIteration, zoomFactor }) => {
    const map = ref<MandelbrotSetMap>(new Map<string, string>())

    let realSet = { start: -2, end: 1 }
    let imaginarySet = { start: -1, end: 1 }
    const colors = new Array(16)
      .fill(0)
      .map((_, i) => (i === 0 ? "#000" : `#${(((1 << 24) * Math.random()) | 0).toString(16)}`))

    const worker = new MandelbrotWorker()
    worker.postMessage({ width, height, maxIteration, realSet, imaginarySet, colors })
    worker.onmessage = ({ data }: MessageEvent<MandelbrotSetMap>) => {
      map.value = data
    }

    onUnmounted(() => worker.terminate())

    const getRelativePoint = (pos: number, length: number, set: NumberSet) =>
      set.start + (pos / length) * (set.end - set.start)

    return {
      divs: Array.from({ length: width * height }, (_, i) => i),
      map,
      width,
      height,
      cssVars: {
        "--width": width,
        "--height": height,
      },
      zoom: (x: number, y: number) => {
        const zfw = width * zoomFactor
        const zfh = height * zoomFactor

        realSet = {
          start: getRelativePoint(x - zfw, width, realSet),
          end: getRelativePoint(x + zfw, width, realSet),
        }
        imaginarySet = {
          start: getRelativePoint(y - zfh, height, imaginarySet),
          end: getRelativePoint(y + zfh, height, imaginarySet),
        }

        worker.postMessage({ width, height, maxIteration, realSet, imaginarySet, colors })
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
}

.grid > div {
  cursor: pointer;
  width: 8px;
  height: 8px;
}
</style>
