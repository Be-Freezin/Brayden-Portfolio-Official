import React, { useState } from "react"


const InterestsCards = ({cardtitle, item, maintitle, icon}) => {
  const [isShown, setIsShown] = useState(false)


return (
  <div
    className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow"
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
  >
    <div className="mx-auto h-full w-full flex flex-col justify-between text-center ">
      <img className="my-2 mx-auto w-6" src={icon} alt="" srcset="" />
      <span className=" my-0  mx-auto ">{maintitle}</span>
    </div>

    {isShown && (
      <div className="absolute bottom-0  z-50 flex h-96 w-64 flex-col justify-evenly rounded-md  bg-beerhover   p-1 text-center shadow-0xl shadow-beerhover lg:bottom-0 lg:left-0">
        <div className="flex h-full  w-full flex-col justify-evenly bg-skin-bg ">
          <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
            {cardtitle}
          </h2>
       
          <ul className="flex h-full flex-col justify-evenly text-lg">
            <li>{item.item1}</li>
            <li>{item.item2}</li>
            <li>{item.item3}</li>
            <li>{item.item4}</li>
            <li>{item.item5}</li>
            <li>{item.item6}</li>
          </ul>
        </div>
      </div>
    )}
  </div>
)
      }
export default InterestsCards

      

