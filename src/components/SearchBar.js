import { searchTodos } from "../reducers/todoReducer";
import { BsSearch } from "react-icons/bs";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
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
            setTerm(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              dispatch(searchTodos(e.target.value));
              return window.location.replace(`/tasks/${term}`);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
