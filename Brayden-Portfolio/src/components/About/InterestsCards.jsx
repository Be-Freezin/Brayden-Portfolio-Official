import React, { useState } from "react"
import GamingCard from './GamingCard'
import BeerCard from './BeerCard'
import PcCard from './PcCard'
import BasketballCard from './BasketballCard'
import MusicCard from './MusicCard'
import CodeCard from './CodeCard'

const InterestsCards = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <div className="  p-6  mx-auto grid  w-96 grid-cols-3 auto-cols-auto auto-rows-auto  gap-y-5 gap-x-16 ">
      <GamingCard setIsShown={setIsShown} isShown={isShown} />
      <BeerCard />
      <PcCard />
      <BasketballCard />
      <MusicCard />
      <CodeCard />
    </div>
  )
}

export default InterestsCards