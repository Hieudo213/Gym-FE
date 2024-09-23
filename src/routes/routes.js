import App from "../App";
import ErrorPage from "../errors/ErrorPage";
import HomePage from "../pages/HomePage";
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
  }
]);