<template lang="pug">
.grid
  template(v-for="(m, index) in map")
    Tile(v-if="m" :key="`${index}-${m}`" :rgb="palette[m % (palette.length - 1)]")
    div.empty(v-else)
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted, toRefs } from "vue"
import { throttledWatch, useWindowSize, useCssVar } from "@vueuse/core"
import MandelbrotWorker from "~/workers/mandelbrot?worker"
import usePalette from "~/use/palette"

export default defineComponent({
  props: {
    edge: {
      type: Number,
      default: 100,
    },
    width: {
      type: Number,
      default: 15,
    },
    height: {
      type: Number,
      default: 10,
    },
    maxIteration: {
      type: Number,
      default: 30,
    },
    paletteSize: {
      type: Number,
      default: 100,
    },
  },

  setup: (props, { emit }) => {
    const { width: w, height: h } = useWindowSize()

    const width = ~~(w.value / props.edge)
    const height = ~~(h.value / props.edge)

    const edge = useCssVar("--edge")
    edge.value = `${props.edge}px`

    const angle = useCssVar("--angle")
    angle.value = `1.3deg`

    const cols = useCssVar("--cols")
    cols.value = String(width)

    const rows = useCssVar("--rows")
    rows.value = String(height)

    const { generatePalette } = usePalette()
    const { maxIteration } = props
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
      palette,
    }
  },
})
</script>

<style scoped>
.grid {
  display: grid;
  width: calc(var(--cols) * var(--edge));
  height: calc(var(--rows) * var(--edge));

  grid-template-columns: repeat(var(--cols), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  backface-visibility: hidden;

  transform-origin: center center;
  transform: rotateY(calc((var(--pcx) - 50) * var(--angle))) rotateX(calc((var(--pcy) - 50) * (-1 * var(--angle))));
  transform-style: preserve-3d;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

.grid > * {
  width: var(--edge);
  height: var(--edge);
}

.grid > *:not(.empty) {
  box-shadow: 1px 1px 2px #000;
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
