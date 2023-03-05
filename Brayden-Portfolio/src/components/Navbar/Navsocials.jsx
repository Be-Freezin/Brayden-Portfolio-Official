import React from "react"
import Git from "../../assets/icons/git.png"
import Download from "../../assets/icons/download.png"
import Linkedin from "../../assets/icons/linkedin.png"

const Navsocials = () => {
  return (
    <div className="mr-20 hidden lg:flex">
      <a href="#">
        <img className="px-4" src={Download} alt="download logo" srcset="" />
      </a>
      <a href="https://github.com/Be-Freezin" target="_blank">
        <img className="px-4" src={Git} alt="Github Logo" srcset="" />
      </a>
      <a href="https://www.linkedin.com/in/braydenfriesen/" target="_blank">
        <img className="px-4" src={Linkedin} alt="Linkedin Logo" srcset="" />
      </a>
    </div>
  )
}

export default Navsocials
