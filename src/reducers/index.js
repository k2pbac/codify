import { combineReducers } from "redux";
import todoDataReducer from "./todo-reducer";

const allReducers = combineReducers({
  todoData: todoDataReducer,
});

export default allReducers;
