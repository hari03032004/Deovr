import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IoSearchSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import "./Sidebar.css"; 
import "../index.css" 
import Searchbar from "./Searchbar";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <h1>Helellllladjglkdihwjdslfjosdjfkldsjj9jof</h1>
  );

}

export default Navbar;