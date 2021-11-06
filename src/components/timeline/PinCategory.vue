<template lang="pug">
.flex.items-center.gap-2.bg-blue-gray-800.rounded.p-2.text-blue-gray-400(:class="['light:bg-blue-gray-200', 'light:text-blue-gray-800']")
  slot
  fa(:icon="toIcon(props.category)")
  div {{props.category}}
</template>

<script lang="ts" setup>
// import { categories, toIcon } from "~/pages/i.vue"
import useProject from "~/composables/useProject"
const { categories, toIcon } = useProject()

const props = defineProps<{ category: typeof categories[number] }>()
</script>
