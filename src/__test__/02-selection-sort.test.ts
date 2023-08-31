import { describe, expect, it } from '@jest/globals'
import { selectionSort } from '../02-selection-sort'

describe('selection sort', () => {
  it("should correctly sort number's array", () => {
    const unsortedNumberArray = [2, 1, 0, 45, 21, 34]

    const sortedArray = selectionSort(unsortedNumberArray)

    expect(sortedArray).toStrictEqual([0, 1, 2, 21, 34, 45])
  })

  it("should correctly sort letter's array", () => {
    const unsortedNumberArray = ['b', 'c', 'A', 'Z', 'y', 'Q']

    const sortedArray = selectionSort(unsortedNumberArray)

    expect(sortedArray).toStrictEqual(['A', 'Q', 'Z', 'b', 'c', 'y'])
  })
})
