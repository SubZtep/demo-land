<template lang="pug">
.settings
  label Width ({{ width }})
  input(type="range" min="1" max="200" :value="width" @change="$emit('update:width', +$event.target.value)")
  label Height ({{ height }})
  input(type="range" min="1" max="200" :value="height" @change="$emit('update:height', +$event.target.value)")
  label Max Iteration ({{ maxIteration }})
  input(
    type="range"
    min="1"
    max="200"
    :value="maxIteration"
    @change="$emit('update:maxIteration', +$event.target.value)")
  label Palette Size ({{ paletteSize }})
  input(type="range" min="2" max="255" :value="paletteSize" @input="$emit('update:paletteSize', +$event.target.value)")
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Settings",
  emits: ["update:width", "update:height", "update:maxIteration", "update:paletteSize"],
  props: {
    width: Number,
    height: Number,
    maxIteration: Number,
    paletteSize: Number,
  },
})
</script>

<style scope>
.settings {
  color: #fafafa;
  z-index: 100;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 60%;
  background-color: #6666;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 8px;
  padding: 8px;
  border-top-right-radius: 5px;
}
</style>
