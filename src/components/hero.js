import React from "React"
import heroStyles from "./hero.module.css"

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <center>
        <img src="https://source.unsplash.com/random/800x400" alt="" />
      </center>
    </div>
  )
}
