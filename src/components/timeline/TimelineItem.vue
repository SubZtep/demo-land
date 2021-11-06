<template lang="pug">
article.py-4.mb-8.snap-start

  .flex.justify-between.w-full
    div
      h2.text-xl.font-bold.prose {{props.name}}

      .my-2.flex.gap-3.text-xs
        PinCategory(:category="props.category")
        PinTag(v-for="tag in props.tags" :key="tag" :tag="tag")

    .italic.prose {{formatDate(props.created)}}

  p.prose.my-1
    slot

  .text-xs.text-blue-gray-600
    a.block(v-if="props.website" :href="props.website" ref="noopener noreferrer" target="_blank") {{props.website}}
    a.block(v-if="props.github" :href="props.github" ref="noopener noreferrer" target="_blank") {{props.github}}
    a.block(v-if="props.youtube" :href="props.youtube" ref="noopener noreferrer" target="_blank") {{props.youtube}}
</template>

<script lang="ts" setup>
import { categories, tags } from "~/pages/i.vue"

export interface TimelineItemProps {
  name: string
  category: typeof categories[number]
  tags: Array<typeof tags[number]>
  created: string
  github?: string
  youtube?: string
  website?: string
}

const props = defineProps<TimelineItemProps>()

const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString()
}
</script>
