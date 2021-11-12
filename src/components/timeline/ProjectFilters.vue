<template lang="pug">
div(ref="filterRef" class="hover:opacity-100 transform-gpu -skew-y-1 my-8 opacity-30 duration-150")

  FilterLabel.mx-auto Filter by categories

  .item-list.mt-1.place-content-center
    ProjectPin(
      v-for="category in categories"
      :key="category"
      :category="category"
      v-model="showCategories[category]"
      @only="category => categories.reduce(onlyReducer(showCategories)(category), category)")

  hr(class="my-1 w-1/2 mx-auto")

  .item-list.place-content-center.mt-1
    ProjectPin(
      v-for="tag in tags"
      :key="tag"
      :tag="tag"
      v-model="showTags[tag]"
      @only="tag => tags.reduce(onlyReducer(showTags)(tag), tag)")

  FilterLabel.mx-auto Filter by tags

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
