<template lang="pug">
transition(name="bounce")
  Settings(
    v-if="showSettings"
    v-model:width="width"
    v-model:height="height"
    v-model:maxIteration="maxIteration"
    v-model:paletteSize="paletteSize"
    v-model:zoomFactor="zoomFactor")

MandelbrotSet(
  :width="width"
  :height="height"
  :maxIteration="maxIteration"
  :paletteSize="paletteSize"
  :zoomFactor="zoomFactor"
  :key="`${width}-${height}-${maxIteration}`"
  @toggleSettings="showSettings = !showSettings")
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import Settings from "../components/Settings.vue"
// import MandelbrotSet from "../components/MandelbrotSet.vue"
import { useWindowSize, useMouse, useCssVar, throttledWatch } from "@vueuse/core"

export default defineComponent({
  name: "App",
  // components: {
  //   MandelbrotSet,
  //   Settings,
  // },
  setup() {
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
  },
  data() {
    return {
      showSettings: false,
      width: 15,
      height: 10,
      maxIteration: 30,
      paletteSize: 100,
      zoomFactor: 0.1,
    }
  },
})
</script>

<route lang="yaml">
meta:
  layout: blank
  ccc: sunny
</route>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
