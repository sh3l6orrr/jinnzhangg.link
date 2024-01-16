import Image from "next/image"
export const metadata = {
  title: "About"
}

export default function About() {

  return <>
    <h1>About me</h1>
    <div className="h-8" />
    <div className='flex flex-col md:flex-row justify-between'>
      <div className=''>
        <p>
          I&apos;m a fourth year student at UCLA majoring in Applied Maths & Statistics. <br /><br />

          My favorite things in life are music and cats. I love the sound of piano, and emotional music.
          I have two cats. Sometimes I like to go for a long walk, and then chill in a coffee shop or a bar. <br /><br />

          I want to do something cool and unique in my life. I am interested in data, ML, and I also want to learn the newest and coolest web technologies. Other than that, I have a dream of opening my own bussiness. Currently, I&apos;m based in Los Angeles. <br /><br />

          <a className="text-blue-500" href="mailto:jinzhang2357@gmail.com">📫 Send me an email</a> <br />
          <a className="text-blue-500" href="https://github.com/sh3l6orrr">🧑‍💻 Visit my Github</a>
        </p>
      </div>
      <div className="h-8 md:w-32"></div>

      <Image className='border rounded-lg shrink-0 overflow-scroll' alt='selfie' src="/selfie2.jpeg" width={350} height={0} />

    </div>
  </>
}