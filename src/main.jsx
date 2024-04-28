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
import AllTuristSpot from './Components/All Tourists Spot/AllTuristSpot';
import AddTuristSpot from "./Components/Add Turist Spot/AddTuristSpot";
import Mylist from "./Components/My List/Mylist";
import Details from "./Components/Details/Details";




const router = new createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('http://localhost:5000/user'),
      },
      {
        path:'/allturistspot',
        element:<AllTuristSpot></AllTuristSpot>,
        loader:()=>fetch('http://localhost:5000/user'),
      },
      {
        path:'/mylist',
        element:<Mylist></Mylist>,
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path:'/addturistspot',
        element:<AddTuristSpot></AddTuristSpot>
        
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)    
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)    
      
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
