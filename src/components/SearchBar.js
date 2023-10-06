import { BsSearch } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { LuSettings } from "react-icons/lu";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div id="search-wrapper">
        <BsSearch className="search-icon" />
        <input type="text" id="search" placeholder="Search something..." />
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
