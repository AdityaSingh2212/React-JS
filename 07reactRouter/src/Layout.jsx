//

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'  //It will use this layout as a base and whether it gets or change anything or not it will make sure that header and footer will be same throughout the changing part or updating part

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />   
    <Footer />
    </>
  )
}

export default Layout