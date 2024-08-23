import React from 'react'
import "../index.css"
import "./video.css"
import { CiMenuKebab } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";
import Like from './Like';
import Comment from "./Comment";
import { Link } from 'react-router-dom';

export default function Video(props) {
  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };
  return (
    <div className='video-container-side'>
      <div className='video' >
        <Link to="/Videos">
          <video 
            src='/src/assets/video360.mp4'
            typeof='type="video/mp4"'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            muted
            autoPlay={false}
            >
          </video>
        </Link>
        <div className='premium-icon'>
          <FaCrown  color="black"/>
        </div>
        <div className='Like-com'>
          <Like />
          <p>200</p>
          <Comment num={2}/>
          <p>24</p>
        </div>
      </div>
      <div className='video-content-side'>
        <div className='video-title'>
          <div className='video-name'>Sample Video for the deoVR</div>
          <CiMenuKebab />
        </div>
        <div className='video-description'>
          <div className='channel-name'>
            VirtualPresence
          </div>
          <div className='video-stats'>
            9.1K views . 1 year ago
          </div>
        </div>
      </div>
    </div>
  )
}
