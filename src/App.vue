<template lang="pug">
Settings(
  v-show="showSettings"
  v-model:width="width"
  v-model:height="height"
  v-model:maxIteration="maxIteration"
  v-model:paletteSize="paletteSize")

MandelbrotSet(
  :width="width"
  :height="height"
  :maxIteration="maxIteration"
  :paletteSize="paletteSize"
  :key="`${width}-${height}-${maxIteration}`"
  @toggleSettings="showSettings = !showSettings")
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Settings from "./components/Settings.vue"
import MandelbrotSet from "./components/MandelbrotSet.vue"
import { useWindowSize, useMouse, useCssVar, throttledWatch } from "@vueuse/core"

export default defineComponent({
  name: "App",
  components: {
    MandelbrotSet,
    Settings,
  },
  data() {
    return {
      showSettings: false,
      width: 15,
      height: 10,
      maxIteration: 30,
      paletteSize: 100,
    }
  },
  setup() {
    const { width: w, height: h } = useWindowSize()
    const { x, y } = useMouse()
    const px = useCssVar("--px")
    const py = useCssVar("--py")

    throttledWatch([w, h, x, y], () => {
      px.value = String(~~((x.value / w.value) * 100))
      py.value = String(~~((y.value / h.value) * 100))
    }, {
      throttle: 16
    })
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  overflow: hidden;
}
</style>
