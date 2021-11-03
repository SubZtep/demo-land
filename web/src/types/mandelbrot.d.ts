type ComplexNumber = {
  x: number // real
  y: number // imaginary
}

type NumberSet = {
  start: number
  end: number
}

type RGB = [number, number, number]

type MandelbrotSetMap = (number | null)[]

interface MandelbrotProps {
  width: number
  height: number
  maxIteration: number
  realSet: NumberSet
  imaginarySet: NumberSet
}
