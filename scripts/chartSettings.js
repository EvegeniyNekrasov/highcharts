import { yAxis } from "./options/yAxis.js";
import { xAxis } from "./options/xAxis.js";
import { plotOptions } from "./options/plotOptions.js";
import { caption } from "./options/caption.js";

const randomCollors = (arr) => {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
};

const colors = [
  "#f44336",
  "#9c27b0",
  "#e81e63",
  "#9e2a2b",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];

let chartTitle = "Random facility data";
let chartCaption =
  "I'm baby readymade tofu gorpcore roof party cardigan banjo. Intelligentsia DSA echo park keytar, venmo copper mug la croix cardigan banh mi.";

const container = document.getElementById("container");

export const loadSettings = (array, type) => {
  const setting = {
    chart: {
      renderTo: container,
      type: type,
      backgroundColor: "white",
      marginBottom: 40,
      zoomType: "xy",
      scrollablePlotArea: {
        minWidth: 3000,
        scrollPositionX: 1,
      },
    },

    accessibility: {
      enabled: false,
    },

    title: {
      text: chartTitle,
      align: "left",
      color: "black",
    },

    credits: {
      enabled: false,
    },

    yAxis: yAxis(),
    xAxis: xAxis(),

    colors: randomCollors(colors),

    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "proximate",
      itemStyle: {
        color: "black",
        fontWeight: "bold",
      },
    },

    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} kWh</b><br/>',
    },

    plotOptions: plotOptions(),

    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "proximate",
      itemStyle: {
        color: "#191919",
        fontWeight: "bold",
      },
    },

    series: array,

    caption: caption(chartCaption),
  };

  return setting;
};
