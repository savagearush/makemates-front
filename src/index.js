import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = React.lazy(() => import("./Components/Home"));
const Profile = React.lazy(() => import("./Components/Profile"));
const Layout = React.lazy(() => import("./Components/Layout"));
const Login = React.lazy(() => import("./Components/Login"));
const Register = React.lazy(() => import("./Components/Register"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
