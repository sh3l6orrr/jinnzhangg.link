export const metadata = {
  title: "Jin's vantage",
  description: "Jin's personal website",
}
import './home.scss'
import Link from 'next/link'

export default function Home() {

  return <>
    <div className='h-12' />
    <div className='flex flex-col items-center justify-center'>
      <div className="fire">
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
      <div className='h-8' />
      <h1>Jin&apos;s hompage</h1>
      <div className='h-16' />

      <ul>
        <li>ProllyYes, a web app to visualize probability distributions is live: <a className="text-blue-500" href='https://prolly-yes.com'>https://prolly-yes.com</a></li>
        <li>Enclaver, a minimalist social platform is live: <a className="text-blue-500" href='https://enclaver.link'>https://enclaver.link</a></li>
        <li>Welcome to my personal website! <Link href='about' className="text-blue-500">Read about me</Link>. </li>
      </ul>
    </div>
  </>
}