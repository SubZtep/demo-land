<template lang="pug">
.tile(
  ref="el"
  :class="{ animUp, animDown }"
  @mouseover="handleOver"
  @mouseout="handleOut")
  slot
</template>

<script lang="ts">
import { defineComponent, ref, PropType, onMounted } from "vue"
import { useCssVar } from "@vueuse/core"

export default defineComponent({
  name: "Tile",
  props: {
    rgb: {
      type: Object as PropType<RGB>,
      required: true,
    },
  },
  setup(props) {
    const el = ref(null)
    const animUp = ref(false)
    const animDown = ref(false)

    onMounted(() => {
      const rgb = useCssVar("--rgb", el)
      requestAnimationFrame(() => {
        rgb.value = `rgb(${props.rgb.join(",")})`
      })
    })

    return {
      el,
      animUp,
      animDown,
      handleOver: () => {
        animUp.value = true
        animDown.value = false
      },
      handleOut: () => {
        animUp.value = false
        animDown.value = true
      },
    }
  },
})
</script>

<style scoped>
.tile {
  background-color: var(--rgb);
  transform-origin: center center;
}
.animUp {
  transform: scale(0.85) translateZ(-2px);
  transform-style: preserve-3d;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
}
.animDown {
  transform-style: preserve-3d;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
  transition-delay: 100ms;
}
</style>
