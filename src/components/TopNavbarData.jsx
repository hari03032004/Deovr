import React from "react";
import "./TopNavbar.css";
import { RiVipCrown2Fill } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";

export const TopNavbarData = [
  {
    title: "GET PREMIUM",
    path: "/payment/premium",
    icon: <RiVipCrown2Fill />,
    cName: "topbar-text",
  },
  {
    title: "UPLOAD",
    path: "/videos/add",
    icon: <FaCloudUploadAlt />,
    cName: "topbar-text",
  },
  {
    title: "SIGN IN",
    path: "/user",
    icon: <RiVipCrown2Fill />,
    cName: "topbar-text",
  },
];
