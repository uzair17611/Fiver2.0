import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/home/Home"
import Add from "./Pages/Add/Add";
import Gig from "./Pages/gig/Gig";
import Gigs from "./Pages/gigs/Gigs"
import Mygigs from "./Pages/mygigs/Mygigs";
import Login from "./Pages/login/Login"
import Messages from './Pages/massages/Messages'
import Message from './Pages/message/Message'
import Order from './Pages/order/Order'
import "./App.scss"
import Register from "./Pages/Register/Register"
import React, { Children } from "react";
import Footer from "./Components/Footer/Footer";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";


function App() {

  const Layout =()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>

      
      
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Layout/>,
      children:[{
        path:"/",
        element:<Home/>

      },
      {
        path:"/add",
        element:<Add/>

      },{
        path:"/gig/:id",
        element:<Gig/>

      },{
        path:"/gigs",
        element:<Gigs/>

      },{
        path:"/Login",
        element:<Login/>

      },{
        path:"/massages",
        element:<Message/>

      },
      {
        path:"/massage/:id",
        element:<Messages/>

      },
      {
        path:"/order",
        element:<Order/>

      },
      {
        path:"/register",
        element:<Register/>

      },
      {
        path:"/gigs",
        element:<Gigs/>

      },
      {
        path:"/mygigs",
        element:<Mygigs/>

      },
    
    
    ]
    },
  ]);

  return (
    <div>
  
     <RouterProvider router={router} />
    </div>
  )
}

export default App
