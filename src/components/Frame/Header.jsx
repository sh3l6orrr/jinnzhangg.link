import React  from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import { Space  } from '../../util';


export default function Header() {

  return <>
    <div id="header">
      <Space w="var(--space-desktop)" />
      <div className="horizontal align-items-center" style={{ width: "100%" }}>
        <Link to='/' className='horizontal align-items-center'>
          <img style={{ height: "2rem", width: "2rem" }} src="/android-chrome-192x192.png" />
          <Space w="0.6rem" />
          <b>Jin&apos;s vantage</b>
        </Link>
      </div>
    </div>
  </>
}

