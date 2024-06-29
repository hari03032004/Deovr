import React from "react";
import { createRoot } from "react-dom/client";
import title from "./usetitle";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Videos from "./routes/Videos";
import Navbar from "./components/Navbar";
import Photos from "./routes/Photos";
import Originals from "./routes/Originals";
import GetVrPlayer from "./routes/GetVrPlayer";
import Premium from "./routes/Premium";
import MyFavourites from "./routes/MyFavourites";
import PublicPlaylists from "./routes/PublicPlaylists"
import MySubscriptions from "./routes/MySubscriptions"
import "./components/Sidebar.css";
import Header from "./components/Header";
import RouteTitle from "./Routetitle";


const AppLayout = () => (
  <>
    <Header />
    <Navbar />
    <RouteTitle />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
