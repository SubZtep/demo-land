<template lang="pug">
.text-xs.flex.items-center.gap-2.bg-blue-gray-800.rounded.px-2.text-blue-gray-400
  fa(:icon="toIcon(props.category)")
  .leading-none {{props.category}}
</template>

<script lang="ts" setup>
import { categories, toIcon } from "~/pages/i.vue"

const props = defineProps<{ category: typeof categories[number] }>()
</script>
