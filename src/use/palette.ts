type Pair = [number, number]

const lagrange = ([X1, Y1]: Pair, [X2, Y2]: Pair, x: number) =>
  (Y1 * (x - X2)) / (X1 - X2) + (Y2 * (x - X1)) / (X2 - X1)

const makeRGB = (r: number | Pair[], g: number | Pair[], b: number | Pair[], k: number): RGB => {
  const calculate = (pair: Pair[]) => ~~lagrange(pair[0], pair[1], k)
  return [
    typeof r === "number" ? r : calculate(r),
    typeof g === "number" ? g : calculate(g),
    typeof b === "number" ? b : calculate(b),
  ]
}

const palette = (size: number) => {
  const range = ~~(size / 6)
  const colors: RGB[] = []
  let c: RGB
  for (let k = 0; k < size; k++) {
    if (k <= range)
      //red to yellow
      c = makeRGB(
        255,
        [
          [0, 0],
          [range, 255],
        ],
        0,
        k
      )
    else if (k <= range * 2)
      //yellow to green
      c = makeRGB(
        [
          [range + 1, 255],
          [range * 2, 0],
        ],
        255,
        0,
        k
      )
    else if (k <= range * 3)
      //green to cyan
      c = makeRGB(
        0,
        255,
        [
          [range * 2 + 1, 0],
          [range * 3, 255],
        ],
        k
      )
    else if (k <= range * 4)
      //cyan to blue
      c = makeRGB(
        0,
        [
          [range * 3 + 1, 255],
          [range * 4, 0],
        ],
        255,
        k
      )
    else if (k <= range * 5)
      //blue to purple
      c = makeRGB(
        [
          [range * 4 + 1, 0],
          [range * 5, 255],
        ],
        0,
        255,
        k
      )
    //purple to red
    else
      c = makeRGB(
        255,
        0,
        [
          [range * 5 + 1, 255],
          [size - 1, 0],
        ],
        k
      )

    colors.push(c)
  }
  return colors
}

export default function usePalette(size = 250) {
  return palette(size)
}
