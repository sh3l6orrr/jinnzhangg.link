import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return <>
    <aside className='p-8 dark:bg-black bg-white rounded-3xl fixed top-24 left-24 w-48 flex-col gap-5 hidden lg:flex border'>
      <Link href="/"> 
          🏠 Home
      </Link>

      <Link href="porfolio"> 
        📚 Porfolio
      </Link>

      <Link href="sponsor" > 
          ❤️ Sponsor
      </Link>

      <Link href="about"> 
          ❓ About
      </Link>
    </aside>
  </>
}