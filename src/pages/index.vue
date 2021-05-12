<template lang="pug">
MandelbrotSet(
  :width="width"
  :height="height"
  :maxIteration="maxIteration"
  :paletteSize="paletteSize"
  :zoomFactor="zoomFactor"
  :key="`${width}-${height}-${maxIteration}`")
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  data() {
    return {
      width: ref(15),
      height: ref(10),
      maxIteration: ref(30),
      paletteSize: ref(100),
      zoomFactor: ref(0.1),
    }
  }
})
</script>

<script setup lang="ts">
import { useWindowSize, useMouse, useCssVar, throttledWatch } from "@vueuse/core"

const { width: w, height: h } = useWindowSize()
const { x, y } = useMouse()
const px = useCssVar("--px")
const py = useCssVar("--py")

throttledWatch(
  [w, h, x, y],
  () => {
    px.value = String(~~((x.value / w.value) * 100))
    py.value = String(~~((y.value / h.value) * 100))
  },
  {
    throttle: 16,
  }
)
</script>

<route lang="yaml">
meta:
  layout: blank
</route>
