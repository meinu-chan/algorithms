import { describe, expect, it } from '@jest/globals'
import { quicksort } from '../03-quicksort'

describe('quick sort', () => {
  it("should correctly sort number's array", () => {
    const unsortedNumberArray = [2, 1, 0, 45, 21, 34]

    const sortedArray = quicksort(unsortedNumberArray)

    expect(sortedArray).toStrictEqual([0, 1, 2, 21, 34, 45])
  })

  it("should correctly sort letter's array", () => {
    const unsortedNumberArray = ['b', 'c', 'A', 'Z', 'y', 'Q']

    const sortedArray = quicksort(unsortedNumberArray)

    expect(sortedArray).toStrictEqual(['A', 'Q', 'Z', 'b', 'c', 'y'])
  })
})
