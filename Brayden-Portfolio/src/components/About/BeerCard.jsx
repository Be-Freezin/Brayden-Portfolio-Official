import React from 'react'
import BeerIcon from "../../assets/icons/beer.svg"
const BeerCard = ({ setBeerIsShown, beerIsShown }) => {
  return (
    <div
      className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
      onMouseEnter={() => setBeerIsShown(true)}
      onMouseLeave={() => setBeerIsShown(false)}
    >
      <img className="my-2 w-7" src={BeerIcon} alt="" srcset="" />
      <span>Craft Beer</span>

      {beerIsShown && (
        <div className="absolute bottom-0 right-0 flex h-96 w-64 flex-col  justify-evenly   rounded-md bg-beerhover p-1 text-center shadow-0xl shadow-beerhover">
          <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              Favorite Breweries
            </h2>
            <ul className="flex h-full flex-col justify-evenly text-lg">
              <li>3 Floyds - Munster-IN</li>
              <li>Kilter - Winnipeg, Canada</li>
              <li>Revolution - Chicago, IL</li>
              <li>Off Color Brewing - Chicago, IL</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default BeerCard