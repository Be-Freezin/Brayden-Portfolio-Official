import React from "react"
import Git from "../../assets/icons/git.png"
import Download from "../../assets/icons/download.png"
import Linkedin from "../../assets/icons/linkedin.png"

const Navsocials = () => {
  return (
    <div className="mr-20 hidden lg:flex">
      <img className="px-4" src={Download} alt="download logo" srcset="" />
      <img className="px-4" src={Git} alt="Github Logo" srcset="" />
      <img className="px-4" src={Linkedin} alt="Linkedin Logo" srcset="" />
    </div>
  )
}

export default Navsocials
