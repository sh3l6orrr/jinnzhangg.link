import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {

  return <>
    <header className='fixed w-full h-14 top-0 bg-white dark:bg-black p-4 px-8 border-b'>

      <div className='flex'>
        <Link href='/' className='flex items-center gap-3'>
          <Image height={30} width={30} alt='' src="/icon.png" />
          <b>Jin&apos;s vantage</b>
        </Link>
        <div className='grow' />
      </div>

    </header>
  </>
}

