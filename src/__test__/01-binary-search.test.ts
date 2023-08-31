import { binarySearch } from '../01-binary-search'
import { buildArrayWithRandomNumbers, generateRandomNumber } from './util/number'
import { buildArrayWithRandomStrings, getRandomLetter } from './util/string'
import { describe, expect, it } from '@jest/globals'

describe('binary search', () => {
  it('should correctly return index searching number element', () => {
    const randomNumberArray = buildArrayWithRandomNumbers(10).sort(
      (a, b) => a - b,
    )
    const randomArrayElementIndex = generateRandomNumber(
      randomNumberArray.length,
    )
    const searchableElement = randomNumberArray[randomArrayElementIndex]

    const foundElementIndex = binarySearch(randomNumberArray, searchableElement)

    expect(foundElementIndex).toBeGreaterThan(0)
    expect(randomNumberArray[foundElementIndex]).toBe(searchableElement)
  })

  it('should correctly return index searching string element', () => {
    const randomLetterArray = buildArrayWithRandomStrings(10).sort()
    const randomArrayElementIndex = generateRandomNumber(
      randomLetterArray.length,
    )
    const searchableElement = randomLetterArray[randomArrayElementIndex]

    const foundElementIndex = binarySearch(randomLetterArray, searchableElement)

    expect(foundElementIndex).toBeGreaterThan(0)
    expect(randomLetterArray[foundElementIndex]).toBe(searchableElement)
  })

  it('should correctly return index searching word element', () => {
    const randomWordArray = buildArrayWithRandomStrings(10, 10).sort()
    const randomArrayElementIndex = generateRandomNumber(randomWordArray.length)
    const searchableElement = randomWordArray[randomArrayElementIndex]

    const foundElementIndex = binarySearch(randomWordArray, searchableElement)

    expect(foundElementIndex).toBeGreaterThan(0)
    expect(randomWordArray[foundElementIndex]).toBe(searchableElement)
  })

  it("should return '-1' if searching element not found", () => {
    const randomLetterArray = buildArrayWithRandomStrings(10).sort()
    const randomArrayElementIndex = generateRandomNumber(
      randomLetterArray.length,
    )

    const foundElementIndex = binarySearch(
      randomLetterArray,
      randomLetterArray[randomArrayElementIndex].padStart(
        11,
        getRandomLetter(),
      ),
    )

    expect(foundElementIndex).toBe(-1)
  })
})
