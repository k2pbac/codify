const TodoItem = ({ item }) => {
  return (
    <div className="todo">
      <span>{item.name}</span>
    </div>
  );
};

export default TodoItem;
