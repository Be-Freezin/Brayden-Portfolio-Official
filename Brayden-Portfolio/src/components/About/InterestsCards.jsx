import React, { useState } from "react"

const InterestsCards = ({ cardtitle, item, maintitle, icon, index }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="relative flex h-20 w-20 flex-col items-center justify-center rounded-md p-2 font-bitechalknormal text-sm text-skin-base  shadow-0xl shadow-mutedglow "
      index={index}
      key="id"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="mx-auto flex h-full w-full flex-col justify-between text-center  ">
        <img className="my-2 mx-auto w-6" src={icon} alt="" srcset="" />
        <span className=" my-0  mx-auto ">{maintitle}</span>
      </div>
      {isShown && (
        <div
          index={index}
          className={
            "absolute  z-50 mx-auto flex h-96 w-64   flex-col   justify-evenly rounded-md bg-beerhover p-1   text-center shadow-0xl shadow-beerhover lg:bottom-0 lg:left-0 lg:right-0 lg:translate-x-0 lg:translate-y-0 " +
            (index === 1 || index === 4
              ? "bottom-2/4   right-1/2 translate-x-full translate-y-2/4"
              : index === 3 || index === 6
              ? "bottom-2/4 right-10 translate-x-0 translate-y-2/4"
              : "bottom-2/4 right-0 translate-x-1/3 translate-y-2/4")
          }
        >
          <div className="flex h-full w-full  flex-col justify-evenly bg-skin-bg  ">
            <h2 className="mt-4 border-b-2 pb-4 font-bitechalk text-2xl ">
              {cardtitle}
            </h2>

            <ul className="flex h-full flex-col justify-evenly text-lg ">
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

// WORK ON CONDITIONAL CSS FOR THE CARDS

