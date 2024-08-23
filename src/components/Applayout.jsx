import React,{useState} from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
export default function Applayout() {
  const [sidebar, setSidebar] = useState(true);
  const [close,setClose]=useState(false);
  const showSidebar = () => {
    console.log(sidebar);
    setSidebar(!sidebar);
  }
  const showClose = () =>{
    setClose(!close)
  }
  return (
    <>
      <Navbar showSidebar={showSidebar} sidebar={sidebar} close={close}/>
      <Outlet context={showSidebar} showClose={showClose}/>
    </>
  )
}
