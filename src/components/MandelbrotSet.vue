<template lang="pug">
.grid(:style="cssVars")
  template(v-for="(m, index) in map")
    Tile(v-if="m" :key="`${index}-${m}`" :rgb="palette[m % (palette.length - 1)]" @click="action(index)")
      img(v-if="isSettings(index)" :src="sliders" alt="Settings")
    TileLink(v-else :link="socialLink.next().value" :key="`${index}-link`")
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, toRefs } from "vue"
import { throttledWatch } from "@vueuse/core"
import MandelbrotWorker from "../workers/mandelbrot?worker"
import usePalette from "../use/palette"
import useSocialLinks from "../use/socialLinks"
// import Tile from "./Tile.vue"
// import TileLink from "./TileLink.vue"
import sliders from "../assets/icons/regular/sliders.svg"

export default defineComponent({
  name: "MandelbrotSet",
  // components: {
  //   Tile,
  //   TileLink,
  // },
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
    paletteSize: {
      type: Number,
      default: 250,
    },
    zoomFactor: {
      type: Number,
      default: 0.1,
    },
  },
  setup: (props, { emit }) => {
    const { generatePalette } = usePalette()
    const { socialLink } = useSocialLinks()
    const { width, height, maxIteration } = props
    const zoomFactor = toRefs(props).zoomFactor
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

    const zoom = (index: number) => {
      const x = index % width
      const y = ~~(index / width)
      const zfw = width * zoomFactor.value
      const zfh = height * zoomFactor.value

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
    }

    const isSettings = (index: number) => index === map.value.length - 1

    return {
      map,
      palette,
      cssVars: {
        "--width": width,
        "--height": height,
      },
      isSettings,
      action: (index: number) => {
        if (isSettings(index)) {
          emit("toggleSettings")
        } else {
          zoom(index)
        }
      },
      sliders,
      socialLink,
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
