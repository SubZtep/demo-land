<template lang="pug">
.mandelbrotTile(
  ref="el"
  :class="{ animUp, animDown }"
  @mouseover="handleOver"
  @mouseout="handleOut")
  slot
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { ref, onMounted, defineProps } from "vue"
import { useCssVar } from "@vueuse/core"

const props = defineProps({
  rgb: {
    type: Object as PropType<RGB>,
    required: true,
  },
})

const el = ref(null)
const animUp = ref(false)
const animDown = ref(false)

onMounted(() => {
  const rgb = useCssVar("--rgb", el)
  requestAnimationFrame(() => (rgb.value = `rgb(${props.rgb.join(",")})`))
})

const handleOver = () => {
  animUp.value = true
  animDown.value = false
}
const handleOut = () => {
  animUp.value = false
  animDown.value = true
}
</script>

<style lang="postcss">
.mandelbrotTile {
  background-color: var(--rgb);
  transform-origin: center center;
  box-shadow: 1px 1px 2px #000;
  cursor: none;

  /* &:hover {
    transform: translateZ(8px) scale(1.2) rotateZ(90deg);
    transition-duration: 250ms;
    transition-timing-function: ease-out;
  } */
  /* transform: rotateZ(0);
  transition-duration: 250ms; */

  &.animUp {
    transform: scale(0.95) translateZ(-1px);
    transform-style: preserve-3d;
    transition-duration: 250ms;
    transition-timing-function: ease-out;
  }
  &.animDown {
    transform-style: preserve-3d;
    transition-duration: 150ms;
    transition-timing-function: ease-in;
    transition-delay: 100ms;
  }
}
</style>
