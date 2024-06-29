import React from "react";;
import { IoMdVideocam } from "react-icons/io";
import { CiCamera } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { LiaCrownSolid } from "react-icons/lia";
import { LiaDownloadSolid } from "react-icons/lia";

import "./Sidebar.css";

export const SidebarData = [
  {
    title: "VIDEOS",
    path: "/",
    icon: <IoMdVideocam color = "grey"/>,
    cName: "nav-text",
  },
  {
    title: "PHOTOS",
    path: "/Photos",
    icon: <CiCamera color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "ORIGINALS",
    path: "/Originals",
    cName: "nav-text",
  },
  {
    title: "GETVRPLAYER",
    path: "/GetVrPlayer",
    icon: <LiaDownloadSolid color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "PREMIUM",
    path: "/Premium",
    icon: <LiaCrownSolid color="grey"/>,
    cName: "nav-text-premium",
  },
  {
    title: "MY FAVOURITES",
    path: "/MyFavourites",
    icon: <CiHeart color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "MY SUBSCRIPTIONS",
    path: "/MySubscriptions",
    icon: <MdOutlineSubscriptions color="grey"/>,
    cName: "nav-text",
  },
  {
    title: "PUBLIC PLAYLISTS",
    path: "/PublicPlayists",
    icon: <MdOutlinePlaylistAddCheckCircle color="grey"/>,
    cName: "nav-text",
  },
];
