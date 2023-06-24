export const caption = (text) => {
  return {
    verticalAlign: "top",
    useHTML: true,
    style: {
      padding: "10px 0",
    },
    text: text,
  };
};
