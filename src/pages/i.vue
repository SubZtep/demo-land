<template lang="pug">
MyLead.snap-start

hr

.prose.snap-start
  h1 Portfolio
  blockquote(class="!text-gray") These codes are ongoing or might be continuing. Hence that I place them on the timeline when they begin to emerge. JavaScript filter implies its superset(?), the long time habituated #[strong TypeScript] as well.

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

template(v-for="{ description, ...project } of parsedProjects" :key="project.name")
  transition(name="fade" mode="out-in")
    TimelineItem(v-bind="project" v-if="filteredProjects.map(p => p.name).includes(project.name)")
      .prose.my-1(v-html="description")

.snap-end.prose.mx-auto.text-center.py-12.italic.font-serif ~~ Thank you for your time and interest ~~
</template>

<script lang="ts" setup>
import { useSessionStorage } from "@vueuse/core"
import { useHead } from "@vueuse/head"
import MarkdownIt from "markdown-it"
import { categories, tags } from "~/composables/useProject"
import useSearch from "~/composables/useSearchFake"
import projects from "~/projects.json"

useSearch()

const md = new MarkdownIt({
  breaks: true,
  typographer: true,
})
const parsedProjects = projects.map(project => ({
  ...project,
  description: md.render(project.description).replaceAll("<a href=", '<a rel="noopener" target="_blank" href='),
}))

const showCategories = useSessionStorage("categories", Object.fromEntries(categories.map(category => [category, true])))
const showTags = useSessionStorage("tags", Object.fromEntries(tags.map(tag => [tag, true])))

const filteredProjects = useDebounce(computed(() =>
  projects
    .filter(({ category }) => get(showCategories)[category])
    .filter(({ tags }) => tags.some(tag => get(showTags)[tag]))
), 250)

const onlyReducer =
  <T extends Category | Tag>(shows: Record<T[number], boolean>) =>
  (v?: T) =>
  (_?: T, t?: T) => {
    if (t !== undefined) {
      shows[t] = v === undefined ? true : v === t
      return t
    }
  }

useHead({
  title: "Andras Serfozo ߷ Portfolio Page",
  meta: [
    {
      name: "description",
      content: "Showcase of my public projects.",
    },
  ],
})
</script>

<route lang="yaml">
meta:
  layout: timeline
</route>
