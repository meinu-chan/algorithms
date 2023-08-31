import { generateRandomNumber } from './number'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export function getRandomLetter(): string {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

export function buildArrayWithRandomStrings(
  length: number,
  maxWordLength: number = 1,
): string[] {
  return Array.from({ length }, () => {
    const wordLength = generateRandomNumber(maxWordLength)

    let randomString = ''

    for (let i = 0; i < wordLength; i++) {
      randomString += getRandomLetter()
    }

    return randomString
  })
}
