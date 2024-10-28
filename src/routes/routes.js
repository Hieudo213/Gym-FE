import App from "../App";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import Services from "../pages/Services";
import ServicesDetail from "../pages/ServicesDetail";
import Club from "../pages/Club";
import Schedule from "../pages/Schedule";
import PricingPolicy from "../pages/PricingPolicy";
import News from "../pages/News";
import Promotions from "../pages/Promotions";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import ErrorPage from "../errors/ErrorPage";
import Permissions from "../errors/Permission";
import ComingSoon from "../pages/ComingSoon";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
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
        path: "/dich-vu/:id",
        element: <ServicesDetail />,
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
      {
        path: "/chung-toi-dang-hoan-thien",
        element: <ComingSoon />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/error/403",
    element: <Permissions />,
  },
]);
