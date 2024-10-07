import App from "../App";
import HomePage from "../pages/HomePage";

import Login from "../pages/Login";
import Register from "../pages/Register"
import {
  createBrowserRouter,
} from "eact-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Services from "../pages/Services";
import Club from "../pages/Club";
import Schedule from "../pages/Schedule";
import PricingPolicy from "../pages/PricingPolicy";
import News from "../pages/News";
import Promotions from "../pages/Promotions";
import Login from "../layouts/Login";
import Logout from "../layouts/Logout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/clb",
        element: <Club />,
      },
      {
        path: "/dich-vu",
        element: <Services />,
      },
      {
        path: "/lich-hoc",
        element: <Schedule />,
      },
      {
        path: "/chinh-sach-gia",
        element: <PricingPolicy />,
      },
      {
        path: "/tin-tuc",
        element: <News />,
      },
      {
        path: "/khuyen-mai",
        element: <Promotions />,
      },
    ],  
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "login", 
        element: <Login />,
        index: false
      },
      
    ]
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "register", 
        element: <Register />,
        index: false
      },
      
    ]
  }
]);

