<template lang="pug">
div(class="gap-1.5 item-list gap-3")

  a.btn(v-if="project.blog" :href="project.blog" target="_blank" rel="noopener" :title="`Open blog post`")
    fa.text-lg(:icon="['fas', 'rss']")

  a.btn(v-if="project.website" :href="project.website" target="_blank" rel="noopener" :title="`Open website`")
    fa.text-lg(:icon="['fas', 'anchor']")

  a.btn(v-if="project.github" :href="project.github" target="_blank" rel="noopener" :title="`Open GitHub repository`")
    fa.text-lg(:icon="['fab', 'github']")

  a.btn(v-if="project.youtube" :href="project.youtube" target="_blank" rel="noopener" :title="`Open YouTube video`")
    fa.text-lg(:icon="['fab', 'youtube']")
</template>

<script lang="ts" setup>
const props = defineProps<{ project: Project }>()
const project = toRef(props, "project")
</script>
