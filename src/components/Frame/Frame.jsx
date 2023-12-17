import './frame.css'
import React from 'react'
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

import Header from './Header'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


export default function Frame({ isMobile }) {
  const navigation = useNavigation()

  return <>
    {isMobile
      ? <nav>
        <Navbar />
      </nav>
      : <aside>
        <Sidebar />
      </aside>
    }
    <header>
      <Header isMobile={isMobile} />
    </header>
    <main>
      <div id='content' className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>

    </main>

    <ScrollRestoration />
  </>
}
