<template lang="pug">
.text-xs.flex.items-center.gap-2.rounded.px-2.py-1.text-blue-gray-400
  fa(:icon="toIcon(props.tag)")
  div {{props.tag}}
</template>

<script lang="ts" setup>
import { tags, toIcon } from "~/pages/i.vue"

const props = defineProps<{ tag: typeof tags[number] }>()
</script>
