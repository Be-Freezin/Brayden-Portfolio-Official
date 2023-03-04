import React from 'react'
import GamingIcon from '../../assets/icons/gaming.svg'

const GamingCard = ({ setIsShown , isShown}) => {
  return (
    <div
      className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img className="my-2 w-8" src={GamingIcon} alt="" srcset="" />
      <span>Gaming</span>

      {isShown && (
        <div className="absolute z-50 bottom-0 left-0 lg:bottom-0 lg:right-0 flex h-96 w-64 flex-col  justify-evenly   rounded-md bg-gradient-to-b from-purple-600 via-pink-400 to-yellow-500 p-1 text-center shadow-0xl shadow-mutedglow">
          <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              What im playing
            </h2>
            <ul className="flex h-full flex-col justify-evenly text-lg">
              <li>Elden Ring</li>
              <li>Divinity: Original Sin 2</li>
              <li>Terraria</li>
              <li>NBA 2k23</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default GamingCard