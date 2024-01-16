import Image from "next/image";
export const metadata = {
  title: "Porfolio"
}

export default function Porfolio() {
  return <div>
    <h1>Porfolio</h1>
    <div className="h-8" />
    <div className="flex flex-col gap-4">
      {
        items.map(item =>
          <Card key={item.title} title={item.title} description={item.description} tech={item.tech} link={item.link} img={item.img} />
        )
      }
    </div>
  </div>

}

const items = [
  {
    title: "ProllyYes",
    description: "Easy way to visualize probability distributions.",
    link: 'https://probability.prolly-yes.com',
    img: '/prolly.png',
    tech: "React, Flask, AWS Lambda, Altair",
  },
  {
    title: "Enclaver",
    description: "A social media platform for minimalists.",
    link: "https://enclaver.link",
    img: "/enclaver.png",
    tech: "Next.js, Flask, DynamoDB",
  },
  {
    title: 'Chordentify',
    description: 'Recoginize and feel musical chords.',
    tech: 'Pending'
  },
  {
    title: 'Robot Path Planning',
    description: 'An algorithm to optimize paths for robots with Euler-Lagrange Equations.',
    tech: 'numpy, scipy, matplotlib',
    link: 'https://github.com/sh3l6orrr/path-optimzation'
  }


]

function Card({ title, description, tech, link, img }) {
  return (
    <>
      <div className="p-4 flex lg:justify-between lg:items-center rounded-xl border flex-col lg:flex-row gap-4">
        <div>
          <h3>{title}</h3>
          {description}<br />
          <code className="text-sm">{tech}</code><br />
          {link ? (
            <a className="text-blue-500" href={link}>
              {link}
            </a>
          ) : (
            <i style={{ color: "grey" }}> Under development.</i>
          )}
        </div>
        {img && (
          <Image className='shrink-0' alt='' height={0} width={330} src={img} />
        )}
      </div>
    </>
  );
}
