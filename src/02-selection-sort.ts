function findSmallestElementIndex<TItem>(array: TItem[]): number {
  let smallestItem = array[0]
  let smallestItemIndex = 0

  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    if (element < smallestItem) {
      smallestItem = element
      smallestItemIndex = i
    }
  }

  return smallestItemIndex
}

export function selectionSort<TItem>(unsortedArray: TItem[]): TItem[] {
  const sortedArray: TItem[] = []

  const arrayLength = unsortedArray.length

  for (let i = 0; i < arrayLength; i++) {
    const smallestElementIndex = findSmallestElementIndex(unsortedArray)
    sortedArray.push(unsortedArray.splice(smallestElementIndex, 1)[0])
  }

  return sortedArray
}
