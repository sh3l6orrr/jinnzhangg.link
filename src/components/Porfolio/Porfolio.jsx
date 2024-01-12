import React from "react";
import { Seperator, Space } from "../../util";

export default function Porfolio() {
  return (
    <>
      <Card data={enclaver} />
      <Space h='1rem' />
      <Card data={prollyYes} />
      <Space h='1rem' />
      <Card data={chordentify} />
      <Space h='1rem' />
      <Card data={robotPathPlanning} />
    </>
  );
}

const enclaver = {
  title: "Enclaver",
  description: "A social media platform for minimalists.",
  link: "https://enclaver.link",
  img: "/enclaver.png",
  tech: "Next.js, Flask, DynamoDB",
};

const prollyYes = {
  title: "Prolly Yes",
  description: "Easy way to visualize probability distributions.",
  link: 'https://prolly-yes.com',
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
      <div
        style={{
          borderRadius: "10px",
          border: "1px solid",
          padding: "1rem",
          display: "flex",
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h3>{data.title}</h3>
          {data.description}<br />
          <code>{data.tech}</code><br />
          {data.link ? (
            <a className="highlight" href={data.link}>
              {data.link}
            </a>
          ) : (
            <i style={{ color: "grey" }}> Under development.</i>
          )}
        </div>
        {data.img && (
          <div >
            <img style={{width: '15rem'}} src={data.img}></img >
          </div>
        )}
      </div>
    </>
  );
}
