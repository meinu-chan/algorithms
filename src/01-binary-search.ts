export function binarySearch<TItem>(list: TItem[], item: TItem): number {
  let lowestItemIndex = 0
  let highestItemIndex = list.length - 1

  while (lowestItemIndex <= highestItemIndex) {
    const middleItemIndex = lowestItemIndex + highestItemIndex
    const guessedItem = list[middleItemIndex]

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
