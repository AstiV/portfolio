import React from "React"
import { StaticImage } from "gatsby-plugin-image"
import * as heroStyles from "./hero.module.css"

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <center>
        <StaticImage
          src="../images/my-main-assets.png"
          alt="My main assets"
          placeholder="blurred"
          width={1200}
        />
      </center>
    </div>
  )
}
