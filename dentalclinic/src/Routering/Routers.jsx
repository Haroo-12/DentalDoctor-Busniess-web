import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import { BeatLoader } from "react-spinners";
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0c0b0a]">
    <p className="text-[var(--textwhite)] font-body text-sm tracking-[0.3em] uppercase">
    <BeatLoader color="#fff" size={8} />
    </p>
  </div>
)

const Routers = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          lazy: () => import('../Pages/Home').then(m => ({ Component: m.default }))
        },
        {
          path: "/about",
          lazy: () => import('../Pages/About').then(m => ({ Component: m.default }))
        },
        {
          path: "/testomonials",
          lazy: () => import('../Pages/Testomonials').then(m => ({ Component: m.default }))
        },
        {
          path: "/contact",
          lazy: () => import('../Pages/Contact').then(m => ({ Component: m.default }))
        },
        {
          path: "/services",
          lazy: () => import('../Pages/Services').then(m => ({ Component: m.default }))
        },
        {
          path: "/cases",
          lazy: () => import('../Pages/Cases').then(m => ({ Component: m.default }))
        },
        {
          path: "/cases/:id",
          lazy: () => import('../GalleryComponents/GalleryCardDetail').then(m => ({ Component: m.default }))
        },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Routers