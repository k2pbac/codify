// import list from "../list.json";
import TodoList from "./TodoList";
import Calendar from "./Calendar";
import SearchBar from "./SearchBar";

import SidePanel from "./SidePanel";

function App() {
  return (
    <div className="Codify">
      <SidePanel />
      <div className="main-section">
        <SearchBar />
        <TodoList></TodoList>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
