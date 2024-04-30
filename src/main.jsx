import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import SignIn from "./Components/Sign in/Signin";
import AuthProvider from "./Contex/AuthProvider";
import SignUp from "./Components/SignUp/SignUp";
import Update from "./Components/Update/Update";

// import AuthProvider from './Contex/AuthProvider'
import AllTuristSpot from "./Components/All Tourists Spot/AllTuristSpot";
import AddTuristSpot from "./Components/Add Turist Spot/AddTuristSpot";
import Mylist from "./Components/My List/Mylist";
import Details from "./Components/Details/Details";
import ErrorPage from "./Components/Utility/ErrorPage";
import PrivateRoute from "./Components/Private Route/PrivateRoute";
import CountriDetails from "./Components/Country/CountriDetails";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://back-end-gold-six.vercel.app/user"),
      },
      {
        path: "/allturistspot",
        element: <AllTuristSpot></AllTuristSpot>,
        loader: () => fetch("https://back-end-gold-six.vercel.app/user"),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <Mylist></Mylist>
          </PrivateRoute>
        ),
        loader: () => fetch("https://back-end-gold-six.vercel.app/user"),
      },
      {
        path: "/addturistspot",
        element: (
          <PrivateRoute>
            <AddTuristSpot></AddTuristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://back-end-gold-six.vercel.app/user/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://back-end-gold-six.vercel.app/user/${params.id}`),
      },
      {
        path: "/countrydetails",
        element: <CountriDetails></CountriDetails>,
      },
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
