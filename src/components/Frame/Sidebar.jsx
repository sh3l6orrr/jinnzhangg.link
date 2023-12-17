import { Filler, Space } from '../../util'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Sidebar() {
  return <>
    <div id="sidebar">
      <NavLink to=""> 
          🏠 Home
      </NavLink>
      <Space h="0.6rem" />
      <NavLink to="porfolio"> 
        📚 Porfolio
      </NavLink>
      <Filler />
      <NavLink to="sponsor" > 
          ❤️ Sponsor
      </NavLink>
      <Space h="0.6rem" />
      <NavLink to="about"> 
          ❓ About
      </NavLink>
    </div>
  </>
}