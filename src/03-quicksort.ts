export function quicksort<TItem>(array: TItem[]): TItem[] {
  if (array.length < 2) {
    return array
  }

  const pivot = array[0]
  const less = array.filter((item) => item < pivot)
  const greater = array.filter((item) => item > pivot)

  return quicksort(less).concat(pivot, quicksort(greater))
}

export function quicksortWithRandomPivot<TItem>(array: TItem[]): TItem[] {
  if (array.length < 2) {
    return array
  }

  const pivot = array[generateRandomNumber(array.length)]
  const less = array.filter((item) => item < pivot)
  const greater = array.filter((item) => item > pivot)

  return quicksort(less).concat(pivot, quicksort(greater))
}

function generateRandomNumber(upperLimit: number = 100): number {
  return Math.ceil(Math.random() * upperLimit)
}
