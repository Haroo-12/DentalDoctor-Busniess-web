import React from 'react'
import Navbor from './Navbor'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbor/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
