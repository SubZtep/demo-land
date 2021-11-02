<template lang="pug">
div(class="sm:flex-row flex gap-6 flex-col snap-start")
  ProfilePic(class="flex-shrink-0 <sm:mx-auto")
  .prose.text-lg.font-serif.tracking-wide.self-center
    p Hello, My name is Andras. I write code. I live in London but I’m not a stranger in Budapest too, and might be able to appear in a few places. Including online places because I’m a web developer and I share some of my work, I like to and would like to contribute in many places.
    p This is my portfolio page where I share what I could find available, and I’m always looking for new projects.

hr.opacity-15.my-6

fa(:icon="['fat', 'trash']")

.prose.mb-12
  h1 Portfolio
  blockquote Since many of my projects are ongoing or might be continued I place them on the timeline when they begin to emerge. — I will update this page when I find more with those that are not NDA and presentable.

//-TimelineItem(v-for="{ description, ...item} of items" :key="item.name" v-bind="item")
  p {{description}}


//-TimelineItem(name="PHP Cron" category="Script" :created="new Date(2016, 4, 4)")
  p This script is able to execute scripts, like crontab. But more often.

//-article.prose
  h2 Blalala
  p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

.snap-end.prose.mx-auto.text-center.py-12.italic.font-serif ~~ Thank you for your time and interest ~~
</template>

<script lang="ts" setup>
// import { useHead } from "@vueuse/head"
// import { readonly } from "vue"
// import projects from "~/assets/data/projects.toml"
// import projects from "../assets/data/projects.toml"

// import projects from "~/assets/data/projects.toml"

// import * as projects from "~/assets/data/projects.toml"
// import { ProjectList } from "~/types/projects"

// useHead({
//   // TODO: fill the rest and check html updates with ssg.
//   title: "Andras Serfozo ߷ Portfolio Page",
//   meta: [
//     {
//       name: "description",
//       content: "Showcase of my public scripts.",
//     },
//   ],
// })


// console.log("XXX", projects)
// const items = readonly<ProjectList>(projects.project)
</script>

<route lang="yaml">
meta:
  layout: timeline
</route>

<!-- <style>
article {
  @apply my-15 snap-start;
  /* height: 100vh; */
}
</style> -->
