import React from 'react'
import PcIcon from "../../assets/icons/pc.svg"
const PcCard = () => {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow">
      <img className="my-2 w-6" src={PcIcon} alt="" srcset="" />
      <span>PC</span>
    </div>
  )
}

export default PcCard