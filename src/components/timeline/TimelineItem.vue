<template lang="pug">
article.snap-start.flex.flex-col.prose.gap-1.relative

  h2 {{project.name}}
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
