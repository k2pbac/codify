import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoData = useSelector((state) => state.todoItems.list);
  console.log("creating items");
  const list =
    todoData &&
    todoData.map((el, index) => {
      console.log(el);
      return (
        <TodoItem
          key={el.key}
          index={el.key}
          clicked={!!todoData && !!todoData[index]["clicked"]}
          currentItems={todoData}
          item={el}
        ></TodoItem>
      );
    });

  return (
    <div className="TodoList">
      <div className="search-container">
        <p>Tasks</p>
      </div>
      <div className="list-items">
        <>{list}</>
      </div>
    </div>
  );
};

export default TodoList;
