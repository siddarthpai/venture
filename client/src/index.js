import Navbar from "./Navbar/Navbar";
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Company from "./Components/Company";
import People from "./Components/People";
import Settings from "./Components/Settings";
import Statistics from "./Components/Statistics";
import Violations from "./Components/Violations";
import "./Navbar/navbar.css";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Company />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/violations",
        element: <Violations />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
