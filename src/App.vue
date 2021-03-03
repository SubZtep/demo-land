<template lang="pug">
//- CubeGrid
.nav
  label Width ({{ width }})
  input(type="range" min="1" max="200" v-model.number.lazy="width")
  label Height ({{ height }})
  input(type="range" min="1" max="200" v-model.number.lazy="height")
  label Max Iteration ({{ maxIteration }})
  input(type="range" min="1" max="200" v-model.number.lazy="maxIteration")
  label Palette Size ({{ paletteSize }})
  input(type="range" min="2" max="255" v-model.number="paletteSize")

MandelbrotSet(
  :width="width"
  :height="height"
  :maxIteration="maxIteration"
  :paletteSize="paletteSize"
  :key="`${width}-${height}-${maxIteration}`"
)
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CubeGrid from "./components/CubeGrid.vue"
import MandelbrotSet from "./components/MandelbrotSet.vue"

export default defineComponent({
  name: "App",
  components: {
    CubeGrid,
    MandelbrotSet,
  },
  data() {
    return {
      width: 100,
      height: 50,
      maxIteration: 80,
      paletteSize: 250,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #6666;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 15px;
  padding: 15px;
}
</style>
