import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { Link } from "react-router-dom";
import { SidebarData,sideToggle,sidecategory } from "./SidebarData";
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
              if(index<8 || index==9){
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
              else{
                return (
                  <div className="toggle">
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span >{item.title}</span>
                      </Link>
                    </li>
                  </div> 
              );
              }
            })}
            <li className="stoggle">
            {sideToggle.map((item,index)=>{
              return (
                
                 <div key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span >{item.title}</span>
                  </Link>
                 </div>
              );
            })}
            </li>
            <li className="cate">
            {sidecategory.map((item,index)=>{
              return (
                
                 <div key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span >{item.title}</span>
                  </Link>
                 </div>
              );
            })}
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;