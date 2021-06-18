import { useEffect } from "react";
import { useRef } from "react";
import TimelinesChart from "timelines-chart";

export default function DataViz() {
  const ref = useRef(null);

  useEffect(() => {
    const myChart = TimelinesChart();
    myChart.data(getRandomData(true)).enableOverview(false)(ref.current);
  }, []);

  return <div ref={ref}></div>;
}

function getRandomData(ordinal = false) {
  const NGROUPS = 1,
    MAXLINES = 2,
    MAXSEGMENTS = 10,
    MAXCATEGORIES = 2,
    MINTIME = new Date(2020, 2, 21);

  const nCategories = Math.ceil(Math.random() * MAXCATEGORIES),
    categoryLabels = ["A", "B"];

  return [...Array(NGROUPS).keys()].map((i) => ({
    group: "group" + (i + 1),
    data: getGroupData(),
  }));

  //

  function getGroupData() {
    return [...Array(Math.ceil(MAXLINES)).keys()].map((i) => ({
      label: "label" + (i + 1),
      data: getSegmentsData(),
    }));

    //

    function getSegmentsData() {
      const nSegments = Math.ceil(Math.random() * MAXSEGMENTS),
        segMaxLength = Math.round((new Date() - MINTIME) / nSegments);
      let runLength = MINTIME;

      return [...Array(nSegments).keys()].map((i) => {
        const tDivide = [Math.random(), Math.random()].sort(),
          start = new Date(runLength.getTime() + tDivide[0] * segMaxLength),
          end = new Date(runLength.getTime() + tDivide[1] * segMaxLength);

        runLength = new Date(runLength.getTime() + segMaxLength);

        return {
          timeRange: [start, end],
          val: ordinal
            ? categoryLabels[Math.ceil(Math.random() * nCategories)]
            : Math.random(),
          //labelVal: is optional - only displayed in the labels
        };
      });
    }
  }
}
