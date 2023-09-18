export function quicksort<TItem>(array: TItem[]): TItem[] {
  if (array.length < 2) {
    return array
  }

  const pivot = array[0]
  const less = quicksort(array.filter((item) => item < pivot))
  const greater = quicksort(array.filter((item) => item > pivot))

  return less.concat(pivot, greater)
}
