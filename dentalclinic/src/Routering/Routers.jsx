import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbor from '../Layout/Navbor'
import Home from '../Pages/Home'
import About from '../Pages/About'
// import Footer from '../Layout/Footer'
import MainLayout from '../Layout/MainLayout'
import Services from '../Pages/Services'
import Testomonials from '../Pages/Testomonials'
import Cases from '../Pages/Cases'
import Contact from '../Pages/Contact'

const Routers = () => {
const routes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
            {
              index : true,
              element : <Home/> 
            },
            {
              path : "/about",
              element : <About/>
            },
            {
            path : "/services",
            element : <Services/>
            },
            {
              path : "/testomonials",
              element : <Testomonials/>
            },
            {
              path : "/cases",
              element : <Cases/>,
            },
            {
              path :"/contact",
              element : <Contact/>
            }
        ],
    
    }
])
  return (
    <div>
      <RouterProvider router={routes} />   
         </div>
  )
}

export default Routers
