<template lang="pug">
.flex.items-center.gap-2.rounded.px-2.py-1.prose.prose-sm.transition(
  :class="{ ['cursor-pointer select-none border-gray text-grayed']: hasForm, ['border-grayer text-grayer']: hasForm && props.modelValue, 'bg-gradient-to-br dark:from-blue-gray-800 light:from-blue-gray-200 to-transparent': !!props.category }"
  @click="hasForm && emit('update:modelValue', !props.modelValue)"
  @dblclick="hasForm && emit('only', props.modelValue ? slug : undefined)")

  fa.mr-1(v-if="hasForm" :icon="['fas', props.modelValue ? 'check-square' : 'square']")
  fa(:icon="toIcon(slug)")
  div {{ slug }}
</template>

<script lang="ts" setup>
import useProject from "~/composables/useProject"
const { toIcon } = useProject()

const props = defineProps<{
  category?: Category
  tag?: Tag
  modelValue?: Boolean
}>()

if (props.category === undefined && props.tag === undefined) {
  throw new Error("Please give a category or tag.")
}

type T = typeof props.tag extends undefined ? Category : Tag

const emit = defineEmits<{
  (e: "update:modelValue", val: Boolean): void
  (e: "only", val?: T): void
}>()
const slug = (props.category ?? props.tag) as T

const hasForm = computed(() => props.modelValue !== undefined)
</script>
