export const xAxis = () => {
  return {
    type: "linear",
    opposite: true,
    offset: 40,
    categories: categories,
    showFirstLabel: true,
    showLastLabel: true,
    labels: {
      style: {
        color: "#191919",
        fontWeight: "bold",
      },
    },
    accessibility: {
      rangeDescription: "Hours of the day",
    },
  };
};

const categories = [
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
];
