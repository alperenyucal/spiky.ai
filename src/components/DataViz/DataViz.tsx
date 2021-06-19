import { useState } from "react";
import Chart from "react-apexcharts";
import styles from "./DataViz.module.scss";
import Button from "../Button/Button";

interface DataVizProps {
  title: string;
  items: {
    title: string;
    data: { x: string; y: [number, number]; fillColor: string }[];
  }[];
}

export default function DataViz({ title, items }: DataVizProps) {
  const [selectedItemId, setSelectedItemId] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.panel}>
        <div className={styles.panelItem}>{`>`}</div>
        <span className={styles.panelTitle}>{title}</span>
        <div className={styles.panelItem}>{`>`}</div>
      </div>
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
          series={[{ data: items[selectedItemId].data }]}
          type="rangeBar"
          height={300}
        />
        <div className={styles.buttonGroup}>
          {items.map((item, index) => (
            <div key={index} className={styles.buttonWrapper}>
              <Button
                variant={selectedItemId === index ? "primary" : "outlined"}
                onClick={() => {
                  setSelectedItemId(index);
                }}
              >
                {item.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
