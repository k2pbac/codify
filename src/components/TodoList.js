import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = (props) => {
  const { list, filter, date } = useSelector((state) => state.todoItems);
  const { mode } = useSelector((state) => state.style);
  const term =
    props && props.match && props.match.params
      ? props.match.params["term"]
      : "";

  const filteredList =
    list &&
    list.reduce((acc, el, index) => {
      const name = el.name.toLowerCase();
      const length = filter.length == 0 && term ? term.length : filter.length;
      if (
        (name.substring(0, length) === filter ||
          name.substring(0, length) === term ||
          (filter == "" && term == "")) &&
        date === el.deadline
      ) {
        acc.push(
          <TodoItem
            key={el.key}
            index={el.key}
            clicked={!!list && !!list[index]["clicked"]}
            currentItems={list}
            item={el}
          ></TodoItem>
        );
      }

      return acc;
    }, []);

  return (
    <div className={`TodoList ${mode}`}>
      <div className="search-container">
        <p>Tasks</p>
      </div>
      <div className="list-items">
        <>
          {!!filteredList.some((el) => !!el) ? (
            filteredList
          ) : (
            <p className="empty">Nothing to show yet...</p>
          )}
        </>
      </div>
    </div>
  );
};

export default TodoList;
