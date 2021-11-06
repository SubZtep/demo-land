<template lang="pug">
div(class="sm:flex-row flex gap-6 flex-col snap-start")
  ProfilePic(class="flex-shrink-0 <sm:mx-auto")
  .prose.text-lg.font-serif.tracking-wide.self-center
    p Hello, My name is Andras. I live in London but I’m not a stranger in Budapest too, and might be able to appear in a few places. Including online places because I’m a web developer and I share some of my work. I like to and would like to contribute in many places.
    p This is my portfolio page of side-projects I could found, and I’m always looking for new projects.

hr.opacity-15.my-6

.prose.mb-12.snap-start
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

.snap-start(:class="$style.selectors")
  .flex.flex-wrap.gap-1
    label.cursor-pointer(v-for="category in categories" :key="category")
      PinCategory.border(:category="category" :class="showCategories[category] ? 'border-blue-gray-600' : 'border-blue-gray-700 text-blue-gray-700'")
        input.mr-1(type="checkbox" v-model="showCategories[category]")

  .flex.flex-wrap.gap-1.mt-3
    label.cursor-pointer(v-for="tag in tags" :key="tag")
      PinTag.border(:tag="tag" :class="showTags[tag] ? 'border-blue-gray-600 text-blue-gray-600' : 'border-blue-gray-800 text-blue-gray-700'")
        input(type="checkbox" v-model="showTags[tag]")

TimelineItem(v-for="{ description, ...project } of filteredProjects" :key="project.name" v-bind="project")
  p {{description}}

.snap-end.prose.mx-auto.text-center.py-12.italic.font-serif ~~ Thank you for your time and interest ~~
</template>

<script lang="ts">
export const categories = ["Script", "Game", "Plugin", "WebApp", "NFT", "Website"] as const
export const tags = ["PHP", "C#", "Unity3D", "VR", "JavaScript", "TypeScript", "React", "CSS", "Vue"] as const
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
    case "Vue":
      return ["fab", "vuejs"]
    default:
      return ["fas", "question"]
  }
}
</script>

<script lang="ts" setup>
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
