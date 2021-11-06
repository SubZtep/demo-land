<template lang="pug">
article.py-4.mb-2.snap-start
  .flex.justify-between.content-start.w-full
    .prose
      h2 {{props.name}}
      .item-list
        ProjectPin(:category="props.category")
        ProjectPin(v-for="tag in props.tags" :key="tag" :tag="tag")
    DateCalendar.mt-4(:date="props.created")

  slot

  .item-list.mt-3
    a.btn(v-if="props.website" :href="props.website" target="_blank" :title="props.website")
      fa(:icon="['fas', 'link']")
    a.btn(v-if="props.github" :href="props.github" target="_blank" :title="props.github")
      fa(:icon="['fab', 'github']")
    a.btn(v-if="props.youtube" :href="props.youtube" target="_blank" :title="props.youtube")
      fa(:icon="['fab', 'youtube']")
</template>

<script lang="ts" setup>
import useProject, { categories, tags } from "~/composables/useProject"

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
</script>
