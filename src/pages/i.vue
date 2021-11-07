<template lang="pug">
MyLead.snap-start
hr
.prose.snap-start
  h1 Portfolio
  blockquote.text-justify.hyphens-auto(class="!text-gray") These codes are ongoing or might be continuing. Hence that the timeline date is when they begin to emerge. JavaScript filter implies #[u TypeScript] as well.

ProjectFilters(:projects="parsedProjects" v-slot="{ filteredProjects }")
  template(v-for="{ description, pictures, ...project } of parsedProjects" :key="project.name")
    transition(name="fade" mode="out-in")
      UseElementVisibility(v-slot="{ isVisible }")
        TimelineItem(v-bind="project" v-if="filteredProjects.map(p => p.name).includes(project.name)")
          .max-w-65ch
            ProjectPictures.my-6(
              v-if="isVisible && pictures"
              :pictures="pictures"
              :key="project.name + pictures.length")
            ProjectYoutube.my-6(
              v-if="isVisible && project.youtube"
              :youtube="project.youtube"
              :key="project.name + project.youtube")

          .prose.my-1(v-html="description")

hr
.snap-end.prose.mx-auto.text-center.pb-8.italic.font-serif
  | ~~ ౦０o ｡ (‾́。‾́ )y~~ Thank You for visiting! _(:3 」∠)_ ~~
</template>

<script lang="ts" setup>
import { UseElementVisibility } from "@vueuse/components"
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
