<template lang="pug">
a(:href="link.value.link" target="_blank" rel="noopener noreferrer")
  img(:src="link.value.icon" :alt="link.value.alt")
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { defineProps, toRefs } from "vue"

const props = defineProps({
  link: {
    type: Object as PropType<SocialLink>,
    required: true,
  },
})

const { link } = toRefs(props)
</script>
