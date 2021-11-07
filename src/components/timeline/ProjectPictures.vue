<template lang="pug">
.mx-auto.h-82.w-full(:class="$style.pics")
  a(v-for="src in props.pictures" :key="src" :href="src" rel="noopener" target="_blank")
    img.snap-start(:src="src" loading="lazy" alt="Project screenshot")
</template>

<script lang="ts" setup>
const props = defineProps<{ pictures: string[] }>()
</script>

<style lang="postcss" module>
.pics {
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;

  @apply
    scrollbar-thin light:(scrollbar-thumb-gray-300 scrollbar-track-white) dark:(scrollbar-thumb-gray-700 scrollbar-track-black)
    snap snap-block snap-mandatory snap-x;

  a, img {
    height: 100%;
    aspect-ratio: 16/9;
  }
}
</style>
