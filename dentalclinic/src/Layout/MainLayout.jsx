import React, { Suspense } from 'react'
import Navbor from './Navbor'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const MainLayout = () => {
    const navigation = useNavigation()
  const isLoading = navigation.state === "loading"
  return (
    <div>
      <ScrollToTop />
    <Navbor/>

   {isLoading && (
  <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
    <p className="text-black font-body text-sm tracking-[0.3em] uppercase">
      Loading...
    </p>
  </div>
)}

      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout