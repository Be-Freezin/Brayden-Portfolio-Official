import React from 'react'
import BasketballIcon from "../../assets/icons/basketball.svg"
const BasketballCard = ({ basketballIsShown, setBasketballIsShown }) => {
  return (
    <div
      className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
      onMouseEnter={() => setBasketballIsShown(true)}
      onMouseLeave={() => setBasketballIsShown(false)}
    >
      <img className="my-2 w-6" src={BasketballIcon} alt="" srcset="" />
      <span>Basketball</span>

      {basketballIsShown && (
        <div className="absolute bottom-0 left-0 z-50 flex h-96 w-64 flex-col justify-evenly rounded-md  bg-gradient-to-b   from-red-600 to-blue-500 p-1  text-center shadow-0xl shadow-mutedglow lg:bottom-0 lg:right-0">
          <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              Favorite Teams
            </h2>
            <ul className="flex h-full flex-col justify-evenly text-lg">
              <li>Philadelphia 76ers</li>
              <li>Boston Celtics</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default BasketballCard