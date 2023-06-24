export const yAxis = () => {
  return {
    scrollbar: {
      enabled: true,
    },
    reversed: true,
    gridLineWidth: 0,
    tickInterval: 1,
    startOnTick: false,
    endOnTick: false,
    labels: {
      style: {
        color: "#191919",
        fontWeight: "bold",
      },
    },
    title: {
      text: null,
      style: {
        color: "#191919",
        fontWeight: "bold",
      },
    },
  };
};
