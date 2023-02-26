import React, { useState } from "react"
import GamingCard from './GamingCard'
import BeerCard from './BeerCard'
import PcCard from './PcCard'
import BasketballCard from './BasketballCard'
import MusicCard from './MusicCard'
import AudioCard from './AudioCard'

const InterestsCards = () => {
  const [isShown, setIsShown] = useState(false)
  const [beerIsShown, setBeerIsShown] = useState(false)
  const [pcIsShown, setPcIsShown] = useState(false)
  const [basketballIsShown, setBasketballIsShown] = useState(false)
  const [musicIsShown, setMusicIsShown] = useState(false)
  const [audioIsShown, setAudioIsShown] = useState(false)
  return (
    <div className="  mx-auto  grid w-96  auto-cols-auto auto-rows-auto grid-cols-3 gap-y-5  gap-x-16 p-6 ">
      <GamingCard setIsShown={setIsShown} isShown={isShown} />
      <BeerCard setBeerIsShown={setBeerIsShown} beerIsShown={beerIsShown} />
      <PcCard setPcIsShown={setPcIsShown} pcIsShown={pcIsShown} />
      <BasketballCard setBasketballIsShown={setBasketballIsShown} basketballIsShown={basketballIsShown} />
      <MusicCard setMusicIsShown={setMusicIsShown} musicIsShown={musicIsShown} />
      <AudioCard setAudioIsShown={setAudioIsShown} audioIsShown={audioIsShown} />
    </div>
  )
}

export default InterestsCards