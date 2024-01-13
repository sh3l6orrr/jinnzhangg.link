import Link from "next/link"
import React from "react"

export default function NotFound() {
  return <>
    <div className="vertical justify-content-center align-items-center" style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
      <img src="/android-chrome-512x512.png" style={{ width: '10rem', height: '10rem', borderRadius: "1.2rem" }} />
      <div className="h-8" />
      <h1>404 Not Found</h1>
      <Link href="">➣ Go back to home page</Link>
    </div>
  </>
}