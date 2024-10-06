import App from "../App";
import ErrorPage from "../errors/ErrorPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register"
import {
  createBrowserRouter,
} from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
        index: true
      }
    ],
  },
  
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