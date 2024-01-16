import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return <>
    <div className='lg:hidden fixed bottom-0 flex items-center bg-white dark:bg-black w-full justify-between px-8 p-4 z-10 border-t'>
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