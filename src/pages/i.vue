<template lang="pug">
MyLead.snap-start

hr

.prose.snap-start
  h1 Portfolio
  blockquote Since many of my projects are ongoing or might be continued I place them on the timeline when they begin to emerge.

.snap-start.my-8
  h3.prose.prose-lg.text-gray(v-once)
    fa.mr-2(:icon="['fas', 'filter-list']")
    | Categories
  .item-list.mt-1
    ProjectPin(
      v-for="category in categories"
      :key="category"
      :category="category"
      v-model="showCategories[category]"
      @only="category => categories.reduce(onlyReducer(showCategories)(category), category)")

  h3.prose.prose-lg.text-gray.mt-2(v-once)
    fa.mr-2(:icon="['fas', 'filter-list']")
    | Tags
  .item-list.mt-1
    ProjectPin(
      v-for="tag in tags"
      :key="tag"
      :tag="tag"
      v-model="showTags[tag]"
      @only="tag => tags.reduce(onlyReducer(showTags)(tag), tag)")

template(v-for="{ description, ...project } of projects" :key="project.name")
  transition(name="fade" mode="out-in")
    TimelineItem(v-bind="project" v-if="filteredProjects.map(p => p.name).includes(project.name)")
      p {{ description }}

.snap-end.prose.mx-auto.text-center.py-12.italic.font-serif ~~ Thank you for your time and interest ~~
</template>

<script lang="ts" setup>
import { categories, tags } from "~/composables/useProject"
import { useHead } from "@vueuse/head"
import projects from "~/projects.json"

const showCategories = reactive(Object.fromEntries(categories.map(category => [category, true])))
const showTags = reactive(Object.fromEntries(tags.map(tag => [tag, true])))

const filteredProjects = computed(() =>
  projects.filter(({ category }) => showCategories[category]).filter(({ tags }) => tags.some(tag => showTags[tag]))
)

const onlyReducer =
  <T extends Category | Tag>(shows: Record<T[number], boolean>) =>
  (v: T) =>
  (_: T, t: T) => {
    shows[t] = v === t
    return t
  }

useHead({
  title: "Andras Serfozo ߷ Portfolio Page",
  meta: [
    {
      name: "description",
      content: "Showcase of my public scripts.",
    },
  ],
})
</script>

<route lang="yaml">
meta:
  layout: timeline
</route>
