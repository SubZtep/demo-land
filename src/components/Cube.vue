<template lang="pug">
//- .cube(
//-   :style="cssVars"
//-   :class="x === 1 && y === 0 && 'mov3d'")
.cube.rot3d(:style="cssVars")
  each val in ["front", "back", "right", "left", "top", "bottom"]
    div(class=val)
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Cube",
  props: {
    x: Number,
    y: Number,
  },
  setup: ({ x, y }) => {
    console.log({ x, y })
    return {
      cssVars: {
        "--x": x,
        "--y": y,
      }
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
  /* background-color: blue; */
  /* backface-visibility: hidden; */
  width: var(--edge);
  height: var(--edge);
  transform-style: preserve-3d;
  /* transform-origin: center center 50px; */

  /* animation-name: rot;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-delay: 1s; */
}

.cube > * {
  width: inherit;
  height: inherit;
  position: absolute;
  /* opacity: 0.5; */
  /* border-radius: 50%; */
  /* background-image: url(header.png); */
  background-color: #6666;
  /* border: 1px solid #000; */
  background-position: calc(var(--x) * var(--edge) * -1) calc(var(--y) * var(--edge) * -1);
}

.front {
  background-image: url(header.png);
  transform: translateZ(var(--edge));
}

.right {
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
}
</style>
