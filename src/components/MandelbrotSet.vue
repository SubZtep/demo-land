<template lang="pug">
.grid(:style="cssVars")
  div(
    v-for="idx in divs"
    :key="idx"
    :style="`background-color: ${map.get(`${idx % width}-${~~(idx / width)}`) ?? 'transparent'}`")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
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
  },
  setup: ({ width, height, maxIteration }) => {
    const map = ref<MandelbrotSetMap>(new Map<string, string>())

    const realSet = { start: -2, end: 1 }
    const imaginarySet = { start: -1, end: 1 }
    const colors = new Array(16)
      .fill(0)
      .map((_, i) => (i === 0 ? "#000" : `#${(((1 << 24) * Math.random()) | 0).toString(16)}`))

    const worker = new MandelbrotWorker()
    worker.postMessage({ width, height, maxIteration, realSet, imaginarySet, colors })
    worker.onmessage = ({ data }: MessageEvent<MandelbrotSetMap>) => {
      map.value = data
    }

    return {
      divs: Array.from({ length: width * height }, (_, i) => i),
      map,
      width,
      height,
      cssVars: {
        "--width": width,
        "--height": height,
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
  width: 8px;
  height: 8px;
}
</style>
