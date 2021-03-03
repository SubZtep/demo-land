<template lang="pug">
//- CubeGrid
.nav
  label
    div Width:
    input(type="range" min="1" max="200" v-model="width")
    | {{width}}
  label
    div Height:
    input(type="range" min="1" max="200" v-model="height")
    | {{height}}
  label
    div Max Iteration:
    input(type="range" min="1" max="200" v-model="maxIteration")
    | {{maxIteration}}

MandelbrotSet(
  :width="Number(width)"
  :height="Number(height)"
  :maxIteration="Number(maxIteration)"
  :key="`${width}-${height}-${maxIteration}`")

  //- <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  //- <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CubeGrid from './components/CubeGrid.vue'
import MandelbrotSet from './components/MandelbrotSet.vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    CubeGrid,
    MandelbrotSet,
    HelloWorld
  },
  data() {
    return {
      width: 100,
      height: 50,
      maxIteration: 80
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background-color: #000; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
}
.nav label {
  display: block;
}
</style>
