let Highcharts = require("highcharts");

import { yAxis } from "./options/yAxis.js";
import { xAxis } from "./options/xAxis.js";
import { plotOptions } from "./options/plotOptions.js";
import { caption } from "./options/caption.js";
import { randomDate } from "./utilities/randomDate.js";
import { randomList } from "./utilities/randomList.js";

const colors = [
  "#FFB6C1",
  "#2C908F",
  "#91EE7D",
  "#F7A35B",
  "#8185E8",
  "#F15C80",
  "#ffffff",
  "#A19642",
];

let chartTitle = "Random facility data";
let chartCaption =
  "I'm baby readymade tofu gorpcore roof party cardigan banjo. Intelligentsia DSA echo park keytar, venmo copper mug la croix cardigan banh mi.";

const arr = [];

for (let i = 0; i <= 4; i++) {
  let randomData = {};
  randomData.name = randomDate();
  randomData.data = randomList(100, 200);
  arr.push(randomData);
}

const container = document.getElementById("container");
let chart = Highcharts.chart({
  chart: {
    renderTo: container,
    type: "spline",
    backgroundColor: "white",
    marginBottom: 40,
    zoomType: "xy",
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

  colors: colors,

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

  series: arr,
  caption: caption(chartCaption),
});

document.getElementById("randomBtn").addEventListener("click", () => {
  // TODO: make a fucntion to reload a chart
});
