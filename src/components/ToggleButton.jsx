import React from "react";
import {Switch} from "antd";

function ToggleButton()
{
  return(
    <div className="App">
        <Switch defaultChecked={false}
        size="small"/>

    </div>
  );
}
export default ToggleButton;