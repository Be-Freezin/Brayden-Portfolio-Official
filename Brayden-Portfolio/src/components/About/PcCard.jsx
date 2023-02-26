import React from 'react'
import PcIcon from "../../assets/icons/pc.svg"
const PcCard = ({ pcIsShown, setPcIsShown}) => {
  return (
    <div
      className=" relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow "
      onMouseEnter={() => setPcIsShown(true)}
      onMouseLeave={() => setPcIsShown(false)}
    >
      <img className="my-2 w-6" src={PcIcon} alt="" srcset="" />
      <span>PC</span>
      {pcIsShown && (
        <div className="absolute bottom-0 right-0 flex h-96 w-64 flex-col  justify-evenly   rounded-md bg-pchover p-1 text-center shadow-0xl shadow-pchover">
          <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              My Rig
            </h2>
            <ul className="flex h-full flex-col justify-evenly text-lg">
              <li>CPU - Ryzen 5 5600x</li>
              <li>GPU - ROG Strix rtx 2080oc</li>
              <li>RAM - 16gb Corsair Vengeance</li>
              <li>MOBO - ASUS ROG Strix B550-F</li>
              <li>PSU - EVGA 1000w Platinum</li>
              <li>CASE - Fractal Meshify C</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default PcCard