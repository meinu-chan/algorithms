import { AlgorithmAppointment, TimeMeter } from '../collector'
import { buildArrayWithRandomNumbers } from '../../util/number'
import { buildArrayWithRandomStrings } from '../../util/string'
import { quicksort } from '../../../03-quicksort'
import { runMeasurement } from '../../util/performance'

export const name = 'Quicksort'

export const appointment: AlgorithmAppointment = 'sort'

export const timeMeter: TimeMeter = () =>
  Promise.all([
    runMeasurement(quicksort, [buildArrayWithRandomNumbers(100_000, 10_000)]),
    runMeasurement(quicksort, [buildArrayWithRandomStrings(100_000, 100)]),
  ])
