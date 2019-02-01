// Type definitions for frappe-charts v1.1.0
// Project: https://github.com/frappe/charts
// Definitions by: lightyen <https://github.com/lightyen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = FrappeCharts;
export as namespace FrappeCharts;

declare namespace FrappeCharts {
  /** Frappe Chart */
  class Chart {
    /**
     * Create a Chart.
     * @param element - A DOM element or element ID.
     * @param options - Chart options.
     */
    constructor(element: HTMLElement | string, options: ChartOptions);

    /** add data point */
    addDataPoint: (
      label: string,
      valueFromEachDataset: number[],
      index?: number
    ) => void;
    /** remove data point */
    removeDataPoint: (index?: number) => void;
    /** relpace the data */
    update: (data: ChartData) => void;
    /** export *.svg file */
    export: () => void;
    public parent: HTMLElement;
  }

  /** Frappe Chart Options */
  interface ChartOptions {
    /** The title of chart */
    title?: string;
    /** Chart data */
    data: ChartData;
    /** default: "line" */
    type?: ChartType;
    /** default: 240 */
    height?: number;
    /** default: ['light-blue', 'blue', 'violet', 'red', 'orange', 'yellow', 'green', 'light-green', 'purple', 'magenta', 'light-grey', 'dark-grey'] */
    colors?: ColorType[];
    barOptions?: BarOptions;
    axisOptions?: AxisOptions;
    lineOptions?: LineOptions;
    tooltipOptions?: TooltipOptions;
    /** defalt: 0 */
    valuesOverPoints?: number;
    maxSlices?: number;
    isNavigable?: boolean;
    countLabel?: string;
    discreteDomains?: number;
  }

  /** Common Data or Heatmap Data */
  type ChartData = CommonData | HeatmapData;

  /** Chart Data Point with "data-select" event */
  interface DataPoint {
    label: string | number;
    index: number;
    values: number[];
  }

  /** Chart Data Set */
  interface DataSet {
    name?: string;
    values?: number[];
    /** for mixed Bar/Line Chart */
    chartType?: "bar" | "line";
  }

  interface CommonData {
    labels: (string | number)[];
    datasets: DataSet[];
    yMarkers?: Marker[];
    yRegions?: Region[];
  }

  interface HeatmapData {
    /** key: unix timestamp in second, value: count */
    dataPoints: { [key: number]: number };
    start?: Date;
    end?: Date;
  }

  type ChartType =
    | "line"
    | "bar"
    | "axis-mixed"
    | "scatter"
    | "pie"
    | "percentage"
    | "heatmap";

  interface BarOptions {
    /** min: 0, max: 2, default: 0.5 */
    spaceRatio?: number;
    /** Renders multiple bar datasets in a stacked configuration, rather than the default adjacent. */
    stacked?: boolean;
    height?: number;
    depth?: number;
  }

  interface AxisOptions {
    /** default: span */
    xAxisMode?: "span" | "tick";
    /** default: span */
    yAxisMode?: "span" | "tick";
    /** default: false */
    xIsSeries?: boolean;
  }

  interface LineOptions {
    /** default: 4 */
    dotSize?: number;
    /** default: 0 */
    regionFill?: number;
    /** default: 0 */
    hideDots?: number;
    /** default: 0 */
    hideLine?: number;
    /** default: 0 */
    heatline?: number;
  }

  interface MarkerOptions {
    /** default: right */
    labelPos?: "left" | "right";
  }

  interface RegionOptions {
    /** default: right */
    labelPos: "left" | "right";
  }

  interface TooltipOptions {
    formatTooltipX?: (value: string | number) => string;
    formatTooltipY?: (value: number) => string;
  }

  interface Marker {
    label: string;
    value: number;
    options?: MarkerOptions;
  }

  interface Region {
    label: string;
    start: number;
    end: number;
    options?: RegionOptions;
  }

  type ColorType = string;
}
