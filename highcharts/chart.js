import { yAxis } from "./options/yAxis.js";
import { xAxis } from "./options/xAxis.js";
import { plotOptions } from "./options/plotOptions.js";
import { caption } from "./options/caption.js";

export function drawGraf() {
  let arrayData = [];
  const getData = async () => {
    const url = "./seed.json"; // for now it's json file, but in the future will be an endpoint call
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  };

  getData().then((data) => {
    data.forEach((element) => {
      arrayData.push(element);
    });

    console.log(data);

    const container = document.getElementById("container");
    Highcharts.chart(container, {
      chart: {
        type: "spline",
        backgroundColor: "white",
        marginBottom: 40,
        zoomType: "xy",
      },

      title: {
        text: "Highcharts chart",
        align: "left",
        color: "black",
      },

      credits: {
        enabled: false,
      },

      subtitle: {
        text: "dummy text",
        align: "left",
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

      series: arrayData,
      caption: caption(),
    });
  });
}

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
