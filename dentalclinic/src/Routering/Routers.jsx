import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbor from '../Layout/Navbor'
import Home from '../Pages/Home'

const Routers = () => {
const routes = createBrowserRouter([
    {
        path : "/",
        element : <Navbor/>,
        children : [
            {
              index : true,
              element : <Home/> 
            }
        ]
    }
])
  return (
    <div>
      <RouterProvider router={routes} />   
         </div>
  )
}

export default Routers
