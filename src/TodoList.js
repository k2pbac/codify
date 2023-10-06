import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(items);
  const list =
    currentItems &&
    currentItems.map((el, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          clicked={!!currentItems && !!currentItems[index]["clicked"]}
          currentItems={currentItems}
          setClicked={setCurrentItems}
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
