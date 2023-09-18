import { generateRandomNumber } from './number'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export function getRandomLetter(): string {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

export function generateRandomString(length: number): string {
  const wordLength = generateRandomNumber(length)

  let randomString = ''

  for (let i = 0; i < wordLength; i++) {
    randomString += getRandomLetter()
  }

  return randomString
}

export function buildArrayWithRandomStrings(
  length: number,
  maxWordLength: number = 1,
  options: { unique?: boolean } = {},
): string[] {
  const arrayWithRandomStrings: string[] = []

  while (arrayWithRandomStrings.length < length) {
    const randomString = generateRandomString(maxWordLength)

    if (options.unique) {
      if (arrayWithRandomStrings.includes(randomString)) {
        continue
      }
    }

    arrayWithRandomStrings.push(randomString)
  }

  return arrayWithRandomStrings
}
