// import list from "../list.json";
import TodoList from "./TodoList";
import Calendar from "./Calendar";
import SearchBar from "./SearchBar";

import SidePanel from "./SidePanel";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
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
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    if (path !== window.location.pathname) setPath(window.location.pathname);
  }, [window.location.pathname]);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );
  return (
    <div className={`Codify`}>
      <SidePanel />
      <div className={`main-section ${mode}`}>
        <SearchBar />
        {!path.includes("tasks") && !matches && <Calendar />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tasks/:term" component={TodoList} />
          <Route path="/tasks" component={TodoList} />
        </Switch>
        {((path.includes("tasks") && !matches) || matches) && <Calendar />}
      </div>
    </div>
  );
}

export default App;
