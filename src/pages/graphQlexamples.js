import React from "react"
import Layout from "../components/layout"
import Datahead from "../graphQlexamples/datahead"
import * as exampleStyles from "./graphQlexamples.module.css"

// Page Query
import { graphql } from "gatsby"

export default function GraphQlexamples({ data }) {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <main className={exampleStyles.main}>
        <Datahead />
        <h5>author: {author}!!</h5>
      </main>
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
