import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
function Button(props) {
  const Width = props.width;
  const bgcolor = props.bgcolor;
  const color = props.color;
  return (
      <button className="button" style={{ width: Width ,backgroundColor: bgcolor,color:color,border:"none"}}>
        {props.icon=="crown" && <FaCrown  color="black"/>}
        {props.icon=="upload" && <MdCloudUpload  color="black"/>}
        {props.name}
      </button>
    
  );
}

export default Button;