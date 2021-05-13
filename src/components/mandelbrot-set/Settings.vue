<template lang="pug">
.settings
  label Width ({{ width }})
  input(type="range" min="1" max="100" :value="width" @change="$emit('update:width', +$event.target.value)")
  label Height ({{ height }})
  input(type="range" min="1" max="100" :value="height" @change="$emit('update:height', +$event.target.value)")
  label Max Iteration ({{ maxIteration }})
  input(
    type="range"
    min="1"
    max="200"
    :value="maxIteration"
    @change="$emit('update:maxIteration', +$event.target.value)")
  label Palette Size ({{ paletteSize }})
  input(type="range" min="2" max="255" :value="paletteSize" @input="$emit('update:paletteSize', +$event.target.value)")
  label Zoom Factor ({{ zoomFactor }})
  input(
    type="range"
    min="-1"
    max="1"
    step="0.01"
    :value="zoomFactor"
    @input="$emit('update:zoomFactor', +$event.target.value)")
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Settings",
  emits: ["update:width", "update:height", "update:maxIteration", "update:paletteSize", "update:zoomFactor"],
  props: {
    width: Number,
    height: Number,
    maxIteration: Number,
    paletteSize: Number,
    zoomFactor: Number,
  },
})
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
