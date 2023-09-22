import { AlgorithmAppointment, TimeMeter } from '../collector'
import { buildArrayWithRandomNumbers } from '../../util/number'
import { buildArrayWithRandomStrings } from '../../util/string'
import { quicksortWithRandomPivot } from '../../../03-quicksort'
import { runMeasurement } from '../../util/performance'

export const name = 'Quicksort(random pivot)'

export const appointment: AlgorithmAppointment = 'sort'

export const timeMeter: TimeMeter = async () =>
  Promise.all([
    runMeasurement(quicksortWithRandomPivot, [
      buildArrayWithRandomNumbers(100_000, 10_000),
    ]),
    runMeasurement(quicksortWithRandomPivot, [
      buildArrayWithRandomStrings(100_000, 100),
    ]),
  ])
