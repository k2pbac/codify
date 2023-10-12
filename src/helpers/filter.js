export const filterListByMonth = (list) => {
  const tempArray = Array.from({ length: 12 }, (v, i) => 0);
  list &&
    list.forEach((element) => {
      element.clicked &&
        tempArray[parseInt(element.deadline.substring(0, 2)) - 1]++;
    });
  return tempArray;
};

export const filterListByYear = (list) => {
  const tempObj = {};
  list &&
    list.forEach((element) => {
      if (element.clicked) {
        if (tempObj[element.deadline.substring(6, 10)])
          tempObj[element.deadline.substring(6, 10)]++;
        else tempObj[element.deadline.substring(6, 10)] = 1;
      }
    });
  console.log(tempObj);
  return tempObj;
};
