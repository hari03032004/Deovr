import React from 'react'
import { BiSolidComment } from "react-icons/bi";
export default function comment() {
  const handleColor = (event)=>{
    event.target.color = "red";
  }
  return (
    <div>
      <BiSolidComment color='white' onMouseEnter={handleColor}/>
    </div>
  )
}
