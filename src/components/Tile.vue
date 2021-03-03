<template lang="pug">
.tile(:style="cssVars" :class="{ animUp, animDown }" @mouseover="handleOver" @mouseout="handleOut")
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
      animUp,
      animDown,
      cssVars: {
        "--r": rgb.value[0],
        "--g": rgb.value[1],
        "--b": rgb.value[2],
      },
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
  /* cursor: zoom-in; */
  background-color: rgb(var(--r), var(--g), var(--b));
  transform-origin: center center;
}
.animUp {
  /* transform: translateZ(150px) scale(0.1); */
  transform: scale(0.6);
  transform-style: preserve-3d;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
}
.animDown {
  /* transform: translateZ(0px) scale(1); */
  transform: scale(1);
  transform-style: preserve-3d;
  transition-duration: 100ms;
  transition-timing-function: ease-in;
  transition-delay: 100ms;
}
</style>
