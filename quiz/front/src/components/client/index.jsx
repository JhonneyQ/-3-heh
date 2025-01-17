import React from 'react'
import Header from '../../layouts/header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layouts/footer'

const Client = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Client