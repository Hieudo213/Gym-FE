import App from "../App";
import HomePage from "../pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import Services from "../pages/Services";
import Club from "../pages/Club";
import Schedule from "../pages/Schedule";
import PricingPolicy from "../pages/PricingPolicy";
import News from "../pages/News";
import Promotions from "../pages/Promotions";
import Login from "../layouts/Login";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage/>,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/error/403",
    element: <Permission />,
  },
]);
