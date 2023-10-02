import TodoItem from "./TodoItem";

const TodoList = ({ items }) => {
  const collection = items.map((el) => {
    return <TodoItem item={el}></TodoItem>;
  });
  return (
    <div className="TodoList">
      <p>List</p>
      <div>{collection}</div>
    </div>
  );
};

export default TodoList;
