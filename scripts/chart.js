let Highcharts = require("highcharts");
import { randomDate } from "./utilities/randomDate.js";
import { randomList } from "./utilities/randomList.js";
import { loadSettings } from "./chartSettings";

let arr = [];
const loadFakeData = () => {
  for (let i = 0; i <= 4; i++) {
    let randomData = {};
    randomData.name = randomDate();
    randomData.data = randomList(100, 140);
    arr.push(randomData);
  }
};
loadFakeData();

let chatType = "spline";
let chart;
const drawChart = () => {
  chart = Highcharts.chart(loadSettings(arr, chatType));
};

drawChart();

document.getElementById("randomBtn").addEventListener("click", () => {
  arr = [];
  loadFakeData();
  drawChart();
});

document.getElementById("line_btn").addEventListener("click", () => {
  chatType = "line";
  drawChart();
});

document.getElementById("spline_btn").addEventListener("click", () => {
  chatType = "spline";
  drawChart();
});

document.getElementById("area_btn").addEventListener("click", () => {
  chatType = "area";
  drawChart();
});

document.getElementById("areaspline_btn").addEventListener("click", () => {
  chatType = "areaspline";
  drawChart();
});

document.getElementById("column_btn").addEventListener("click", () => {
  chatType = "column";
  drawChart();
});

document.getElementById("bar_btn").addEventListener("click", () => {
  chatType = "bar";
  drawChart();
});

document.getElementById("small").addEventListener("click", () => {
  chart.setSize(800, 500);
});

document.getElementById("large").addEventListener("click", () => {
  chart.setSize(1600, 550);
});
