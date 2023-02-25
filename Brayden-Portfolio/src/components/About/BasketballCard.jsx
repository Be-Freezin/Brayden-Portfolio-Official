import React from 'react'
import BasketballIcon from "../../assets/icons/basketball.svg"
const BasketballCard = () => {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow">
      <img className="my-2 w-6" src={BasketballIcon} alt="" srcset="" />
      <span>Basketball</span>
    </div>
  )
}

export default BasketballCard