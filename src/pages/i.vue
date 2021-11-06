<template lang="pug">
div(class="sm:flex-row flex gap-6 flex-col snap-start")
  ProfilePic(class="flex-shrink-0 <sm:mx-auto")
  .prose.text-lg.font-serif.tracking-wide.self-center
    p Hello, My name is Andras. I write code. I live in London but I’m not a stranger in Budapest too, and might be able to appear in a few places. Including online places because I’m a web developer and I share some of my work, I like to and would like to contribute in many places.
    p This is my portfolio page where I share what I could find available, and I’m always looking for new projects.

hr.opacity-15.my-6

.prose.mb-12
  h1 Portfolio
  blockquote Since many of my projects are ongoing or might be continued I place them on the timeline when they begin to emerge. — I will update this page when I find more with those that are not NDA and presentable.

//- strong.text-white Categories
//- .text-white(v-for="category in categories" :key="category")
//-   fa(:icon="toIcon(category)")
//-   | {{ category }}
//- strong.text-white Tags
//- .text-white(v-for="tag in tags" :key="tag")
//-   fa(:icon="toIcon(tag)")
//-   | {{ tag }}

TimelineItem(v-for="{ description, ...project } of projects" :key="project.name" v-bind="project")
  p {{description}}

.snap-end.prose.mx-auto.text-center.py-12.italic.font-serif ~~ Thank you for your time and interest ~~
</template>

<script lang="ts">
export const categories = ["Script", "Game", "Plugin", "WebApp", "NFT", "Website"] as const
export const tags = ["PHP", "C#", "Unity3D", "VR", "JavaScript", "TypeScript", "React", "CSS"] as const
export const toIcon = (name: typeof categories[number] | typeof tags[number]) => {
  switch (name) {
    case "PHP":
      return ["fab", "php"]
    case "C#":
      return ["fas", "code"]
    case "Unity3D":
      return ["fab", "unity"]
    case "VR":
      return ["fas", "vr-cardboard"]
    case "JavaScript":
      return ["fab", "js"]
    case "TypeScript":
      return ["fas", "code"]
    case "React":
      return ["fab", "react"]
    case "CSS":
      return ["fab", "css3-alt"]
    case "Script":
      return ["fas", "code"]
    case "Game":
      return ["fas", "gamepad"]
    case "Plugin":
      return ["fas", "plug"]
    case "WebApp":
      return ["fas", "globe"]
    case "NFT":
      return ["fas", "hand-holding-usd"]
    case "Website":
      return ["fas", "globe"]
    default:
      return ["fas", "question"]
  }
}
</script>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"
import projects from "~/projects.json"

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
