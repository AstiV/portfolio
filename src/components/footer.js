import React from "react"

import * as footerStyles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        <div>© 2021 Astrid Varga</div>
        <span>
          <a target="_blank" href="mailto:astrid.varga@gmx.de" rel="noreferrer">
            Email
          </a>
          &nbsp;//&nbsp;
          <a
            target="_blank" rel="noreferrer"
            href="https://de.linkedin.com/in/astrid-varga"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          &nbsp;//&nbsp;
          <a target="_blank" rel="noreferrer" href="https://github.com/AstiV" rel="noreferrer">
            GitHub
          </a>
        </span>
      </div>
    </footer>
  )
}
