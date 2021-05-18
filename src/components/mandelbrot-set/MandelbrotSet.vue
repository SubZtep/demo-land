<template lang="pug">
//-LI .perspect-300 ,GG ,É6DDDDDDDDDDD
//-LI div(style="perspective: 300px;")gvb   vvmvvvvvvvvvvvvvvvvvvvvv  aadf vacacxwxXZz  z xz
div(:style="cssVars")
  .mandelbrotGrid(ref="el" :style="rotateCss")
    template(v-for="(m, index) in map")
      Tile(v-if="m" :key="`${index}-${m}`" :rgb="paletteItem(m)")
        TileLink(v-if="showLinks" :link="socialLink.next()")
      .empty(v-else :key="`${index}-${m}`")
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue"
import { ref, onUnmounted, reactive, defineProps } from "vue"
import { useWindowSize, useParallax, useDevicePixelRatio, throttledWatch, useIntervalFn } from "@vueuse/core"
import MandelbrotWorker from "~/workers/mandelbrot?worker&inline"
import usePalette from "~/use/palette"
import usesocialLinks from "~/use/socialLinks"

const props = defineProps({
  edge: {
    type: Number,
    default: 100,
  },
  maxIteration: {
    type: Number,
    default: 20,
  },
  paletteSize: {
    type: Number,
    default: 15,
  },
})

const el = ref(null)
const showLinks = ref(false)
const { socialLink } = usesocialLinks()
const { width: w, height: h } = useWindowSize()
const realEdge = Math.floor(props.edge / useDevicePixelRatio().pixelRatio.value)
const width = Math.floor(w.value / realEdge)
const height = Math.floor(h.value / realEdge)

const cssVars = {
  perspective: "300px",
  "--cols": String(width),
  "--rows": String(height),
  "--cols-size": `${width * realEdge}px`,
  "--rows-size": `${height * realEdge}px`,
}

const palette = usePalette().generatePalette(props.paletteSize)
const paletteItem = (m: number) => palette[m % (palette.length - 1)]

const map = ref<MandelbrotSetMap>(new Array(width * height).fill(0))
const worker = new MandelbrotWorker()
worker.postMessage({
  width,
  height,
  maxIteration: props.maxIteration,
  realSet: { start: -2, end: 1 },
  imaginarySet: { start: -1, end: 1 },
})
worker.onmessage = ({ data }: MessageEvent<MandelbrotSetMap>) => (map.value = data)

const parallax = reactive(useParallax(el))
let rotateCss = ref<CSSProperties>({})
const multi = parallax.source === "deviceOrientation" ? -30 : 10

throttledWatch(
  parallax,
  () => {
    rotateCss.value = {
      transform: `rotateX(${parallax.roll * multi}deg) rotateY(${parallax.tilt * multi}deg) scale(${
        Math.abs(parallax.roll) + Math.abs(parallax.tilt) + 0.5
      })`,
    }
  },
  {
    throttle: 16,
  }
)

useIntervalFn(() => {
  showLinks.value = !showLinks.value
}, 5000)

onUnmounted(() => worker.terminate())
</script>

<style lang="postcss">
.mandelbrotGrid {
  width: var(--cols-size);
  height: var(--rows-size);

  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);

  transition: 64ms ease-out transform;
  transform-style: preserve-3d;
}
</style>
