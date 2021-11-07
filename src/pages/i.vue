<template lang="pug">
MyLead.snap-start
hr
.prose.snap-start
  h1 Portfolio
  blockquote(class="!text-gray text-justify hyphens-auto") These codes are ongoing or might be continuing. Hence that I place them on the timeline when they begin to emerge. JavaScript filter implies its superset(?), the long time habituated #[strong TypeScript] as well.

ProjectFilters(:projects="parsedProjects" v-slot="{ filteredProjects }")
  template(v-for="{ description, ...project } of parsedProjects" :key="project.name")
    transition(name="fade" mode="out-in")
      TimelineItem(v-bind="project" v-if="filteredProjects.map(p => p.name).includes(project.name)")
        .prose.my-1(v-html="description")

.snap-end.prose.mx-auto.text-center.py-12.italic.font-serif
  | ~~ Thank you for your time and interest ~~
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"
import MarkdownIt from "markdown-it"
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
