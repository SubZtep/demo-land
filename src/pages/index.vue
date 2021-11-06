<template lang="pug">
.absolute.w-screen.h-screen.flex.justify-center.items-center.z-1
  client-only
    MandelbrotSet
.videobg.absolute.top-0.right-0.bottom-0.left-0
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"

useHead({
  title: "d̢̅ḛ̱̟͔̦̍̑̐̾̀m̝̽̍̚͢͟o̞͖͔͌̾̐.̭̞̗͐̏́̾͟la͙̹̤̔̅̉n͍̯͉͗̋̎d͔͞",
  meta: [
    {
      name: "description",
      content: "SEOgec he? 凸(￣ヘ￣)",
    },
  ],
})
</script>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
.videobg {
  background: url("/a-4o4.gif") no-repeat left center;
  background-size: cover;
  transform: var(--bg-pos, translate(0px, 0px));
  filter: blur(4px) brightness(0.6) contrast(1.3) grayscale(0.6) sepia(1);
}
</style>
