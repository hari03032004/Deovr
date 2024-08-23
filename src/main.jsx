import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useOutletContext
} from "react-router-dom";
import Videos from "./routes/Videos";
import Navbar from "./components/Navbar";
import Photos from "./routes/Photos";
import Originals from "./routes/Originals";
import GetVrPlayer from "./routes/GetVrPlayer";
import Premium from "./routes/Premium";
import MyFavourites from "./routes/MyFavourites";
import PublicPlaylists from "./routes/PublicPlaylists";
import Home from "./routes/Home";
import MySubscriptions from "./routes/MySubscriptions";
import "./components/Sidebar.css";
import "./routes/Signup"
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import Video360 from "./components/Video360"
import Applayout from "./components/Applayout";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
      {
        path: "/originals",
        element: <Originals />,
      },
      {
        path: "/getvrplayer",
        element: <GetVrPlayer />,
      },
      {
        path: "/premium",
        element: <Premium />,
      },
      {
        path: "/myfavourites",
        element: <MyFavourites />,
      },
      {
        path: "/mysubscriptions",
        element: <MySubscriptions />,
      },
      {
        path: "/publicplaylists",
        element: <PublicPlaylists />,
      },
      {
        path: "/user/signin",
        element: <Signin/>,
      },
      {
        path: "/user/signup",
        element: <Signup/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
  </RouterProvider>
);
