import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Hompage/Homepage";
import Errorpage from "../Pages/ErrorPage/Errorpage";

export const router =createBrowserRouter([{
  path:'/',
  Component:MainLayout,
  children:[{
    index:true,
    element:<Homepage/>
  },
  {
    path:'/books',
    element:<Books/>
  }



  ],
  errorElement:<Errorpage/>
},




]

)