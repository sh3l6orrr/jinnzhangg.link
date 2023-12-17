import { Space } from '../../util'
import React from 'react'

export default function About({ isMobile }) {

  return <>
    <h1>About me</h1>
    <div className={isMobile ? "vertical" : "horizontal"}>
      <div style={isMobile ? {} : { width: "60%" }}>
        <p>
          I&apos;m a fourth year student at UCLA majoring in Applied Maths & Statistics. <br /><br />

          My favorite things in life are music and cats. I love the sound of piano, and emotional music.
          I have two cats. Sometimes I like to go for a long walk, and then chill in a coffee shop or a bar. <br /><br />

          I want to do something cool and unique in my life. I am interested in data, ML, and I also want to learn the newest and coolest web technologies. Other than that, I have a dream of opening my own bussiness. Currently, I&apos;m based in Los Angeles. <br /><br />

          📫 Email: <a className="highlight" href="mailto:jinzhang2357@gmail.com">jinzhang2357@gmail.com</a> <br />
          🧑‍💻 Github: <a className="highlight" href="https://github.com/sh3l6orrr">https://github.com/sh3l6orrr</a>
        </p>
      </div>
      {isMobile ? <Space h="1rem" /> : <Space w="1rem" />}
      <div style={isMobile ? {} : { width: "40%" }}>
        <img src="/selfie2.jpeg" style={{ width: "100%", border: "1px", borderRadius: "2rem" }} />
      </div>
    </div>
  </>
}