import React from "react";
import { FiSearch } from "react-icons/fi";
function Searchbar(props) {
  return (
    <div className="search-bar">
      <FiSearch color="#808080" style={{marginRight:"5px"}}/>
      <input placeholder="Search" name="input-search"/>
    </div>
  );
}

export default Searchbar;