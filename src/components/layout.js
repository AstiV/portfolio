import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the layout</h2>
      <p>Whoop!</p>
      {children}
      <Footer />
    </div>
  )
}
