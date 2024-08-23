import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
import * as FaIcons from "react-icons/fa";

export default function Heading(props) {
  return (
    <div className='Heading'>
      <div className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars />
            </Link>
            <div className="logo">
              <Link to="/">
                <h4>OTL VR</h4>
              </Link>
            </div>
      </div>
    </div>
  )
}
