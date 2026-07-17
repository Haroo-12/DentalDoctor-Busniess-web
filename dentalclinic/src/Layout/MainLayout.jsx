import React from 'react'
import Navbor from './Navbor'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbor/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
