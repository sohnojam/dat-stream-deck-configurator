function dynamicGradient(colors) {
  return `linear-gradient(75deg, ${
    colors.length === 0 ?
      '#000000 0%, #000000 100%'
    : colors.length === 1 ?
      `${colors[0]} 0%, ${colors[0]} 100%`
    :
      `${colors.map((color, index) => (
        `${index > 0 ? `${color} ${((index - 0.25) / parseFloat(colors.length - 1)) * 80 + 10}%,` : ''}` +
        `${color} ${parseFloat(index) / parseFloat(colors.length - 1) * 90 + 5}%${index < colors.length - 1 ? ',' : ''}` +
        `${index < colors.length -1 ? `${color} ${(index + 0.25) / parseFloat(colors.length - 1) * 80 + 10}%,` : ''}`
      )).reduce((acc, cur) => acc = acc + cur, '')}`
  })`
}

export default dynamicGradient