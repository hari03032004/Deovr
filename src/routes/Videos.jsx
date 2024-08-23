import React from "react";
import TopNavbar from "../components/TopNavbar"
import Video360 from "../components/Video360";
import { Link ,useOutletContext} from "react-router-dom";
import "../index.css";
import * as FaIcons from "react-icons/fa";
import Videoside from "../components/Videoside"
function Videos(){
  const showSidebar = useOutletContext();
  return(
    <div className="layout">
      <div className='nav-grid'>
        <Link to="/">
          <h1 className='logo-heading'>OTL VR</h1>
        </Link>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars size='2rem' onClick={showSidebar}/>
        </Link>
      </div>
      <div className='main-grid'>
        <TopNavbar/>
        <div className='grid'>
          <div className="grid-1">
            <Video360/>
          </div>
          <div className='grid-2'>
            <p className="rec">Recommendations:</p>
            <div className="Rec-section">
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
              <Videoside/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Videos;