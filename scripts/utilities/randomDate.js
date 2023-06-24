const moment = require("moment");

const generateDate = (start, end) => {
  let date = new Date(+start + Math.random() * (end - start));
  return moment(date).format("MMMM Do YYYY");
};

export const randomDate = () => {
  return generateDate(new Date(2023, 4, 1), new Date(2023, 4, 31));
};
