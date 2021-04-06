import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.css"

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <p>Astrid Varga</p>
      <Link to="/graphQlexamples">graphQlexamples</Link>
    </header>
  )
}
