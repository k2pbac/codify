import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todoItems from "./reducers/todoReducer";
import style from "./reducers/styleReducer";
import chart from "./reducers/chartReducer";

//STORE - Global state for redux
let store = configureStore({
  reducer: { todoItems, style, chart },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
