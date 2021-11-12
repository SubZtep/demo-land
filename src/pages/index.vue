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

<script lang="ts" setup>
const showSettings = ref(false)
const width = ref(15)
const height = ref(10)
const maxIteration = ref(30)
const paletteSize = ref(100)
const zoomFactor = ref(0.1)

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
