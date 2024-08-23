import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SidebarData,sideToggle,sidecategory } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Sidebar.css";  

function Navbar(props) {
  const [color , setColor] = useState("lightgray");
  var size = "23px";
  function changeColor(e) {
    console.log("Hello");
    setColor("gray")
  }
  const data = SidebarData(color,size,changeColor);
  return (
    <div className="main">
      <IconContext.Provider value={{ color: "black" }}> 
        <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="logo">
            <Link to="/">
              <div className="heading-close">
                <h1>OTL VR</h1>
                {props.close && <IoClose size="25px" onClick={props.showSidebar}/>}
              </div>
            </Link>
          </div>
          <ul className="nav-menu-items" >
            {data.map((item, index) => {
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
    </div>
  );
}

export default Navbar;