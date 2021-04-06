import React from "react"

import * as resumeItemStyles from "./resumeItem.module.css"

export default function ResumeItem() {
  return (
    <article>
      <p>
        <a target="_blank" rel="noreferrer" href="https://www.preis.de/">
          <img class="icon" src="/" />
        </a>
        <div className={resumeItemStyles.wrapper}>
          <div>
            <div>
              <b>Preis.de</b>
            </div>
            <div>
              <b>Frontend Developer</b>
            </div>
          </div>
          <div>
            <div>
              <i>2019 - present</i>
            </div>
            <div>
              <i>Berlin, Germany</i>
            </div>
          </div>
        </div>
      </p>
      <p>
        Description of Job goes here... Something like: Responsible for
        maintaining the xxx website. Additionally
        worked on PHP/MySQL development for web application...
      </p>
      <span className={resumeItemStyles.skill}>Html</span>
      <span className={resumeItemStyles.skill}>SCSS</span>
      <span className={resumeItemStyles.skill}>PHP</span>
      <span className={resumeItemStyles.skill}>Laravel</span>
      <span className={resumeItemStyles.skill}>SQL</span>
      <span className={resumeItemStyles.skill}>Git</span>
      <span className={resumeItemStyles.skill}>GitHub</span>
      <span className={resumeItemStyles.skill}>Sourcetree</span>
      <span className={resumeItemStyles.skill}>Jira</span>
    </article>
  )
}
