import React, { useState } from "react"
import Aboutbio from "./Aboutbio"
import InterestsCards from "./InterestsCards"
import interestsData from "../../interestsData"

const About = () => {
const [isShown, setIsShown] = useState(false)
      const interestsElements = interestsData.map(interest => {
        return <InterestsCards cardtitle={interest.cardtitle} maintitle={interest.maintitle} item={interest.list} index={interest.key} description={interest.description} icon={interest.icon}  />
      })

  return (
    <div id="about" className="flex  h-screen flex-col justify-center ">
      <h2 className="mx-auto lg:mb-20 font-handcraftChalk text-5xl text-skin-accent lg:text-8xl">
        Get to know me
      </h2>
      <div className="mx-auto mt-16 lg:items-center lg:justify-evenly lg:flex lg:w-5/6 lg:flex-row">
        <Aboutbio />
        <div className="mx-auto  grid w-96  auto-cols-auto auto-rows-auto grid-cols-3  gap-y-5  gap-x-16 p-6">

        {interestsElements}
        </div>
        
      </div>
    </div>
  )
}
// MAP OVER CARDS
export default About
