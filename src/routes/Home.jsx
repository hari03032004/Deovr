import React from 'react'
import TopNavbar from '../components/TopNavbar'
import  '../index.css'
import Button from '../components/Button'
import Video from '../components/Video'
import * as FaIcons from "react-icons/fa";
import { Link ,useOutletContext} from 'react-router-dom'


export default function Home(props) {
  const showSidebar = useOutletContext();
  return (
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
        <p className='Heading'>My VR Videos</p>
        <div className='button-align'>
          <button className='home-items'>
            MY FEED
          </button>
          <button className='home-items'>
            NEW
          </button>
          <button className='home-items'>
            TOP
          </button>
        </div>
        <div className='video-grid'>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
          <Link to="/Videos">
            <Video side={false} />
          </Link>
        </div>
      </div>
      
    </div>
  )
}

