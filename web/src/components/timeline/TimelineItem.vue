<template lang="pug">
article.bg-blue-gray-800.rounded.my-8.p-4

  .flex.justify-between.w-full
    h2.text-xl.font-bold.prose {{props.name}}
    .bg-yellow-600.rounded {{props.category}}
    .italic.prose {{formattedDate}}

  .prose
    slot
</template>

<script lang="ts" setup>
import { computed } from "vue"

export interface TimelineItemProps {
  name: string
  category: string
  created: string
  // category: Category
  // created: Date
}

const props = defineProps<TimelineItemProps>()

const formattedDate = computed(() => {
  return new Date(props.created).toLocaleDateString()
})
</script>
