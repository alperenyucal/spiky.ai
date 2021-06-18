import { useState } from "react";
import Chart from "react-apexcharts";
import styles from "./DataViz.module.scss";

export default function DataViz() {
  const [data, setData] = useState([
    {
      data: [
        {
          x: "Analysis",
          y: [
            new Date("2019-02-27").getTime(),
            new Date("2019-03-04").getTime(),
          ],
          fillColor: "#3a77cb",
        },
        {
          x: "Design",
          y: [
            new Date("2019-02-27").getTime(),
            new Date("2019-03-02").getTime(),
          ],
          fillColor: "#8e8ba8",
        },
        {
          x: "Design",
          y: [
            new Date("2019-03-04").getTime(),
            new Date("2019-03-08").getTime(),
          ],
          fillColor: "#8e8ba8",
        },
      ],
    },
  ]);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.panel}>Title</div>
        <div className={styles.chartWrapper}>
          <Chart
            options={{
              stroke: {
                show: true,
              },
              grid: {
                show: true,
                borderColor: "#90A4AE",
                strokeDashArray: 1,
                position: "back",
                xaxis: {
                  lines: {
                    show: true,
                  },
                },
                yaxis: {
                  lines: {
                    show: true,
                  },
                },
              },
              chart: {
                height: 450,
                type: "rangeBar",
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                  barHeight: "30%",
                },
              },
              xaxis: {
                type: "datetime",
              },

              legend: {
                position: "top",
                horizontalAlign: "left",
              },
            }}
            series={data}
            type="rangeBar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
