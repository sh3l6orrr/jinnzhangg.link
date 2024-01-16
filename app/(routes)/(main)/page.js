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
        <li><a className="text-blue-500" href='https://probability.prolly-yes.com'>ProllyYes</a>, a web app to visualize probability distributions is live.</li>
        <li><a className="text-blue-500" href='https://enclaver.link'>Enclaver</a>, a minimalist social platform is live.</li>
        <li>Welcome to my personal website! <Link href='about' className="text-blue-500">Read about me</Link>. </li>
      </ul>
    </div>
  </>
}