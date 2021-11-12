<template lang="pug">
div(:class="$style.videobg")

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

<script lang="ts" setup>import { useHead } from '@vueuse/head'

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

useHead({
  title: "d̢̅ḛ̱̟͔̦̍̑̐̾̀m̝̽̍̚͢͟o̞͖͔͌̾̐.̭̞̗͐̏́̾͟la͙̹̤̔̅̉n͍̯͉͗̋̎d͔͞",
  meta: [
    {
      name: "description",
      content: "SEOgec he? 凸(￣ヘ￣)",
    },
  ],
})
</script>

<style module>
.videobg {
  @apply absolute top-0 right-0 bottom-0 left-0;
  background: url("/a-4o4.gif") no-repeat left center;
  background-size: cover;
  transform: var(--bg-pos, translate(0px, 0px));
  animation: crot 10s infinite linear alternate;
}

@keyframes crot {
  from {
    filter: blur(4px) brightness(0.6) contrast(1.3) grayscale(0.6) sepia(1) hue-rotate(0deg);
  }
  to {
    filter: blur(4px) brightness(0.6) contrast(1.3) grayscale(0.6) sepia(1) hue-rotate(360deg);
  }
}
</style>
