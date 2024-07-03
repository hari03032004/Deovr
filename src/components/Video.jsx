import React from 'react'
import "../index.css"
import { CiMenuKebab } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";

export default function Video() {
  return (
    <div className='video-container'>
      <div className='video' >
        <video 
          src="output.mp4" 
          typeof='type="video/mp4"'
          controls>
        </video>
        <div className='premium-icon'>
          <FaCrown  color="black"/>
        </div>
      </div>
      <div className='video-content'>
        <div className='video-title'>
          <div className='video-profile'></div>
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
