<template lang="pug">
div(:class="$style.pics")
  img(
    v-for="src in props.pictures"
    :key="src"
    :src="src"
    loading="lazy"
    :alt="`${props.name} screenshot`")
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  pictures: string[]
}>()

</script>

<style lang="postcss" module>
.pics {
  img {
    margin: 0 auto;
    @apply snap-start;
  }

  @apply
    pb-1
    flex gap-1 overflow-auto w-full
    scrollbar-thin light:(scrollbar-thumb-gray-300 scrollbar-track-white) dark:(scrollbar-thumb-gray-700 scrollbar-track-black)
    snap snap-block snap-mandatory snap-x;
}
</style>
