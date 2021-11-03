<template lang="pug">
div(:style="cssVars")
  //- client-only
  .mandelbrotGrid(ref="el" :style="rotateCss")
    template(v-for="(m, index) in map" :key="`${index}-${m}`")
      Tile(v-if="m" :rgb="paletteItem(m)")
        transition(name="bounce")
          TileLink(v-if="showLinks" :link="socialLink.next().value" transition="fadeIn")
      .empty(v-else)
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue"
import { ref, reactive } from "vue"
import {
  useWindowSize,
  useParallax,
  useDevicePixelRatio,
  throttledWatch,
  useIntervalFn,
  useToggle,
  useCssVar,
} from "@vueuse/core"
import MandelbrotWorker from "~/workers/mandelbrot?worker&inline"
import usesocialLinks from "~/use/socialLinks"
import usePalette from "~/use/palette"

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
const [showLinks, toggleLinks] = useToggle(false)
const { socialLink } = usesocialLinks()
const { width: w, height: h } = useWindowSize({ initialWidth: 640, initialHeight: 480 })
const realEdge = Math.floor(props.edge / useDevicePixelRatio().pixelRatio.value)
const width = Math.floor(w.value / realEdge)
const height = Math.floor(h.value / realEdge)

const cssVars = {
  perspective: "300px",
  "--edge": `${realEdge}px`,
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
worker.onmessage = ({ data }: MessageEvent<MandelbrotSetMap>) => {
  map.value = data
  worker.terminate()
}

const parallax = reactive(useParallax(el))
let rotateCss = ref<CSSProperties>({})
const bgPos = useCssVar("--bg-pos")

throttledWatch(
  parallax,
  () => {
    const multi = parallax.source === "deviceOrientation" ? -30 : 10
    rotateCss.value = {
      transform: `rotateX(${parallax.roll * multi}deg) rotateY(${parallax.tilt * multi}deg) scale(${
        Math.abs(parallax.roll) + Math.abs(parallax.tilt) + 0.5
      })`,
    }
    bgPos.value = `translate(${parallax.tilt * 100}px, ${parallax.roll * -100}px)`
  },
  {
    throttle: 64,
  }
)

useIntervalFn(toggleLinks, 6669)
</script>

<style lang="postcss">
.mandelbrotGrid {
  width: var(--cols-size);
  height: var(--rows-size);

  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);

  transition: 128ms ease-out transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
</style>
