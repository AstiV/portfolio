import React from "react"
import resumeStyles from "./resume.module.css"
import ResumeItem from "./resumeItem"

export default function Resume() {
  return (
    <section className={resumeStyles.resume}>
      <div className={resumeStyles.container}>
        <p className={resumeStyles.tagline}>Résumé</p>
        <p className={resumeStyles.sectiontagline}>Work Experience</p>
        <ResumeItem />
      </div>
    </section>
  )
}
