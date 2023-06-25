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

const drawChart = () => {
  Highcharts.chart(loadSettings(arr, "spline"));
};

drawChart();

document.getElementById("randomBtn").addEventListener("click", () => {
  arr = [];
  loadFakeData();
  drawChart();
});
