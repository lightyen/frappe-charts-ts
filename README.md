# frappe-charts-ts

typescript for frappe charts and React

## Use

1. put type definitions file to node_modules/@types

2. add config in webpack.config.js

```json
{
  "resolve": {
    "alias": {
      "frappe-charts": "node_modules/frappe-charts/dist/frappe-charts.min.esm.js"
    }
  }
}
```

or add in tsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "frappe-charts": [
        "node_modules/frappe-charts/dist/frappe-charts.min.esm.js"
      ]
    }
  }
}
```

## React

- Use **FrappeCharts.tsx**

```tsx
import { ChartOptions, ChartData } from "frappe-charts"
import { FrappeChart } from "./FrappeCharts"

render() {
    const data: ChartData = {
        labels: [
            "12am-3am",
            "3am-6pm",
            "6am-9am",
            "9am-12am",
            "12pm-3pm",
            "3pm-6pm",
            "6pm-9pm",
            "9am-12am"
        ],
        datasets: [
            {
                name: "Some Data",
                values: [25, 40, 30, 35, 8, 52, 17, -4],
                chartType: "line"
            },
            {
                name: "Another Set",
                values: [25, 50, -10, 15, 18, 32, 27, 14],
                chartType: "bar"
            }
        ]
    }

    const opts: ChartOptions = {
        data,
        title: "My Awesome Chart",
        type: "axis-mixed",
        height: 250,
        colors: ["#7cd6fd", "#743ee2"]
    }

    return <FrappeChart {...opts} />
}
```

## Link

- https://frappe.io/charts/docs
