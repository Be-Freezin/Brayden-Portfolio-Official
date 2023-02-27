import React, { useState } from "react"
import Aboutbio from "./Aboutbio"
import InterestsCards from "./InterestsCards"
import interestsData from "../../interestsData"

const About = () => {

    

  return (
    <div id="about" className="flex  h-screen flex-col justify-center ">
      <h2 className="mx-auto lg:mb-20 font-handcraftChalk text-5xl text-skin-accent lg:text-8xl">
        Get to know me
      </h2>
      <div className="mx-auto mt-16 lg:items-center lg:justify-evenly lg:flex lg:w-5/6 lg:flex-row">
        <Aboutbio />
        <InterestsCards />
      </div>
    </div>
  )
}

export default About
