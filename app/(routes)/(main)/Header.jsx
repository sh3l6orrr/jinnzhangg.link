import React from 'react';
import Link from 'next/link';


export default function Header() {

  return <>
    <header className='fixed w-full h-18 bg-white dark:bg-black p-4 px-12'>

      <div >
        <Link href='/' className='flex items-center gap-3'>
          <img style={{ height: "2rem", width: "2rem" }} src="../icon.png" />
          <b>Jin&apos;s vantage</b>
        </Link>
      </div>

    </header>
  </>
}

