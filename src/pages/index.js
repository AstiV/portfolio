import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <main>
        <About />
      </main>
    </Layout>
  )
}
