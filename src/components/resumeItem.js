import React from "react"

import * as resumeItemStyles from "./resumeItem.module.css"

export default function ResumeItem() {
  return (
    <article>
      <p>
        <a target="_blank" rel="noreferrer" href="http://usc.edu">
          <img class="icon" src="img/companies/usc2.jpg" />
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
        maintaining the USC Roski School of Fine Arts website. Additionally
        worked on design and PHP/MySQL development for a new equipment rental
        web application used by all departments within the art school.
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
