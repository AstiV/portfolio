import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Resume from "../components/resume"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main>
        <About />
        <Resume />
      </main>
    </Layout>
  )
}
