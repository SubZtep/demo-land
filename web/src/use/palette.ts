import chroma from "chroma-js"

export default () => ({
  generatePalette: (size: number) => {
    const colors = []
    for (let i = 0; i < size; i++) {
      // colors.push(chroma.random().rgb())
      colors.push(chroma("green").darken(i / 5).rgb())
    }
    return colors
  }
})
