import { Space } from "../../util"
import { Link } from "react-router-dom"
import React from "react"

export default function NotFound() {
  return <>
    <div className="vertical justify-content-center align-items-center" style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
      <img src="/android-chrome-512x512.png" style={{ width: '10rem', height: '10rem', borderRadius: "1.2rem" }} />
      <Space h="2rem" />
      <h1>404 Not Found</h1>
      <Link to="">➣ Go back to home page</Link>
    </div>
  </>
}