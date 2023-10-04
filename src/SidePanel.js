import { GoHomeFill } from "react-icons/go";
import { BsListTask, BsPlus } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";

const SidePanel = () => {
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
        <button className="btn">
          <BsPlus />
          Add task
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
