<template lang="pug">
.prose.text-center.flex.items-start
  div(:class="$style.date")
    .text-gray(v-for="d in dateParts" :key="d") {{d}}
  fa.text-gray.opacity-20.scale-200.transform-gpu.text-2xl(:icon="['far', 'calendar']")
</template>

<script lang="ts" setup>
const props = defineProps<{ date: string }>()

const dateParts = computed(() =>
  new Date(props.date).toLocaleString("en-GB", { year: "numeric", month: "short", day: "numeric" }).split(" ").reverse()
)
</script>

<style lang="postcss" module>
.date {
  transform: translateX(1.6rem);
  @apply font-mono;
  > :nth-child(1) {
    @apply text-lg dark:text-outline;
  }
  > :nth-child(2) {
    @apply text-2xl leading-2 font-bold dark:text-outline-2;
  }
  > :nth-child(3) {
    @apply leading-8 dark:text-outline;
  }
}
</style>
