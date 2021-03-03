onmessage = ({ data }: MessageEvent<MandelbrotProps>) => {
  postMessage(calculate(data))
}

const calculate = ({ width, height, maxIteration, realSet, imaginarySet }: MandelbrotProps): MandelbrotSetMap => {
  const map: MandelbrotSetMap = []
  let complex: ComplexNumber

  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      complex = {
        x: realSet.start + (i / width) * (realSet.end - realSet.start),
        y: imaginarySet.start + (j / height) * (imaginarySet.end - imaginarySet.start),
      }
      map.push(mandelbrot(complex, maxIteration))
    }
  }

  return map
}

const mandelbrot = (c: ComplexNumber, maxIteration: number): number | null => {
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
  return d <= 2 ? null : n
}
