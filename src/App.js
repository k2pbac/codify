import list from "./list.json";
import TodoList from "./TodoList";
import Calendar from "./Calendar";
import SearchBar from "./SearchBar";
import { GoHomeFill } from "react-icons/go";
import { HiChartBarSquare } from "react-icons/hi2";
import { BsListTask } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";

function App() {
  return (
    <div className="Todo">
      <div className="side-panel">
        <div className="logo">
          <img src="./logo.png"></img>
          <h1>Codify</h1>
        </div>
        <a href="/">
          <GoHomeFill />
          Home
        </a>
        {/* <a href="/">
          <HiChartBarSquare />
          Dashboard
        </a> */}
        <a href="/">
          <BsListTask />
          Tasks
        </a>
        <a href="/">
          <LuSettings />
          Settings
        </a>
      </div>
      <div className="main-section">
        <SearchBar />
        <div className="content">
          <TodoList items={list}></TodoList>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
