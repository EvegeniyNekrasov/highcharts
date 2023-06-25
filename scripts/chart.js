let Highcharts = require("highcharts");

import { randomList } from "./utilities/randomList.js";
import { loadSettings } from "./chartSettings";
import { createArrayOfDates } from "./utilities/createArrayOfDates.js";

const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
let listOfDates = [];
let dataReady = false;

let arr = [];
const loadFakeData = () => {
  arr = [];
  for (let i = 0; i <= listOfDates.length - 1; i++) {
    let randomData = {};
    randomData.name = listOfDates[i];
    randomData.data = randomList(100, 140);
    arr.push(randomData);
  }
};

let chatType = "spline";
let chart;
const drawChart = () => {
  chart = Highcharts.chart(loadSettings(arr, chatType));
};

// Generate date button
document
  .getElementById("generateSelectedData")
  .addEventListener("click", () => {
    document.getElementById("container").style.display = "block";
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    if (startDate.value != "" && endDate.value != "") {
      listOfDates = createArrayOfDates(start, end);

      arr = [];
      loadFakeData();
      drawChart();
      dataReady = true;
    }
  });

// Line type button
document.getElementById("line_btn").addEventListener("click", () => {
  if (dataReady) {
    chatType = "line";
    drawChart();
  }
});

// Spline type button
document.getElementById("spline_btn").addEventListener("click", () => {
  if (dataReady) {
    chatType = "spline";
    drawChart();
  }
});

// Area type button
document.getElementById("area_btn").addEventListener("click", () => {
  if (dataReady) {
    chatType = "area";
    drawChart();
  }
});

// Areaspline type button
document.getElementById("areaspline_btn").addEventListener("click", () => {
  if (dataReady) {
    chatType = "areaspline";
    drawChart();
  }
});

// Column type button
document.getElementById("column_btn").addEventListener("click", () => {
  if (dataReady) {
    chatType = "column";
    drawChart();
  }
});

// Bar type button
document.getElementById("bar_btn").addEventListener("click", () => {
  if (dataReady) {
    chatType = "bar";
    drawChart();
  }
});
