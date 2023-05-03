import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Main from "../layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import ChefDetails from'./../Pages/ChefDetails/ChefDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path:"/chefdetails",
        element:<ChefDetails/>
      }
    ],
  },
]);

export default router;
