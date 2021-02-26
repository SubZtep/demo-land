<template lang="pug">
.grid(:style="cssVars")
  Cube(
    v-for="i in cubes"
    :key="i"
    :x="i % cols"
    :y="~~(i / cols)")
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Cube from "./Cube.vue"

export default defineComponent({
  name: "Grid",
  components: {
    Cube,
  },
  props: {},
  setup: () => {
    const cols = 4
    const rows = 2
    return {
      cubes: Array.from({ length: cols * rows }, (_, i) => i),
      cols,
      rows,
      cssVars: {
        // "--edge": 1200 / 4"300px",
        "--sp": "10s",
        "--edge": `${1200 / cols}px`,
        "--cols": cols,
        "--rows": rows,
      }
    }
  },
})
</script>

<style scoped>
.grid {
  /* background-color: #6666; */
  transform: rotateX(var(--cubegrid-rotate-x));
  transform-style: preserve-3d;

  /* perspective: 2400px; */

  /* width: 400px;
  height: 200px; */
  /* padding: 115px; */
  /* width: 100vw;
  height: 100vh; */
  display: grid;
  /* gap: 15px; */
  grid-template-columns: repeat(var(--cols), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  /* width: 100%;
  height: 100%; */
}
</style>
