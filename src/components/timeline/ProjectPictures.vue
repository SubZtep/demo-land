<template lang="pug">
.pics
  img.snap-start(v-for="src in props.pictures" :src="src" :key="src" loading="lazy")
</template>

<script lang="ts" setup>
const props = defineProps<{ pictures: string[] }>()
</script>

<style scoped>
.pics {
  overflow: auto;
  display: flex;
  gap: 0.5rem;
  padding-bottom: 0.5rem;

  @apply scrollbar light:scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 
    light:scrollbar-track-white dark:scrollbar-track-black
    snap snap-block snap-mandatory snap-x;

  @screen sm {
    height: 20rem;
  }
  @screen <sm {
    width: 100%;
    aspect-ratio: 16/9;
  }
}
</style>