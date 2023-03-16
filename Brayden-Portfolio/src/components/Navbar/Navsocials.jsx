import React from "react"
import Git from "../../assets/icons/git.png"
import Download from "../../assets/icons/download.png"
import Linkedin from "../../assets/icons/linkedin.png"

const Navsocials = () => {
  return (
    <div className="mr-20 hidden lg:flex">
      <a href="#">
        <img className="px-4 hover:animate-pulse" src={Download} alt="download logo" srcSet="" />
      </a>
      <a href="https://github.com/Be-Freezin" target="_blank">
        <img className="px-4 hover:animate-pulse" src={Git} alt="Github Logo" srcSet="" />
      </a>
      <a href="https://www.linkedin.com/in/braydenfriesen/" target="_blank">
        <img className="px-4 hover:animate-pulse" src={Linkedin} alt="Linkedin Logo" srcSet="" />
      </a>
    </div>
  )
}

export default Navsocials
