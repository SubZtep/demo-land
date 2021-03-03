<template lang="pug">
//- .cube(
//-   :style="cssVars"
//-   :class="x === 1 && y === 0 && 'mov3d'")
//- .cube.rot3d(:style="cssVars")
//-   each val in ["front", "back", "right", "left", "top", "bottom"]
//-     div(class=val)
//- .cube.rot3d(:style="cssVars")
.cube(:style="cssVars")
  //- each val in ["front", "back", "right", "left", "top", "bottom"]
  each val in ["front"]
    div(class=val)
      slot
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Cube",
  props: {
    edge: {
      type: Number,
      default: -100,
      // default: 100,
    },
    // x: {
    //   type: Number,
    //   default: 0,
    // },
    // y: {
    //   type: Number,
    //   default: 0,
    // },
  },
  // setup: ({ x, y, edge }) => {
  setup: ({ edge }) => {
    return {
      cssVars: {
        // "--x": x,
        // "--y": y,
        "--edge": `${edge}px`,
      },
    }
  },
})
</script>

<style>
/* @keyframes rot {
  from {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg);
  }
} */

.cube {
  /* --sp: 5s; */
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform-origin: center center;
}

.cube > * {
  width: inherit;
  height: inherit;
  position: absolute;
  /* opacity: 0.5; */
  /* border-radius: 10%; */
  /* border-radius: 50%; */
  /* background-image: url(header.png); */
  /* background-color: #000; */
  /* border: 1px solid #fff; */
  /* background-position: calc(var(--x) * var(--edge) * -1) calc(var(--y) * var(--edge) * -1); */
}

.front {
  transform: translateZ(var(--edge));
  /* background-color: #000a; */
}

/* .back {
} */

/* .right {
  right: 0;
  transform-origin: right;
  transform: rotateY(90deg);
}

.left {
  left: 0;
  transform-origin: left;
  transform: rotateY(-90deg);
}

.top {
  top: 0;
  transform-origin: top;
  transform: rotateX(90deg);
}

.bottom {
  bottom: 0;
  transform-origin: bottom;
  transform: rotateX(-90deg);
} */
</style>
