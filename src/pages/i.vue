<template lang="pug">
MyLead.snap-start
hr.my-4
.prose.mb-8
  blockquote(class="text-justify hyphens-auto !text-gray") The codes below are ongoing or might be continuing. Hence that the timeline date indicates when they begin to emerge. JavaScript filter implies #[u TypeScript] as well.
.prose.mx-auto
  h1.snap-start Portfolio

ProjectFilters.projects(
  :projects="parsedProjects"
  v-slot="{ filteredProjects }")

  .projects
    transition-group(name="list")

      TimelineItem(
        v-for="project of filteredProjects"
        :key="project.name"
        :project="project")

        ProjectPictures(
          v-if="project.pictures"
          :name="project.name"
          :pictures="project.pictures")

        div(v-html="project.description")

hr
.footer
  | ~~ ౦０o ｡ (‾́。‾́ )y~~ Thank You for visiting! _(:3 」∠)_ ~~
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"
import MarkdownIt from "markdown-it"
import useSearch from "~/composables/useSearchFake"
import projects from "~/projects.json"

useSearch()

const md = new MarkdownIt({ breaks: true, typographer: true })
const parsedProjects = projects.map(project => ({
  ...project,
  // TODO: sincs markdown spec missing link target, find or make a plugin that does the same as below.
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

<style scoped>
@media (min-width: 1180px) {
  .projects {
    column-count: 2;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 500ms ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.footer {
  @apply snap-end prose mx-auto text-center italic font-serif pb-8;
}
</style>
