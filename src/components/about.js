import React from "react"

import aboutStyles from "./about.module.css"

export default function About() {
  return (
    <div className={aboutStyles.about}>
      <p className={aboutStyles.me}>
        Hello, world. I am a Full-Stack Web developer.
      </p>
      <div className={aboutStyles.consolewrapper}>
        <div className={aboutStyles.console}></div>
      </div>
    </div>
  )
}
