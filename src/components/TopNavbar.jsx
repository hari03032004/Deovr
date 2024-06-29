import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IoSearchSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import "./Sidebar.css";  

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className="topNavbar">
          <div className="Search">
            <IoSearchSharp />
          </div>
          <div className="left">
            <div className=""></div>
            <div className=""></div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;