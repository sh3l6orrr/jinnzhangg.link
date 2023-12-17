import React from "react"
import { Seperator, Space } from "../../util"

export default function Porfolio() {
  return <>

    <ul>
      <li>

        <b style={{ fontSize: "larger" }}>Enclaver</b><br />
        <Space h="0.3rem" />
        <Seperator />
        <Space h="0.4rem" />
        Minimalist social media platform for all kinds of ideas to thrive.
        <Space h="0.3rem" />
        <a className="highlight" href='https://enclaver.link'>https://enclaver.link</a>
        <Space h="0.3rem" />
        <code>React, Flask, DynamoDB</code>
      </li>
      <li>
        <b style={{ fontSize: "larger" }}>Probably Yes</b>
        <Space h="0.4rem" />
        <Seperator />
        <Space h="0.3rem" />
        Easy way to visualize probability distributions.
        
        <Space h="0.3rem" />
        <code>React, Flask, AWS Lambda, Altair</code>
        <Space h="0.3rem" />
        <i style={{ color: "grey" }}>Under development.</i>
      </li>
      <li>
        <b style={{ fontSize: "larger" }}>Chordentify</b>
        <Space h="0.4rem" />
        <Seperator />
        <Space h="0.3rem" />
        Recoginize and feel musical chords anytime.
        <Space h="0.3rem" />
        <i style={{ color: "grey" }}> Under development.</i>
      </li>
    </ul>

  </>
}