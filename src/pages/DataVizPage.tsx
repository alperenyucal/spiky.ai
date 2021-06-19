import styles from "./DataVizPage.module.scss";
import DataViz from "../components/DataViz/DataViz";

const minute = 60 * 1000;

export default function DataVizPage() {
  return (
    <div className={styles.page}>
      <DataViz
        title="Percentages"
        items={[
          {
            title: "Energy",
            data: [
              {
                x: "Energetic",
                y: [0, 1 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [1 * minute, 3 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [3 * minute, 5 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [5 * minute, 6 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [6 * minute, 7 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [7 * minute, 10 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [10 * minute, 11 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [11 * minute, 12 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [12 * minute, 24 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [24 * minute, 25 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [25 * minute, 60 * minute],

                fillColor: "#3a77cb",
              },
            ],
          },
          {
            title: "Objectivity",
            data: [
              {
                x: "Analysis",
                y: [
                  new Date("2019-03-02").getTime(),
                  new Date("2019-03-04").getTime(),
                ],
                fillColor: "#3a77cb",
              },
              {
                x: "Analysis",
                y: [
                  new Date("2019-03-08").getTime(),
                  new Date("2019-03-10").getTime(),
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
        ]}
      />
      <h2 style={{ paddingTop: 50 }}>Another example with 3 items</h2>
      <DataViz
        title="Custom Title"
        items={[
          {
            title: "Item 1",
            data: [
              {
                x: "Label 1",
                y: [
                  new Date("2019-03-02").getTime(),
                  new Date("2019-03-04").getTime(),
                ],
                fillColor: "#3a77cb",
              },
             
              {
                x: "Label 2",
                y: [
                  new Date("2019-03-04").getTime(),
                  new Date("2019-03-08").getTime(),
                ],
                fillColor: "#8e8ba8",
              },
            ],
          },
          {
            title: "Item 2",
            data: [
              {
                x: "Energetic",
                y: [0, 1 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [1 * minute, 3 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [3 * minute, 5 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [5 * minute, 6 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [6 * minute, 7 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [7 * minute, 10 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [10 * minute, 11 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [11 * minute, 12 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [12 * minute, 24 * minute],
                fillColor: "#3a77cb",
              },
              {
                x: "Monotonic",
                y: [24 * minute, 25 * minute],

                fillColor: "#8e8ba8",
              },
              {
                x: "Energetic",
                y: [25 * minute, 60 * minute],

                fillColor: "#3a77cb",
              },
            ],
          },
          {
            title: "Item 3",
            data: [
              {
                x: "Analysis",
                y: [
                  new Date("2019-03-02").getTime(),
                  new Date("2019-03-04").getTime(),
                ],
                fillColor: "#3a77cb",
              },
              {
                x: "Analysis",
                y: [
                  new Date("2019-03-08").getTime(),
                  new Date("2019-03-10").getTime(),
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
         
        ]}
      />
    </div>
  );
}
