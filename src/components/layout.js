import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
