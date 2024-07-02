import React from "react";
import {Switch} from "antd";

function onchange() {
  console.log("change");
  }
function ToggleButton()
{
  return(
    <div className="App">
        <Switch defaultChecked={false}
        size="small"
          onChange={onchange}
        />

    </div>
  );
}
export default ToggleButton;