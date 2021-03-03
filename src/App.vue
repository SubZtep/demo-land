<template lang="pug">
//- CubeGrid
.nav
  div {{ x }} {{ y }} {{ w }} {{ h }}
  div
  label Width ({{ width }})
  input(type="range" min="1" max="200" v-model.number.lazy="width")
  label Height ({{ height }})
  input(type="range" min="1" max="200" v-model.number.lazy="height")
  label Max Iteration ({{ maxIteration }})
  input(type="range" min="1" max="200" v-model.number.lazy="maxIteration")
  label Palette Size ({{ paletteSize }})
  input(type="range" min="2" max="255" v-model.number="paletteSize")
.container(:style="{ '--w': w, '--h': h, '--x': x, '--y': y, '--px': ~~((x / w) * 100), '--py': ~~((y / h) * 100) }")
  MandelbrotSet(
    :width="width"
    :height="height"
    :maxIteration="maxIteration"
    :paletteSize="paletteSize"
    :key="`${width}-${height}-${maxIteration}`")
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CubeGrid from "./components/CubeGrid.vue"
import MandelbrotSet from "./components/MandelbrotSet.vue"
import { useWindowSize, useMouse } from "@vueuse/core"

export default defineComponent({
  name: "App",
  components: {
    CubeGrid,
    MandelbrotSet,
  },
  data() {
    return {
      width: 15,
      height: 10,
      maxIteration: 30,
      paletteSize: 100,
    }
  },
  setup() {
    const { width: w, height: h } = useWindowSize()
    const { x, y } = useMouse()

    return { w, h, x, y }
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
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.nav {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #6666;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 8px;
  padding: 8px;
}
</style>
