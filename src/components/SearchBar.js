import { useDispatch } from "react-redux";
import { searchTodos } from "../reducers/todoReducer";
import { BsSearch } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
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
        />
      </div>
    </div>
  );
};

export default SearchBar;
