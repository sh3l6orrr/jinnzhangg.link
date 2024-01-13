import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return <>
    <div className='md:hidden fixed bottom-0 flex items-center bg-white dark:bg-black w-full justify-between p-4 px-20 z-10'>
      <Link href="/">
        <div className='flex flex-col items-center'>
          🏠
          Home
        </div>
      </Link>
      <Link href="porfolio">
        <div className='flex flex-col items-center'>
          📚
          Porfolio
        </div>
      </Link>
      <Link href="about">
        <div className='flex flex-col items-center'>
          ❓
          About
        </div>
      </Link>
    </div>
  </>
}