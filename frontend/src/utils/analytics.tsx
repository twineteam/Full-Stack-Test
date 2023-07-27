const capture = (data: any[]) => {
  console.info("Sending event to analytics");
  if (data) {
    data[0].number = `${data[0].number}0`;
  }
};

export default {
  capture,
};
