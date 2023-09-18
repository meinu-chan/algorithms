import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

export type AlgorithmAppointment = 'search' | 'sort'

export type TimeMeter = () => Promise<[number, number]>

interface PerformanceMeter {
  name: string
  appointment: AlgorithmAppointment
  timeMeter: TimeMeter
}

interface Metrics {
  name: string
  stringMetric?: string
  numberMetric?: string
}

type MetricsResult = {
  [group in AlgorithmAppointment]?: Metrics[]
}

class PerformanceCollector {
  private metersContainer: PerformanceMeter[] = []

  public async getMetrics() {
    await this.loadAlgorithms()

    const results: MetricsResult = {}

    await Promise.all(
      this.metersContainer.map(async (meter) => {
        const [numberMetric, stringMetric] = await meter.timeMeter()

        if (!results[meter.appointment]) {
          results[meter.appointment] = []
        }

        results[meter.appointment]!.push({
          name: meter.name,
          numberMetric: `${numberMetric.toFixed(5)} ms`,
          stringMetric: `${stringMetric.toFixed(5)} ms`,
        })
      }),
    )

    return this.proceedMetricsResult(results)
  }

  private async loadAlgorithms(): Promise<void> {
    const directory = resolve(__dirname, './algorithms')
    const dirFiles = readdirSync(directory)

    await Promise.all(
      dirFiles.map((file) => this.importAlgorithmMeter(directory, file)),
    )
  }

  private async importAlgorithmMeter(
    dir: string,
    fileName: string,
  ): Promise<void> {
    const importedMeter: PerformanceMeter = await import(resolve(dir, fileName))

    this.metersContainer.push({
      name: importedMeter.name,
      appointment: importedMeter.appointment,
      timeMeter: importedMeter.timeMeter,
    })
  }

  private proceedMetricsResult(metricResults: MetricsResult) {
    for (const [appointment, algorithmMetrics] of Object.entries(
      metricResults,
    )) {
      console.log(`APPOINTMENT: ${appointment}`)

      console.table(algorithmMetrics)
    }
  }
}

const collector = new PerformanceCollector()

collector.getMetrics()
