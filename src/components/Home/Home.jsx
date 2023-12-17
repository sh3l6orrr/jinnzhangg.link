import React, { useState } from 'react'
import { Space } from '../../util'
import './home.scss'
import { Link } from 'react-router-dom'

export default function Home({ isMobile }) {
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false)

  function AnnouncementsModal() {
    return <>
      <div className='modal' onClick={() => setShowAnnouncementModal(false)}>
        <div className='modal-content' style={{ maxWidth: "90vw" }}>
          <h2>Announcements</h2>
          <Space h="1rem" />
          <ul>
            <li>Enlaver is live: <a className="highlight" href='https://enclaver.link'>https://enclaver.link</a></li>
            {/* <li>Check out my online snacks store, <a href='https://korai.link'>KORAI</a>.</li> */}
            <li><Link to='sponsor'>Sponsoring me</Link> is much appreciated.</li>
            <li>Welcome to my personal website! <Link to='about'>Read about me</Link>. </li>
          </ul>
        </div>
      </div>
    </>
  }
  return <>
    <div className='vertical align-items-center justify-content-center' style={{ height: isMobile ? "calc(100vh - 16rem)" : "calc(100vh - 12rem)" }}>
      <div className="fire" onClick={() => setShowAnnouncementModal(true)}>
        <div className="fire-left">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-center">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-right">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-bottom">
          <div className="main-fire"></div>
        </div>
      </div>
      <Space h="1.5rem" />
      <h2>Jin&apos;s vantage</h2>
      <div>Click the fire!</div>
      {showAnnouncementModal && <AnnouncementsModal />}
    </div>
  </>
}