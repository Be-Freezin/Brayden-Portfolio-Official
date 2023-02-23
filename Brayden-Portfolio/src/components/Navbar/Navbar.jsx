import React, { useState } from "react"
import Navlinks from "./Navlinks"
import Socials from "./Navsocials"
import Hamburger from "../../assets/icons/hamburger.png"
import Close from "../../assets/icons/close.png"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="flex h-6 flex-row-reverse items-center py-6 lg:flex-row lg:justify-between">
      <img
        className="mr-6 lg:hidden "
        src={Hamburger}
        alt=""
        srcset=""
        onClick={() => setToggleMenu(true)}
      />
      <Navlinks toggle={toggleMenu} />
      <Socials />
      {toggleMenu && (
        <div className="fixed top-0 left-0 z-40 mx-auto my-0 h-screen w-screen flex-row-reverse items-center justify-center bg-skin-bg  py-2">
            <Navlinks />
        </div>
      )}
    </div>
  )
}

export default Navbar
