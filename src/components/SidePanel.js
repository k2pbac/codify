import { useState } from "react";
import { useDispatch } from "react-redux";
import { GoHomeFill } from "react-icons/go";
import { BsListTask, BsPlus } from "react-icons/bs";
import ItemModal from "./ItemModal";
import { updateMode } from "../reducers/styleReducer";

const SidePanel = () => {
  const [show, setShow] = useState(false);
  const [colorMode, setColorMode] = useState("Light");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const updateColorMode = () => {
    if (colorMode == "Light") {
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
        <img src="./logo2.png"></img>
        <h1>Codify</h1>
      </div>
      <div className="icons">
        <a href="/">
          <GoHomeFill />
          Home
        </a>
        <a href="/">
          <BsListTask />
          Tasks
        </a>
        <div>
          <input onChange={updateColorMode} type="checkbox" id="switch" />
          <label htmlFor="switch">Toggle</label>
          {colorMode} mode
        </div>
        {/* <a href="/">
          <LuSettings />
          Settings
        </a> */}
      </div>
      <div className="new-task">
        <img src="./task.png" alt="new task button"></img>
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
