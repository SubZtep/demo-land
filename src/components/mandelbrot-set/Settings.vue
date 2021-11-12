<template lang="pug">
.settings
  label Width ({{ width }})
  //- input(type="range" min="1" max="100" :value="width" @change="emit('update:width', +($event.target as any).value)")
  //- input(type="range" min="1" max="100" :value="width" @change="e => emit('update:width', +(e.target as any).value)")
  input(type="range" min="1" max="100" v-model="width")
  label Height ({{ height }})
  input(type="range" min="1" max="100" v-model="height")
  label Max Iteration ({{ maxIteration }})
  input(
    type="range"
    min="1"
    max="200"
    v-model="maxIteration")
  label Palette Size ({{ paletteSize }})
  input(type="range" min="2" max="255" v-model="paletteSize")
  label Zoom Factor ({{ zoomFactor }})
  input(
    type="range"
    min="-1"
    max="1"
    step="0.01"
    v-model="zoomFactor")
</template>

<script lang="ts" setup>
const props = defineProps<{
  width: Number
  height: Number
  maxIteration: Number
  paletteSize: Number
  zoomFactor: Number
}>()

const emit = defineEmits<{
  (e: "update:width", v: Number): void
  (e: "update:height", v: Number): void
  (e: "update:maxIteration", v: Number): void
  (e: "update:paletteSize", v: Number): void
  (e: "update:zoomFactor", v: Number): void
}>()

const { width, height, maxIteration, paletteSize, zoomFactor } = useVModels(props, emit)
// useVModels(props)
// useVModels(props, emit)

// import { defineComponent } from "vue"

// export default defineComponent({
//   name: "Settings",
//   emits: ["update:width", "update:height", "update:maxIteration", "update:paletteSize", "update:zoomFactor"],
//   props: {
//     width: Number,
//     height: Number,
//     maxIteration: Number,
//     paletteSize: Number,
//     zoomFactor: Number,
//   },
// })
</script>

<style scope>
.settings {
  text-shadow: 1px 1px #333;
  color: #fafafa;
  z-index: 100;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 60%;
  background-color: #6666;
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 8px;
  padding: 8px;
  border-top-right-radius: 5px;
}
</style>
