import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Error from "../Error/Error";
import Main from "../layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import ChefDetails from'./../Pages/ChefDetails/ChefDetails'
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><Blogs /></PrivateRoute>,
      },
      {
        path:"/chefdetails/:id",
        element:<PrivateRoute><ChefDetails/></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/singleDetails/${params.id}`)

        
      }
    ],
  },
  {
    path:"*",
    element:<Error/>
  }
]);

export default router;
