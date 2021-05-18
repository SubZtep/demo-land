<template lang="pug">
.mandelbrotTile(
  :style="{ '--rgb': `rgb(${props.rgb.join(',')})` }"
  :class="{ animUp, animDown }"
  @mouseover="toggleAnims"
  @mouseout="toggleAnims")
  slot
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { defineProps } from "vue"
import { useToggle } from "@vueuse/core"

const props = defineProps({
  rgb: {
    type: Object as PropType<RGB>,
    required: true,
  },
})

const [animUp, animUpToggle] = useToggle(false)
const [animDown, animDownToggle] = useToggle(false)

const toggleAnims = () => {
  animUpToggle()
  animDownToggle()
}
</script>

<style lang="postcss">
.mandelbrotTile {
  @apply w-full h-full;
  background-color: var(--rgb);
  box-shadow: 1px 1px 2px #000;
  cursor: none;

  &.animUp {
    transform: scale(0.95) translateZ(-1px);
    transition-timing-function: ease-out;
    transition-duration: 250ms;
  }
  &.animDown {
    transition-timing-function: ease-in;
    transition-duration: 150ms;
    transition-delay: 100ms;
  }
}
</style>
