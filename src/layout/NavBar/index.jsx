import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  return (
    <>
      <nav>
        <img src="../../../favicon-32x32.png" alt="" />
        <ul className="nav-links">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
