import Image from "next/image";
export const metadata = {
  title: "Porfolio"
}

export default function Porfolio() {
  return <div>
    <h1>Porfolio</h1>
    <div className="h-8" />
    <Card data={enclaver} />
    <div className="h-4" />
    <Card data={prollyYes} />
    <div className="h-4" />
    <Card data={chordentify} />
    <div className="h-4" />
    <Card data={robotPathPlanning} />
  </div>

}

const enclaver = {
  title: "Enclaver",
  description: "A social media platform for minimalists.",
  link: "https://enclaver.link",
  img: "/enclaver.png",
  tech: "Next.js, Flask, DynamoDB",
};

const prollyYes = {
  title: "ProllyYes",
  description: "Easy way to visualize probability distributions.",
  link: 'https://probability.prolly-yes.com',
  img: '/prolly.png',
  tech: "React, Flask, AWS Lambda, Altair",
}

const chordentify = {
  title: 'Chordentify',
  description: 'Recoginize and feel musical chords.',
  tech: 'Pending'
}

const robotPathPlanning = {
  title: 'Robot Path Planning',
  description: 'An algorithm to optimize paths for robots with Euler-Lagrange Equations.',
  tech: 'numpy, scipy, matplotlib',
  link: 'https://github.com/sh3l6orrr/path-optimzation'
}

function Card({ data }) {
  return (
    <>
      <div className="p-4 flex justify-between items-center rounded-xl border">
        <div>
          <h3>{data.title}</h3>
          {data.description}<br />
          <code className="text-sm">{data.tech}</code><br />
          {data.link ? (
            <a className="text-blue-500" href={data.link}>
              {data.link}
            </a>
          ) : (
            <i style={{ color: "grey" }}> Under development.</i>
          )}
        </div>
        {data.img && (
          <div >
            <Image alt='' height={0} width={350} src={data.img}/>
          </div>
        )}
      </div>
    </>
  );
}
