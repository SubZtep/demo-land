<template lang="pug">
.text-center.absolute.right-10.-mt-6
  .relative
    div(:class="$style.date")
      .text-gray(v-for="d in dateParts" :key="d") {{d}}
    fa(:class="$style.cal" :icon="['far', 'calendar']")
</template>

<script lang="ts" setup>
const props = defineProps<{ date: string }>()

const dateParts = computed(() =>
  new Date(props.date).toLocaleString("en-GB", { year: "numeric", month: "short", day: "numeric" }).split(" ").reverse()
)
</script>

<style lang="postcss" module>
.date {
  @apply absolute top-0 font-mono opacity-80;
  > :nth-child(1) {
    @apply text-lg dark:text-outline;
  }
  > :nth-child(2) {
    @apply text-2xl leading-2 font-bold dark:text-outline-2;
  }
  > :nth-child(3) {
    @apply leading-8 dark:text-outline opacity-30;
  }
}

.cal {
  @apply absolute top--0.5 left--2.5 text-gray opacity-15 scale-250 transform-gpu text-2xl;
}
</style>
