export function binarySearch<TItem>(array: TItem[], item: TItem): number {
  let lowestItemIndex = 0
  let highestItemIndex = array.length - 1

  while (lowestItemIndex <= highestItemIndex) {
    const middleItemIndex = Math.floor((lowestItemIndex + highestItemIndex) / 2)
    const guessedItem = array[middleItemIndex]

    if (guessedItem === item) {
      return middleItemIndex
    }

    if (guessedItem > item) {
      highestItemIndex = middleItemIndex - 1
    } else {
      lowestItemIndex = middleItemIndex + 1
    }
  }

  return -1
}
