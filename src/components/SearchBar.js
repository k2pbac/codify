import { useDispatch } from "react-redux";
import { searchTodos } from "../reducers/todoReducer";
import { BsSearch } from "react-icons/bs";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.style);

  return (
    <div className="search-bar">
      <div id="search-wrapper" className={`${mode}`}>
        <BsSearch className="search-icon" />
        <input
          type="text"
          id="search"
          placeholder="Search something..."
          onChange={(e) => {
            dispatch(searchTodos(e.target.value));
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter")
              return window.location.replace("/tasks/:task");
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
