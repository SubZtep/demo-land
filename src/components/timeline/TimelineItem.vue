<template lang="pug">
article

  h2.text-left {{project.name}}
  .item-list
    DateCalendar(:date="project.created")
    ProjectPin(:category="project.category")
    ProjectPin(v-for="tag in project.tags" :key="tag" :tag="tag")

  slot

  ProjectLinks(:project="project")
</template>

<script lang="ts" setup>

const props = defineProps<{ project: Project }>()
const project = toRef(props, "project")
</script>

<style scoped>
article {
  @apply
    snap-start flex flex-col prose gap-1 relative w-600px mb-13 p-2
    duration-500 hover:(light:bg-cool-gray-200/30 dark:bg-blue-gray-800/30 rounded-lg)
}
</style>
