import React from 'react'
import BeerIcon from "../../assets/icons/beer.svg"
const BeerCard = () => {
  return (
    <div className="flex w-20 h-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow">
      <img className="my-2 w-7" src={BeerIcon} alt="" srcset="" />
      <span>Craft Beer</span>
    </div>
  )
}

export default BeerCard