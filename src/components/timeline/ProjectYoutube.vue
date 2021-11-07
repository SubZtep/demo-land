<template lang="pug">
iframe#player.yt(type="text/html"
  :src="`https://www.youtube.com/embed/${ytid}?enablejsapi=1&controls=1&fs=1&modestbranding=1&playsinline=1&rel=0&autoplay=0&repeat=1&mute=0&origin=https://demo.land`"
  frameborder="0")
</template>

<script lang="ts" setup>
const props = defineProps<{ youtube: string }>()
const ytid = computed(() => props.youtube.split("=")[1])
</script>

<style scoped>
.yt {

  @screen sm {
    height: 20rem;
    aspect-ratio: 16/9;
  }
  @screen <sm {
    width: 100%;
    aspect-ratio: 16/9;
  }
}
</style>