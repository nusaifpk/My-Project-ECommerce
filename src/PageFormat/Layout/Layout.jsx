import React from 'react'
import Footer from '../Footer/Footer'
import { Routes } from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <div>
        <Routes />
      </div>
      <Footer /> 
    </>
  )
}

export default Layout