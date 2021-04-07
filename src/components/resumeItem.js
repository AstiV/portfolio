import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as resumeItemStyles from "./resumeItem.module.css"

export default function ResumeItem() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___range], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  alt
                  company
                  location
                  logo
                  range
                  skills
                  title
                  url
                }
                html
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <article key={node.id}>
              <p>{node.frontmatter.company}</p>
              <p className={resumeItemStyles.header}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={node.url}
                  className={resumeItemStyles.logo}
                >
                  <GatsbyImage
                    src={node.frontmatter.logo}
                    width={50}
                    alt={node.frontmatter.alt}
                  />
                </a>
                <div className={resumeItemStyles.wrapper}>
                  <div>
                    <div>
                      <b>{node.frontmatter.company}</b>
                    </div>
                    <div>
                      <b>{node.frontmatter.title}</b>
                    </div>
                  </div>
                  <div>
                    <div>
                      <i>{node.frontmatter.range}</i>
                    </div>
                    <div>
                      <i>{node.frontmatter.location}</i>
                    </div>
                  </div>
                </div>
              </p>
              <p>{node.html}</p>
              {node.frontmatter.skills.map(skill => (
                <span className={resumeItemStyles.skill}>{skill}</span>
              ))}
            </article>
          ))}
        </div>
      )}
    />
  )
}
