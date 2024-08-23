import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 
import "../index.css" 
import Searchbar from "./Searchbar";
import { FaUserCircle } from "react-icons/fa";
import Button from "./Button";
import {TopNavbarData} from "./TopNavbarData";
import Heading from "./Heading";

function TopNavbar() {
  return (
      <div className="container">
        <Searchbar/>
        <div className="topnavbar-button">
          <Button name="PREMIUM" width="150px" bgcolor="#F9d041" color="#4d4321" icon="crown"/>
          <Button name="UPLOAD" width="100px" bgcolor="#FF6D55" color="#00000099" icon = "upload"/>
          <Link to="/user/signin">
          <div className="user-signin"><FaUserCircle color="lightgrey" size="35px"/> </div>
          </Link>
        </div>
      </div>
  );

}

export default TopNavbar;