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
                    width: 70
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
          const { frontmatter, html } = node
          const {
            alt,
            company,
            location,
            range,
            skills,
            title,
            url,
            featuredImage,
          } = frontmatter
          return (
            <article key={i} className={resumeItemStyles.article}>
              <p className={resumeItemStyles.header}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  className={resumeItemStyles.logo}
                >
                  {!featuredImage.childImageSharp &&
                    featuredImage.extension === "svg" && (
                      <img src={featuredImage.publicURL} alt={alt} width="70" />
                    )}
                  {featuredImage.childImageSharp && (
                    <GatsbyImage
                      image={image}
                      alt={alt}
                      imgClassName="logo-image"
                    />
                  )}
                </a>
                <div className={resumeItemStyles.wrapper}>
                  <div>
                    <div>
                      <b>{company}</b>
                    </div>
                    <div>
                      <b>{title}</b>
                    </div>
                  </div>
                  <div>
                    <div>
                      <i>{range}</i>
                    </div>
                    <div>
                      <i>{location}</i>
                    </div>
                  </div>
                </div>
              </p>
              <div
                className={resumeItemStyles.description}
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
              {skills.map(skill => (
                <span className={resumeItemStyles.skill}>{skill}</span>
              ))}
            </article>
          )
        })}
    </div>
  )
}
