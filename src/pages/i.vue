<template lang="pug">
.flex.gap-6.flex-col.snap-start(:class="'sm:flex-row'")
  ProfilePic.flex-shrink-0
  .prose.text-lg.font-serif.tracking-wide.self-center
    p Hello, My name is Andras and I am a developer. I live in London but I’m not a stranger in Budapest either. I share some of my work online, I like to and would like to contribute in many places.
    p
      fa.mr-2(:icon="['fas', 'triangle-person-digging']")
      | This is my portfolio page of pet projects I could find, and I’m always looking for new projects.

hr

.prose.mb-12.snap-start
  h1 Portfolio
  blockquote Since many of my projects are ongoing or might be continued I place them on the timeline when they begin to emerge. — I will update this page when I find more with those that are not NDA and presentable.

.snap-start(:class="$style.selectors")
  .flex.flex-wrap.gap-1
    ProjectPin.prose-sm(v-for="category in categories" :key="category" :category="category" v-model="showCategories[category]")

  .flex.flex-wrap.gap-1.mt-3
    ProjectPin.prose-sm(v-for="tag in tags" :key="tag" :tag="tag" v-model="showTags[tag]")

//- TimelineItem(v-for="{ description, ...project } of filteredProjects" :key="project.name" v-bind="project")
  p {{ description }}

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

const showCategories = ref(Object.fromEntries(categories.map(category => [category, true])))
const showTags = ref(Object.fromEntries(tags.map(tag => [tag, true])))

const filteredProjects = computed(() => {
  return projects
    .filter(({ category }) => showCategories.value[category])
    .filter(({ tags }) => tags.some(tag => showTags.value[tag]))
})

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

<style module>
.selectors {
  @apply text-sm select-none mb-8;
  accent-color: darkgreen;
}
</style>
