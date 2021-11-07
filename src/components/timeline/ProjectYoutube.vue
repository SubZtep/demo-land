<template lang="pug">
//- iframe id="player" type="text/html" width="640" height="390"
//-   src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
//-   frameborder="0"></iframe>
iframe#player.yt(type="text/html"
  :src="`http://www.youtube.com/embed/${ytid}?enablejsapi=1&controls=1&fs=1&modestbranding=1&playsinline=1&rel=0&autoplay=0&repeat=1&mute=0&origin=https://demo.land`"
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