import React from "react"

import aboutStyles from "./about.module.css"

export default function About() {
  return (
    <section className={aboutStyles.about}>
      <p className={aboutStyles.me}>
        Hello, world. I am a Full-Stack Web developer.
      </p>
      <article className={aboutStyles.consolewrapper}>
        <div className={aboutStyles.console}>
          <span className={aboutStyles.input}> {">"} Astrid.homeBase</span>
          <span className={aboutStyles.output}> {"=>"} "Berlin, Germany" </span>
          <span className={aboutStyles.input}>
            {" "}
            {">"} Astrid.workExperience.current
          </span>
          <span className={aboutStyles.output}>
            {" "}
            {"=>"} Current Work
            <div className={aboutStyles.details}>
              <span>company: "Preis.de"</span>
              <span>role: "Frontend Developer"</span>
              <span>startDate: "Feb 2019"</span>
            </div>
          </span>
          <span className={aboutStyles.input}> {">"} Astrid.interests</span>
          <span className={aboutStyles.output}>
            {"=>"} ["my dog Bibi", "coffee", "code", "scuba diving", "ocean",
            "forest"]
          </span>
          <span className={aboutStyles.input}> {">"} Astrid.education.dev</span>
          <span className={aboutStyles.output}>
            {"=>"} Web Development Bootcamp
            <div className={aboutStyles.details}>
              <span>company: "Ironhack"</span>
              <span>startDate: "July 2018"</span>
              <span>endDate: "Sep 2018"</span>
            </div>
          </span>
          <br />
          <span className={aboutStyles.output}>
            {"=>"} CODE University of Applied Sciences
            <div className={aboutStyles.details}>
              <span>major: "Software Engineering"</span>
              <span>startDate: "Oct 2017"</span>
              <span>endDate: "Dec 2020"</span>
            </div>
          </span>
          <span className={aboutStyles.input}> {">"} Astrid.resume</span>
          <span className={aboutStyles.output}>
            {"=>"} "
            <a
              target="_blank"
              className={aboutStyles.link}
              href="astridvarga.pdf"
            >
              astridvarga.pdf
            </a>
            "
          </span>
          <span className={aboutStyles.input}> {">"} Astrid.email</span>
          <span className={aboutStyles.output}>
            {"=>"} "
            <a
              target="_blank"
              className={aboutStyles.link}
              href="mailto:astrid.varga@gmx.de"
            >
              astrid.varga@gmx.de
            </a>
            "
          </span>
        </div>
      </article>
    </section>
  )
}
