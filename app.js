$(document).ready(() => {
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
        // backgroundColor: "#1b1b1b",
        backgroundColor: "white",
        marginBottom: 40,
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

      yAxis: {
        reversed: true,
        gridLineWidth: 0,
        tickInterval: 1,
        startOnTick: false,
        endOnTick: false,
        labels: {
          style: {
            color: "black",
            fontWeight: "bold",
          },
        },
        title: {
          text: null,
          style: {
            color: "black",
            fontWeight: "bold",
          },
        },
      },

      colors: [
        "#FF0200",
        "#7CB4EC",
        "#008001",
        "#faf0be",
        "#FFB6C1",
        "#2C908F",
        "#91EE7D",
        "#F7A35B",
        "#8185E8",
        "#F15C80",
        "#ffffff",
        "#A19642",
      ],

      xAxis: {
        type: "linear",
        opposite: true,
        offset: 40,
        categories: [
          "00:00h",
          "01:00h",
          "02:00h",
          "03:00h",
          "04:00h",
          "05:00h",
          "06:00h",
          "07:00h",
          "08:00h",
          "09:00h",
          "10:00h",
          "11:00h",
          "12:00h",
          "13:00h",
          "14:00h",
          "15:00h",
          "16:00h",
          "17:00h",
          "18:00h",
          "19:00h",
          "20:00h",
          "21:00h",
          "22:00h",
          "23:00h",
        ],
        showFirstLabel: true,
        showLastLabel: true,
        labels: {
          style: {
            color: "black",
            fontWeight: "bold",
          },
        },
        accessibility: {
          rangeDescription: "Hours of the day",
        },
      },

      legend: {
        align: "right",
        verticalAlign: "middle",
        layout: "proximate",
        itemStyle: {
          color: "black",
          fontWeight: "bold",
        },
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          marker: {
            enabled: true,
            symbol: "circle",
          },
          //   pointStart: 0, // para mostrar desde cuando se muestran los datos
          lineWidth: 4, // el grosor de la línea
        },
      },

      legenf: {
        align: "right",
        verticalAlign: "middle",
        layout: "proximate",
        itemStyle: {
          color: "#FFFFFF",
          fontWeight: "bold",
        },
      },

      series: arrayData,
    });
  });
});
