import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import Banner from "./Components/Banner/Banner";
import Home001 from "./Components/Home/Home001";
import SignIn from "./Components/Sign in/Signin";
import AuthProvider from "./Contex/AuthProvider";
import SignUp from "./Components/SignUp/SignUp";

// import AuthProvider from './Contex/AuthProvider'

const router = new createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path: "/home001",
        element: <Home001></Home001>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
