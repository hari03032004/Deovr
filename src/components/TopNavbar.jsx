import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 
import "../index.css" 
import Searchbar from "./Searchbar";
import Button from "./Button";
import {TopNavbarData} from "./TopNavbarData";


function TopNavbar() {
  const [sidebar, setSidebar] = useState(true);
  const Data = TopNavbarData[2];
  console.log(Data);
  const showSidebar = () => setSidebar(!sidebar);

  return (
      <div className="container">
        <Searchbar/>
        <div className="topnavbar-button">
          <Button name="GET PREMIUM" width="150px" bgcolor="#F9d041" color="#4d4321" icon="crown"/>
          <Button name="UPLOAD" width="100px" bgcolor="#FF6D55" color="#00000099" icon = "upload"/>
          <Link to="/user/signin">
            <Button name="SIGN IN" width="100px" bgcolor="transparent" color="black" />
          </Link>
          
        </div>
      </div>
  );

}

export default TopNavbar;