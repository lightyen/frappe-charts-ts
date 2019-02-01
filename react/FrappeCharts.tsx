import React from "react"
import { Chart, ChartOptions, ChartData, DataPoint } from "frappe-charts"

export interface IFrappeChartProps extends ChartOptions {
    onSelect?: (p: DataPoint) => void
}

/** frappe-charts wrapper with React Component */
export class FrappeChart extends React.Component<IFrappeChartProps> {
    /** add data point */
    public addDataPoint = (label: string, valueFromEachDataset: number[], index?: number) => {
        this.chart.addDataPoint(label, valueFromEachDataset, index)
    }
    /** remove data point */
    public removeDataPoint = (index?: number) => {
        this.chart.removeDataPoint(index)
    }
    /** export *.svg file */
    public export = () => {
        this.chart.export()
    }
    /** relpace the data */
    public update = (data: ChartData) => {
        this.chart.update(data)
    }

    private element: HTMLDivElement
    private chart: Chart
    private hasDraw: boolean

    /** render the frappe chart */
    private draw = () => {
        if (this.element) {
            const opts = { ...this.props }
            this.chart = new Chart(this.element, opts)
            if (!this.hasDraw) {
                this.element.addEventListener("data-select", this.onSelect)
            }
            this.hasDraw = true
        }
    }

    public componentDidMount() {
        this.draw()
    }

    public componentWillUnmount() {
        this.element.removeEventListener("data-select", this.onSelect)
    }

    /** event handler for navigation */
    private onSelect = (e: Event) => {
        if (!("index" in e)) {
            return
        }
        if (this.props.onSelect) {
            this.props.onSelect(e as DataPoint)
        }
    }

    public unixTimestamp = (date: Date) => date.getTime() / 1000

    public render() {
        this.draw()
        return <div ref={e => (this.element = e)} />
    }
}
