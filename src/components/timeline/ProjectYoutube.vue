<template lang="pug">
iframe#player.mx-auto.h-82.w-full.mt-6(
  :src="`https://www.youtube.com/embed/${props.youtube.split('=')[1]}?enablejsapi=0&controls=1&fs=1&modestbranding=1&playsinline=1&rel=0&autoplay=0&repeat=1&mute=0&origin=https://demo.land`"
  :allowfullscreen="false"
  :allowpaymentrequest="false"
  loading="lazy"
  type="text/html"
  referrerpolicy="origin"
  frameborder="0")
</template>

<script lang="ts" setup>
const props = defineProps<{ youtube: string }>()
</script>
