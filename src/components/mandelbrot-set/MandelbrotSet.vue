<template lang="pug">
.grid(:style="cssVars")
  template(v-for="(m, index) in map")
    Tile(v-if="m" :key="`${index}-${m}`" :rgb="palette[m % (palette.length - 1)]" @click="action(index)")
      img(v-if="isSettings(index)" src="/icons/regular/sliders.svg" alt="Setaad tings")

    div(v-else)
    //-TileLink(v-else :link="socialLink.next().value" :key="`${index}-link`")
</template>

<script lang="ts" setup>
import type { StyleValue } from "vue"
import { defineComponent, ref, onUnmounted, toRefs } from "vue"
import { throttledWatch } from "@vueuse/core"
import MandelbrotWorker from "~/workers/mandelbrot?worker"
import usePalette from "~/composables/palette"
// import useSocialLinks from "~/composables/socialLinks"
import Tile from "./Tile.vue"
import TileLink from "./TileLink.vue"
// import sliders from "~/assets/icons/regular/sliders.svg?raw"

const props = defineProps<{
  width: number
  height: number
  maxIteration: number
  paletteSize: number
  zoomFactor: number
}>()

const emit = defineEmits<{
  (o: "toggleSettings"): void
}>()

const { generatePalette } = usePalette()
// const { socialLink } = useSocialLinks()
const { width, height, maxIteration } = props
const zoomFactor = toRefs(props).zoomFactor
const paletteSize = toRefs(props).paletteSize
const palette = ref<RGB[]>([])
const map = ref<MandelbrotSetMap>([])
let realSet: NumberSet = { start: -2, end: 1 }
let imaginarySet: NumberSet = { start: -1, end: 1 }

const cssVars = ref({ "--width": props.width, "--height": props.height }) as StyleValue

const worker = new MandelbrotWorker()
worker.postMessage({ width, height, maxIteration, realSet, imaginarySet })
worker.onmessage = ({ data }: MessageEvent<MandelbrotSetMap>) => {
  map.value = data
}

const zoom = (index: number) => {
  const x = index % props.width
  const y = ~~(index / props.width)
  const zfw = props.width * zoomFactor.value
  const zfh = props.height * zoomFactor.value

  const getRelativePoint = (pos: number, length: number, set: NumberSet) =>
    set.start + (pos / length) * (set.end - set.start)

  realSet = {
    start: getRelativePoint(x - zfw, props.width, realSet),
    end: getRelativePoint(x + zfw, props.width, realSet),
  }
  imaginarySet = {
    start: getRelativePoint(y - zfh, props.height, imaginarySet),
    end: getRelativePoint(y + zfh, props.height, imaginarySet),
  }

  worker.postMessage({ width, height, maxIteration, realSet, imaginarySet })
}

throttledWatch(
  paletteSize,
  v => {
    palette.value = generatePalette(v)
  },
  {
    immediate: true,
    throttle: 16,
  }
)

const isSettings = (index: number) => index === map.value.length - 1

const action = (index: number) => {
  if (isSettings(index)) {
    emit("toggleSettings")
  } else {
    zoom(index)
  }
}

onUnmounted(() => worker.terminate())
</script>

<style scoped>
.grid {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(var(--width), 1fr);
  grid-template-rows: repeat(var(--height), calc(100vh / var(--height)));
  transform-style: preserve-3d;
  backface-visibility: hidden;

  transform-origin: center center;
  transform: rotateY(calc((var(--px) - 50) * 0.3deg)) rotateX(calc((var(--py) - 50) * -0.3deg));
  transform-style: preserve-3d;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

.grid img {
  opacity: 0.6;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 15%;
  transition-duration: 200ms;
}
.grid img:hover {
  opacity: 1;
}
</style>
