import './index.css'
import './util.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NotFound from './components/NotFound/NotFound.jsx'
import Frame from './components/Frame/Frame.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Sponsor from './components/Sponsor2/Sponsor.jsx'
import Porfolio from './components/Porfolio/Porfolio.jsx'


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Frame
        isMobile={isMobile}
      />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home isMobile={isMobile} />
        },
        {
          path: "porfolio",
          element: <Porfolio />
        },
        {
          path: "sponsor",
          element: <Sponsor />
        },
        {
          path: "about",
          element: <About isMobile={isMobile} />
        }
      ],
    },
  ])
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

