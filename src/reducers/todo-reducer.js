const saveTodoData = (state = [], action) => {
  switch (action.type) {
    case "DATA":
      return action.payload;
    default:
      return {};
  }
};

export default saveTodoData;
