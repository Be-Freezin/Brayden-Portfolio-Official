import React, { useState } from "react"

import Socials from "./Navsocials"
import Hamburger from "../../assets/icons/hamburger.png"
import Close from "../../assets/icons/close.png"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="flex h-6 flex-row-reverse items-center py-6 lg:flex-row lg:justify-between">
      <img
        className="mr-6 cursor-pointer lg:hidden"
        src={Hamburger}
        alt="Hamburger Icon "
        srcset=""
        onClick={() => setToggleMenu(true)}
      />

      <ul className="ml-20  hidden w-1/4   justify-between font-bitechalknormal text-skin-base lg:flex">
        <li className="px-4">About</li>
        <li className="px-4">Skills</li>
        <li className="px-4">Projects</li>
        <li className="px-4">Contact</li>
      </ul>

      <Socials />
      {toggleMenu && (
        <div className="fixed top-0 left-0 z-40 mx-auto my-0 h-1/2 w-screen flex-row-reverse items-center justify-center bg-skin-bg  py-2">
          <div className="flex flex-row-reverse items-center justify-between">
            <img
              className="mr-6 cursor-pointer pt-2"
              src={Close}
              alt=""
              srcset=""
              onClick={() => setToggleMenu(false)}
            />
            
          </div>
          <ul className="mx-auto my-6 flex h-5/6   w-1/4 flex-col items-center justify-evenly font-bitechalknormal text-skin-base">
            <li className="px-4">About</li>
            <li className="px-4">Skills</li>
            <li className="px-4">Projects</li>
            <li className="px-4">Contact</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar