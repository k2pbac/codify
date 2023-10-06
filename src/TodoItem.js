import { AiOutlineCheckSquare, AiFillDelete } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdDelete, MdCheckCircle } from "react-icons/md";

const TodoItem = ({ item, clicked, setClicked, index, currentItems }) => {
  const handleClicked = () => {
    const temp = currentItems;
    if (!!temp[index] && !!temp[index]["clicked"])
      temp[index]["clicked"] = false;
    else {
      temp[index]["clicked"] = true;
    }
    setClicked([...temp]);
  };

  return (
    <div
      onClick={handleClicked}
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
