import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as resumeItemStyles from "./resumeItem.module.css"

export default function ResumeItem() {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        sort: { fields: frontmatter___range, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              alt
              company
              location
              range
              skills
              title
              url
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 50
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
                extension
                publicURL
              }
            }
            html
          }
        }
      }
    }
  `)

  const jobsData = data.jobs.edges

  return (
    <div>
      {jobsData &&
        jobsData.map(({ node }, i) => {
          const image = getImage(node.frontmatter.featuredImage)
          return (
            <article key={i} className={resumeItemStyles.article}>
              <p className={resumeItemStyles.header}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={node.frontmatter.url}
                  className={resumeItemStyles.logo}
                >
                  {!node.frontmatter.featuredImage.childImageSharp &&
                    node.frontmatter.featuredImage.extension === "svg" && (
                      <img
                        src={node.frontmatter.featuredImage.publicURL}
                        alt={node.frontmatter.alt}
                        width="50"
                      />
                    )}
                  {node.frontmatter.featuredImage.childImageSharp && (
                    <GatsbyImage image={image} alt={node.frontmatter.alt} />
                  )}
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
          )
        })}
    </div>
  )
}
