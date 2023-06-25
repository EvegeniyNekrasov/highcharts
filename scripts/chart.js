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

// Random data button
document.getElementById("randomBtn").addEventListener("click", () => {
  arr = [];
  loadFakeData();
  drawChart();
});

// Line type button
document.getElementById("line_btn").addEventListener("click", () => {
  chatType = "line";
  drawChart();
});

// Spline type button
document.getElementById("spline_btn").addEventListener("click", () => {
  chatType = "spline";
  drawChart();
});

// Area type button
document.getElementById("area_btn").addEventListener("click", () => {
  chatType = "area";
  drawChart();
});

// Areaspline type button
document.getElementById("areaspline_btn").addEventListener("click", () => {
  chatType = "areaspline";
  drawChart();
});

// Column type button
document.getElementById("column_btn").addEventListener("click", () => {
  chatType = "column";
  drawChart();
});

// Bar type button
document.getElementById("bar_btn").addEventListener("click", () => {
  chatType = "bar";
  drawChart();
});
