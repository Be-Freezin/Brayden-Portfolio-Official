import React, { useState } from "react"
import Aboutbio from "./Aboutbio"
import InterestsCards from "./InterestsCards"
import interestsData from "../../interestsData"
import Portrait from '/public/portrait.png'

const About = () => {
 
  const interestsElements = interestsData.map((interest) => {
    return (
      <InterestsCards
        cardtitle={interest.cardtitle}
        maintitle={interest.maintitle}
        item={interest.list}
        index={interest.key}
        description={interest.description}
        icon={interest.icon}
      />
    )
  })

  return (
    <div id="about" className="flex  h-screen flex-col justify-center ">
      <h2 className="mx-auto font-handcraftChalk text-5xl text-skin-accent lg:mb-20 lg:text-8xl">
        Get to know me
      </h2>
      <img src={Portrait} alt="" className="w-80 mt-20 mx-auto" />
      <div className="mx-auto mt-16 lg:flex lg:w-full lg:h-full lg:flex-row lg:items-center lg:justify-evenly ">
        <Aboutbio />
        <div className="lg:w-1/2 lg:h-full bg-skin-bg flex justify-center items-center">
          <div className="mx-auto   grid w-96  auto-cols-auto auto-rows-auto grid-cols-3  gap-y-5   gap-x-16 p-6">
          {interestsElements}
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
