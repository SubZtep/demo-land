<template lang="pug">
.snap-start.my-6
  .prose.text-grayer.font-mono(v-once)
    fa.mr-2(:icon="['fas', 'filter-list']")
    | Filter categories
  .item-list.mt-1
    ProjectPin(
      v-for="category in categories"
      :key="category"
      :category="category"
      v-model="showCategories[category]"
      @only="category => categories.reduce(onlyReducer(showCategories)(category), category)")

  .prose.text-grayer.font-mono.mt-3(v-once)
    fa.mr-2(:icon="['fas', 'filter-list']")
    | Filter tags
  .item-list.mt-1
    ProjectPin(
      v-for="tag in tags"
      :key="tag"
      :tag="tag"
      v-model="showTags[tag]"
      @only="tag => tags.reduce(onlyReducer(showTags)(tag), tag)")

slot(:filteredProjects="filteredProjects")
</template>

<script lang="ts" setup>
import { categories, tags } from "~/composables/useProject"

const props = defineProps<{ projects: Project[] }>()
const showCategories = useSessionStorage("categories", Object.fromEntries(categories.map(category => [category, true])))
const showTags = useSessionStorage("tags", Object.fromEntries(tags.map(tag => [tag, true])))

const filteredProjects = useDebounce(
  computed(() =>
    props.projects
      .filter(({ category }) => get(showCategories)[category])
      .filter(({ tags }) => tags.some(tag => get(showTags)[tag]))
  ),
  250
)

const onlyReducer =
  <T extends Category | Tag>(shows: Record<T[number], boolean>) =>
  (v?: T) =>
  (_?: T, t?: T) => {
    if (t !== undefined) {
      shows[t] = v === undefined ? true : v === t
      return t
    }
  }
</script>
