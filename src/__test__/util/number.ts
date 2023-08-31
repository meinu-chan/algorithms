export function generateRandomNumber(upperLimit: number = 100): number {
  return Math.ceil(Math.random() * upperLimit)
}

export function buildArrayWithRandomNumbers(
  length: number,
  maxNumber: number | undefined = undefined,
): number[] {
  return Array.from({ length }, () => generateRandomNumber(maxNumber))
}
