<template lang="pug">
article.py-4.mb-8.snap-start

  .flex.justify-between.w-full
    div.prose
      h2 {{props.name}}

      .my-2.flex.flex-wrap.gap-3.text-xs
        ProjectPin(:category="props.category")
        ProjectPin(v-for="tag in props.tags" :key="tag" :tag="tag")

    div
      .inline.italic.prose.text-right.mr-2 {{formatDate(props.created)}}
      fa.text-gray-500(:icon="['fas', 'calendar']")

  p.prose.my-1
    slot

  div(:class="$style.links")
    a(v-if="props.website" :href="props.website" target="_blank" :title="props.website")
      fa(:icon="['fas', 'link']")
    a(v-if="props.github" :href="props.github" target="_blank" :title="props.github")
      fa(:icon="['fab', 'github']")
    a(v-if="props.youtube" :href="props.youtube" target="_blank" :title="props.youtube")
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

const formatDate = (date: string) => new Date(date).toLocaleDateString()
</script>

<style module lang="postcss">
.links {
  @apply text-blue-gray-400 light:text-blue-gray-800 flex gap-1 mt-3;
  a {
    border-width: 2px;
    border-style: outset;
    @apply border-blue-gray-700 light:border-blue-gray-200;
    padding: 4px;
    width: 2.4rem;
    text-align: center;
    &:hover {
      @apply border-blue-gray-500 light:border-blue-gray-300;
    }
    &:focus:hover {
      border-style: inset;
      transform: translate(1px, 1px);
    }
  }
}
</style>
