import './navbar.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Navbar() {
  return <>
    <div id="navbar">
      <NavLink to="">
        <div className='vertical align-items-center'>
          🏠
          <div style={{ fontSize: "small" }}>Home</div>
        </div>
      </NavLink>
      <NavLink to="porfolio">
        <div className='vertical align-items-center'>
          📚
          <div style={{ fontSize: "small" }}>Porfolio</div>
        </div>
      </NavLink>
      <NavLink to="about">
        <div className='vertical align-items-center'>
          ❓
          <div style={{ fontSize: "small" }}>About</div>
        </div>
      </NavLink>
    </div>
  </>
}