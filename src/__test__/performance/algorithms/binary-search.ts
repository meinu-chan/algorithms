import { AlgorithmAppointment, TimeMeter } from '../collector'
import { binarySearch } from '../../../01-binary-search'
import { buildArrayWithRandomNumbers, generateRandomNumber } from '../../util/number'
import { buildArrayWithRandomStrings, generateRandomString } from '../../util/string'
import { runMeasurement } from '../../util/performance'

export const name = 'Binary Search'

export const appointment: AlgorithmAppointment = 'search'

export const timeMeter: TimeMeter = () =>
  Promise.all([
    runMeasurement(binarySearch, [
      buildArrayWithRandomNumbers(100_000, 10_000),
      generateRandomNumber(10_000),
    ]),
    runMeasurement(binarySearch, [
      buildArrayWithRandomStrings(100_000, 100),
      generateRandomString(100),
    ]),
  ])
