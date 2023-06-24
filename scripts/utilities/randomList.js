export const randomList = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let list = [];
  for (let i = 0; i <= 23; i++) {
    list.push(Math.floor(Math.random() * (max - min) + min));
  }
  return list;
};
