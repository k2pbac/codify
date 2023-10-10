import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { list, filter, date } = useSelector((state) => state.todoItems);
  const { mode } = useSelector((state) => state.style);

  const filteredList =
    list &&
    list.map((el, index) => {
      const name = el.name.toLowerCase();
      const length = filter.length;
      if (
        (name.substring(0, length) === filter || filter == "") &&
        date === el.deadline
      )
        return (
          <TodoItem
            key={el.key}
            index={el.key}
            clicked={!!list && !!list[index]["clicked"]}
            currentItems={list}
            item={el}
          ></TodoItem>
        );
    });

  return (
    <div className={`TodoList ${mode}`}>
      <div className="search-container">
        <p>Tasks</p>
      </div>
      <div className="list-items">
        <>{filteredList}</>
      </div>
    </div>
  );
};

export default TodoList;
