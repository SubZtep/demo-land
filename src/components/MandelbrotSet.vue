<template lang="pug">
.grid(:style="cssVars")
  div(
    v-for="idx in divs"
    :key="idx"
    :style="`background-color: ${map.get(`${idx % width}-${~~(idx / width)}`) ?? 'transparent'}`")
</template>

<script lang="ts">
import { defineComponent } from "vue"

type ComplexNumber = {
  x: number // real
  y: number // imaginary
}

const mandelbrot = (c: ComplexNumber, maxIteration: number): [number, boolean] => {
  let z = { x: 0, y: 0 }
  let n = 0
  let p: ComplexNumber
  let d: number
  do {
    p = {
      x: Math.pow(z.x, 2) - Math.pow(z.y, 2),
      y: 2 * z.x * z.y,
    }
    z = {
      x: p.x + c.x,
      y: p.y + c.y,
    }
    d = Math.sqrt(Math.pow(z.x, 2) + Math.pow(z.y, 2))
    n += 1
  } while (d <= 2 && n < maxIteration)
  return [n, d <= 2]
}

export default defineComponent({
  name: "MandelbrotSet",
  props: {
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 50,
    },
    maxIteration: {
      type: Number,
      default: 80,
    },
  },
  setup: ({ width, height, maxIteration }) => {
    const realSet = { start: -2, end: 1 }
    const imaginarySet = { start: -1, end: 1 }
    let complex: ComplexNumber

    const colors = new Array(16)
      .fill(0)
      .map((_, i) => (i === 0 ? "#000" : `#${(((1 << 24) * Math.random()) | 0).toString(16)}`))

    const map = new Map<string, string>()

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        complex = {
          x: realSet.start + (i / width) * (realSet.end - realSet.start),
          y: imaginarySet.start + (j / height) * (imaginarySet.end - imaginarySet.start),
        }

        const [m, isMandelbrotSet] = mandelbrot(complex, maxIteration)
        let c = colors[isMandelbrotSet ? 0 : (m % colors.length - 1) + 1]
        map.set(`${i}-${j}`, c)
      }
    }

    return {
      divs: Array.from({ length: width * height }, (_, i) => i),
      map,
      width,
      height,
      cssVars: {
        "--width": width,
        "--height": height,
      },
    }
  },
})
</script>

<style scoped>
.grid {
  background-color: #6666;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(var(--width), 1fr);
  grid-template-rows: repeat(var(--height), 1fr);
}

.grid > div {
  width: 8px;
  height: 8px;
}
</style>
