import { yAxis } from "./options/yAxis.js";
import { xAxis } from "./options/xAxis.js";
import { plotOptions } from "./options/plotOptions.js";
import { caption } from "./options/caption.js";

const colors = ["#335c67", "#fff3b0", "#e09f3e", "#9e2a2b", "#540b0e"];

let chartTitle = "Random facility data";
let chartCaption =
  "I'm baby readymade tofu gorpcore roof party cardigan banjo. Intelligentsia DSA echo park keytar, venmo copper mug la croix cardigan banh mi.";

const container = document.getElementById("container");

export const loadSettings = (arr, type) => {
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
  };

  return setting;
};
