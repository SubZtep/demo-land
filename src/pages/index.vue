<template lang="pug">
.w-screen.h-screen.flex.justify-center.items-center
  MandelbrotSet
</template>

<script setup lang="ts">
import { useWindowSize, useMouse, useCssVar, throttledWatch } from "@vueuse/core"

const { width: w, height: h } = useWindowSize()
const { x, y } = useMouse()
const pcx = useCssVar("--pcx")
const pcy = useCssVar("--pcy")

throttledWatch(
  [w, h, x, y],
  () => {
    pcx.value = String(~~((x.value / w.value) * 100))
    pcy.value = String(~~((y.value / h.value) * 100))
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
