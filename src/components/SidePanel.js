import { useState } from "react";
import { useDispatch } from "react-redux";
import { GoHomeFill } from "react-icons/go";
import { BsListTask, BsPlus } from "react-icons/bs";
import { MdOutlineAddTask } from "react-icons/md";
import ItemModal from "./ItemModal";
import { updateMode } from "../reducers/styleReducer";

const SidePanel = () => {
  const [show, setShow] = useState(false);
  const [colorMode, setColorMode] = useState("Light");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const updateColorMode = () => {
    if (colorMode === "Light") {
      setColorMode("Dark");
      dispatch(updateMode("dark-mode"));
    } else {
      setColorMode("Light");
      dispatch(updateMode("light-mode"));
    }
  };

  return (
    <div className="side-panel">
      <div className="logo">
        <img
          alt="logo"
          src={`${colorMode === "Light" ? "/logo-light.png" : "/logo2.png"}`}
        ></img>
        <h1>Codify</h1>
      </div>
      <div className="icons">
        <a href="/">
          <GoHomeFill />
          Home
        </a>
        <a href="/tasks">
          <BsListTask />
          Tasks
        </a>
        <a className="hide-desktop" onClick={handleShow}>
          <MdOutlineAddTask />
          Add Task
        </a>
        <div>
          <input onChange={updateColorMode} type="checkbox" id="switch" />
          <label htmlFor="switch">Toggle</label>
          {colorMode} mode
        </div>
      </div>
      <div className="new-task hide-mobile">
        <img src="/task.png" alt="new task button"></img>
        <p>Add a new task to your list</p>
        <button type="button" className="btn" onClick={handleShow}>
          <BsPlus />
          Add task
        </button>
        <ItemModal show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default SidePanel;
