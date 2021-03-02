type ComplexNumber = {
  x: number // real
  y: number // imaginary
}

type NumberSet = {
  start: number
  end: number
}

type MandelbrotSetMap = Map<string, string>

interface MandelbrotProps {
  width: number
  height: number
  maxIteration: number
  realSet: NumberSet
  imaginarySet: NumberSet
  colors: string[]
}
