import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div id="search-wrapper">
        <BsSearch className="search-icon" />
        <input type="text" id="search" placeholder="Search something..." />
      </div>
      <p>Bell</p>
      <p>Settings</p>
    </div>
  );
};

export default SearchBar;
