import React from 'react'
import GamingIcon from '../../assets/icons/gaming.svg'

const GamingCard = ({ setIsShown , isShown}) => {
  return (
    <div
      className="flex relative h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img className="my-2 w-8" src={GamingIcon} alt="" srcset="" />
      <span>Gaming</span>
      {isShown && <div className="absolute bottom-0 right-0 flex flex-col text-center border-2 border-gamehover justify-evenly  h-96 w-64 bg-skin-bg">
        <h2 className='font-bitechalk text-lg'>
          What im playing
        </h2>
        <ul className='h-full flex flex-col justify-evenly'>
          <li>Elden Ring</li>
          <li>Divinity: Original Sin 2</li>
          <li>Terraria</li>
          <li>NBA 2k23</li>
        </ul>
        </div>}
    </div>
  )
}

export default GamingCard