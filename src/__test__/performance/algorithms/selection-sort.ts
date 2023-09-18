import { AlgorithmAppointment, TimeMeter } from '../collector'
import { buildArrayWithRandomNumbers } from '../../util/number'
import { buildArrayWithRandomStrings } from '../../util/string'
import { runMeasurement } from '../../util/performance'
import { selectionSort } from '../../../02-selection-sort'

export const name = 'Selection Sort'

export const appointment: AlgorithmAppointment = 'sort'

export const timeMeter: TimeMeter = () =>
  Promise.all([
    runMeasurement(selectionSort, [
      buildArrayWithRandomNumbers(100_000, 10_000),
    ]),
    runMeasurement(selectionSort, [buildArrayWithRandomStrings(100_000, 100)]),
  ])
