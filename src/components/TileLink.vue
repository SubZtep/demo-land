<template lang="pug">
a(:href="link.link" target="_blank" rel="noopener noreferrer")
  img(:src="link.icon" :alt="link.alt")
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  name: "TileLink",
  props: {
    link: {
      type: Object as PropType<SocialLink>,
      required: true,
    },
  },
})
</script>

<style scoped>
a {
  width: 100%;
  height: 100%;
  padding: 20%;
  display: block;
}

img {
  opacity: 0.3;
  cursor: pointer;
  width: inherit;
  height: inherit;
  transition-duration: 200ms;
  filter: invert(0.5) sepia(1);
}

img:hover {
  opacity: 1;
}
</style>
