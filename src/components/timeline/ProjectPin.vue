<template lang="pug">
.flex.items-center.gap-2.rounded.px-2.py-1.prose.transition(
  :class="{ ['cursor-pointer border-gray']: hasForm, ['border-grayer']: hasForm && props.modelValue, 'bg-gray': hasCategory }"
  @click="hasForm && emit('update:modelValue', !props.modelValue)")
  fa.mr-1(v-if="hasForm" :icon="['fas', props.modelValue ? 'check-square' : 'square']")
  fa(:icon="toIcon(slug)")
  div {{ slug }}
</template>

<script lang="ts" setup>
import useProject, { categories, tags } from "~/composables/useProject"
const { toIcon } = useProject()

const props = defineProps<{
  category?: typeof categories[number]
  tag?: typeof tags[number]
  modelValue?: Boolean
}>()
const emit = defineEmits(["update:modelValue"])
const slug = props.category ?? props.tag!
const hasForm = computed(() => props.modelValue !== undefined)
const hasCategory = computed(() => props.category !== undefined)
</script>
