import { useDispatch } from "react-redux";
import { updateTodoItem } from "../reducers/todoReducer";
import { MdCheckCircle } from "react-icons/md";

const TodoItem = ({ item, clicked = false, index }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(updateTodoItem(index))}
      className={`todo-item ${!!clicked ? "clicked" : ""}`}
    >
      <p>
        <MdCheckCircle className="check-icon" />
        {item.name}
      </p>
    </div>
  );
};

export default TodoItem;
