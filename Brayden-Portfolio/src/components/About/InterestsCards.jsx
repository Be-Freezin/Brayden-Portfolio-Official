import React, { useState } from "react"
import GamingCard from './GamingCard'
import BeerCard from './BeerCard'
import PcCard from './PcCard'
import BasketballCard from './BasketballCard'
import MusicCard from './MusicCard'
import AudioCard from './AudioCard'

import interestsData from "../../interestsData"

const InterestsCards = ({cardtitle, item, maintitle, icon}) => {
  const [isShown, setIsShown] = useState(false)
  const [beerIsShown, setBeerIsShown] = useState(false)
  const [pcIsShown, setPcIsShown] = useState(false)
  const [basketballIsShown, setBasketballIsShown] = useState(false)
  const [musicIsShown, setMusicIsShown] = useState(false)
  const [audioIsShown, setAudioIsShown] = useState(false)

return (
 
    <div
      className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img className="my-2 w-7" src={icon} alt="" srcset="" />
      <span>{maintitle}</span>

      {isShown && (
        <div className="absolute bottom-0  z-50 flex h-96 w-64 flex-col justify-evenly rounded-md  bg-beerhover   p-1 text-center shadow-0xl shadow-beerhover lg:bottom-0 lg:left-0">
          <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              {cardtitle}
            </h2>
             {/* <p className="flex h-full flex-col justify-evenly px-4 text-lg">
              {description}
             </p> */}
            <ul className="flex h-full flex-col justify-evenly text-lg">
              <li>{item.item1}</li>
              <li>{item.item2}</li>
              <li>{item.item3}</li>
              <li>{item.item4}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  
)
      }
export default InterestsCards
  // return (
  //   <div className="  mx-auto  grid w-96  auto-cols-auto auto-rows-auto grid-cols-3 gap-y-5  gap-x-16 p-6 ">
  //     <GamingCard setIsShown={setIsShown} isShown={isShown} />
  //     <BeerCard setBeerIsShown={setBeerIsShown} beerIsShown={beerIsShown} />
  //     <PcCard setPcIsShown={setPcIsShown} pcIsShown={pcIsShown} />
  //     <BasketballCard setBasketballIsShown={setBasketballIsShown} basketballIsShown={basketballIsShown} />
  //     <MusicCard setMusicIsShown={setMusicIsShown} musicIsShown={musicIsShown} />
  //     <AudioCard setAudioIsShown={setAudioIsShown} audioIsShown={audioIsShown} />
  //   </div>
  // )
      

