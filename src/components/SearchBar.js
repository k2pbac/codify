import { useDispatch } from "react-redux";
import { searchTodos } from "../reducers/todoReducer";
import { BsSearch } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { LuSettings } from "react-icons/lu";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <div id="search-wrapper">
        <BsSearch className="search-icon" />
        <input
          type="text"
          id="search"
          placeholder="Search something..."
          onChange={(e) => {
            dispatch(searchTodos(e.target.value));
          }}
        />
      </div>
      <div id="icon-wrapper">
        <GoBell className="bell-icon" />
      </div>
      <div id="icon-wrapper">
        <LuSettings className="settings-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
