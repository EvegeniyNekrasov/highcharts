export const plotOptions = () => {
  return {
    series: {
      showInNavigator: true,
      label: {
        connectorAllowed: false,
      },
      marker: {
        enabled: true,
        symbol: "circle",
      },
      lineWidth: 4,
    },
  };
};
