import { useDispatch } from "react-redux";
import { updateTodoItem } from "../reducers/todoReducer";
import { AiOutlineCheckSquare, AiFillDelete } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdDelete, MdCheckCircle } from "react-icons/md";

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
      {/* <MdDelete className="delete-icon" /> */}
    </div>
  );
};

export default TodoItem;
