import { useState } from "react";

import { GoHomeFill } from "react-icons/go";
import { BsListTask, BsPlus } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import ItemModal from "./ItemModal";

const SidePanel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="side-panel">
      <div className="logo">
        <img src="./logo.png"></img>
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
        <a href="/">
          <LuSettings />
          Settings
        </a>
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
