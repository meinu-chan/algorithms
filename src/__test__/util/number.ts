export function generateRandomNumber(upperLimit: number = 100): number {
  return Math.ceil(Math.random() * upperLimit)
}

export function buildArrayWithRandomNumbers(
  length: number,
  maxNumber: number | undefined = undefined,
  options: { unique?: boolean } = {},
): number[] {
  const arrayWithRandomNumbers: number[] = []

  while (arrayWithRandomNumbers.length < length) {
    const randomNumber = generateRandomNumber(maxNumber)

    if (options.unique) {
      if (arrayWithRandomNumbers.includes(randomNumber)) {
        continue
      }
    }

    arrayWithRandomNumbers.push(randomNumber)
  }

  return arrayWithRandomNumbers
}
