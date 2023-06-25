const moment = require("moment");

export const createArrayOfDates = function (start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  let arr = new Array();
  let date = new Date(startDate);

  while (date <= endDate) {
    arr.push(moment(new Date(date)).format("MMMM Do YYYY"));
    date.setDate(date.getDate() + 1);
  }

  return arr;
};
