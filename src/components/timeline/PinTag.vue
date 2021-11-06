<template lang="pug">
.flex.items-center.gap-2.rounded.px-2.py-1.text-blue-gray-400(:class="'light:text-blue-gray-800'")
  slot
  fa(:icon="toIcon(props.tag)")
  div {{props.tag}}
</template>

<script lang="ts" setup>
// import { tags, toIcon } from "~/pages/i.vue"
import useProject from "~/composables/useProject"
const { tags, toIcon} = useProject()

const props = defineProps<{ tag: typeof tags[number] }>()
</script>
