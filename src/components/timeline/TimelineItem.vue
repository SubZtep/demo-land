<template lang="pug">
article.py-4.snap-start

  .flex.justify-between.w-full
    div
      h2.text-xl.font-bold.prose {{props.name}}

      .my-2.flex.gap-3
        PinCategory(:category="props.category")
        PinTag(v-for="tag in props.tags" :key="tag" :tag="tag")

    .italic.prose {{formatDate(props.created)}}

  p.prose
    slot
</template>

<script lang="ts" setup>
import { categories, tags } from "~/pages/i.vue"

export interface TimelineItemProps {
  name: string
  category: typeof categories[number]
  tags: Array<typeof tags[number]>
  created: string
  github?: string
  website?: string
}

const props = defineProps<TimelineItemProps>()

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString()
}
</script>
