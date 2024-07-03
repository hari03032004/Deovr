import React from 'react'
import TopNavbar from '../components/TopNavbar'
import  '../index.css'
import Button from '../components/Button'
import Video from '../components/Video'

export default function Home() {
  return (
    <div className="layout">
      <div className='nav-grid'></div>
      <div className='main-grid'>
        <TopNavbar/>
        <p className='Heading'>My VR Videos</p>
        <div className='button-align'>
          <Button
            name="MY FEED"
            width="100px"
            color="black"
            bgcolor="lightgrey"
          />
          <Button
            name="NEW"
            width="60px"
            color="black"
            bgcolor="lightgrey"
          />
          <Button
            name="TOP"
            width="60px"
            color="black"
            bgcolor="lightgrey"
          />
        </div>
        <div className='video-grid'>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
        </div>
      </div>
      
    </div>
  )
}

