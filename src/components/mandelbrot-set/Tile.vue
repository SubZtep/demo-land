<template lang="pug">
.tile(
  :style="{ '--r': rgb[0], '--g': rgb[1], '--b': rgb[2] }"
  :class="{ animUp, animDown }"
  @mouseover="handleOver"
  @mouseout="handleOut")
  slot
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, PropType } from "vue"

export default defineComponent({
  name: "Tile",
  props: {
    rgb: {
      type: Object as PropType<RGB>,
      required: true,
    },
  },
  setup(props) {
    const rgb = toRefs(props).rgb
    const animUp = ref(false)
    const animDown = ref(false)

    return {
      rgb,
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
  background-color: rgb(var(--r), var(--g), var(--b));
  transform-origin: center center;
}
.animUp {
  transform: scale(0.8);
  transform-style: preserve-3d;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
}
.animDown {
  transform: scale(1);
  transform-style: preserve-3d;
  transition-duration: 100ms;
  transition-timing-function: ease-in;
  transition-delay: 100ms;
}
</style>
