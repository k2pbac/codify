export const filterListByMonth = (list) => {
  const tempArray = Array.from({ length: 12 }, (v, i) => 0);
  list &&
    list.forEach((element) => {
      tempArray[parseInt(element.deadline.substring(0, 2)) - 1]++;
    });
  return tempArray;
};
