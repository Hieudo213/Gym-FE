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
import My_account from "../pages/My_account";
import EditProfile from "../components/EditProfile";
import Profile from "../components/Profile";
import Subcription from "../components/Subcription";
import ChangePassword from "../components/ChangePassword";
import Admin from "../admin/Admin";
import Home from "../admin/Home";
import Equipment from "../admin/Equipment";
import Employee from "../admin/Employee";
import RespondFromMember from "../admin/RespondFromMember";
import Member from "../admin/Member";
import Transaction from "../admin/Transaction";
import Responses from "../admin/Responses";
import Package from "../admin/Package";
import Room from "../admin/Room";
import Myservices from "../pages/Myservices"
import Category from "../admin/Category";
import Gym from "../admin/Gym";

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
        path: "/My-services",
        element: <Myservices />,
      },
      {
        path: "/khuyen-mai",
        element: <Promotions />,
      },
      {
        path: "/chung-toi-dang-hoan-thien",
        element: <ComingSoon />,
      },
      {
        path: "/my-account",
        element: <My_account />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "change-info",
            element: <EditProfile />,
          },
          {
            path: "subcription",
            element: <Subcription />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
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
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "room",
        element: <Room />,
      },
      {
        path: "equipment",
        element: <Equipment />,
      },
      {
        path: "employee",
        element: <Employee />,
      },
      {
        path: "respond/member",
        element: <RespondFromMember />,
      },
      {
        path: "member",
        element: <Member />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "response/all",
        element: <Responses />,
      },
      {
        path: "packages",
        element: <Package />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "gym",
        element: <Gym />,
      },
    ],
  },
]);
