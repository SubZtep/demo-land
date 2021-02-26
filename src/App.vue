<template lang="pug">
CubeGrid
  //- <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  //- <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CubeGrid from './components/CubeGrid.vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    CubeGrid,
    HelloWorld
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
</style>
