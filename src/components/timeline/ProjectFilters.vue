<template lang="pug">
.-mt-8.transform-gpu.-skew-y-1(ref="filterRef")

  FilterLabel Filter by categories

  .item-list.mt-1
    ProjectPin(
      v-for="category in categories"
      :key="category"
      :category="category"
      v-model="showCategories[category]"
      @only="category => categories.reduce(onlyReducer(showCategories)(category), category)")

  .item-list.mt-1
    ProjectPin(
      v-for="tag in tags"
      :key="tag"
      :tag="tag"
      v-model="showTags[tag]"
      @only="tag => tags.reduce(onlyReducer(showTags)(tag), tag)")

  FilterLabel Filter by tags

slot(:filteredProjects="filteredProjects")
</template>

<script lang="ts" setup>
import { categories, tags } from "~/composables/useProject"

const props = defineProps<{ projects: Project[] }>()
const showCategories = useSessionStorage("categories", Object.fromEntries(categories.map(category => [category, true])))
const showTags = useSessionStorage("tags", Object.fromEntries(tags.map(tag => [tag, true])))

const filterRef = ref()
const isHovered = useElementHover(filterRef)
watch(isHovered, hovered => void document.body.classList.toggle("sticky", hovered))

const filteredProjects = computed(() =>
  props.projects
    .filter(({ category }) => get(showCategories)[category])
    .filter(({ tags }) => tags.some(tag => get(showTags)[tag]))
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
