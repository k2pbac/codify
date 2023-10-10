// import list from "../list.json";
import TodoList from "./TodoList";
import Calendar from "./Calendar";
import SearchBar from "./SearchBar";

import SidePanel from "./SidePanel";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { mode } = useSelector((state) => state.style);
  useEffect(() => {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.remove("light-mode");
      document.body.classList.add(mode);
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add(mode);
    }
  }, [mode]);
  return (
    <div className={`Codify`}>
      <SidePanel />
      <div className={`main-section ${mode}`}>
        <SearchBar />
        <TodoList></TodoList>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
