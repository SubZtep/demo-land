onmessage = ({ data }: MessageEvent<MandelbrotProps>) => {
  const map = calculate(data)
  postMessage(map)
}

const calculate = ({
  width,
  height,
  maxIteration,
  realSet,
  imaginarySet,
  colors,
}: MandelbrotProps): MandelbrotSetMap => {
  const map: MandelbrotSetMap = new Map<string, string>()
  let complex: ComplexNumber
  let color: string

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      complex = {
        x: realSet.start + (i / width) * (realSet.end - realSet.start),
        y: imaginarySet.start + (j / height) * (imaginarySet.end - imaginarySet.start),
      }

      const [m, isMandelbrotSet] = mandelbrot(complex, maxIteration)
      color = colors[isMandelbrotSet ? 0 : (m % colors.length) - 1 + 1]
      map.set(`${i}-${j}`, color)
    }
  }

  return map
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
