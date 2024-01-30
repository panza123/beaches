import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Destination from '../components/Destination'
import Search from '../components/Search'
import Select from '../components/Select'
import Carlout from '../components/Carlout'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Destination/>
        <Search/>
        <Select/>
        <Carlout/>
        <Footer/>
    </div>
  )
}
