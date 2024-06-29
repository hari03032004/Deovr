import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Sidebar.css";  

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            <li className="logo">
              <h1>DeoVR</h1>
            </li>
            {SidebarData.map((item, index) => {
              if(index<8){
                return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span >{item.title}</span>
                  </Link>
                </li>
              );
              }
              else if(index === 8){
                return (
                <>
                  <div className="line"></div>
                  <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span >{item.title}</span>
                  </Link>
                  </li>
                  <div className="line"></div>
                </>
                
              );
              }
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span >{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;