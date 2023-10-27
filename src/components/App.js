// import list from "../list.json";
import TodoList from "./TodoList";
import Calendar from "./Calendar";
import SearchBar from "./SearchBar";

import SidePanel from "./SidePanel";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  const [mode, setMode] = useState("light-mode");
  const onSelectMode = (mode) => {
    setMode(mode);
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    if (path !== window.location.pathname) setPath(window.location.pathname);
  }, [window.location.pathname]);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );
  return (
    <div className={`Codify`}>
      <SidePanel mode={mode} />
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
