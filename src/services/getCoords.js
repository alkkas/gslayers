import getRandomInt from '@utils/helpers/random'

export const getCoords = (width, height, words) => {
  words = words.slice(0, 15)
  const diff = 1.55
  const coords = []

  words.forEach(i => {
    let newWord = {}

    const fontSize = getRandomInt(15, 24)
    newWord = {
      word: i,
      x: getRandomInt(0, width),
      y: getRandomInt(0, height),
      fontSize,
      opacity: getRandomInt(40, 70) / 100,
      width: (i.length * fontSize) / diff + 10,
    }
    const dimensions =
      newWord.x + newWord.width < width && newWord.y + newWord.fontSize < height
    const result = coords.every(i => {
      return (
        (newWord.y < i.y && i.y - newWord.y > newWord.fontSize) ||
        (newWord.y > i.y && newWord.y - i.y > i.fontSize) ||
        (newWord.x < i.x && i.x - newWord.x > newWord.width) ||
        (newWord.x > i.x && newWord.x - i.x > i.width)
      )
    })
    console.log(width, height, i)
    if (result && dimensions) coords.push(newWord)
  })

  return coords
}
