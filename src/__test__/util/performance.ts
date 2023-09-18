function performanceMeasure<TFunc extends Function>(algorithm: TFunc): number {
  const start = performance.now()

  algorithm()

  const end = performance.now()

  return end - start
}

export function runMeasurement<TAlgorithm extends (...args: any[]) => any>(
  algorithm: TAlgorithm,
  args: TAlgorithm extends (...args: infer U) => any ? U : unknown,
): number {
  const boundedAlgorithm = algorithm.bind(null, args)

  return performanceMeasure(boundedAlgorithm)
}
