import React from "react"
import Arrow from "../../assets/icons/arrowdown.png"
const Headercontent = () => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center ">
      {/* GLOW BOX */}
      <div className="lg:min-h-96 relative mx-auto  mt-64 flex h-72 w-96 flex-col items-center justify-center rounded-2xl border-4 border-bordermain shadow-0xl shadow-borderglow lg:h-full lg:w-3/5 lg:max-w-7xl  ">
        {/* BOTTOM RIGHT CIRCLES */}
        <div className="absolute bottom-10 right-6 h-28 w-28  rounded-full bg-skin-accentdark shadow-0xl shadow-circleredglow lg:right-20 lg:bottom-24 lg:h-80 lg:w-80"></div>
        <div className="absolute bottom-6 right-4 h-6 w-6  rounded-full bg-skin-accent lg:right-20  lg:bottom-16 lg:h-12 lg:w-12"></div>
        {/* END BOTTOM RIGHT CIRCLES */}
        {/* TOP LEFT CIRCLES */}
        <div className="absolute top-14 left-6 h-28 w-28  rounded-full bg-skin-accent shadow-0xl shadow-borderglow lg:left-20 lg:top-24 lg:h-80 lg:w-80"></div>
        <div className="absolute top-8 left-4 h-6 w-6 rounded-full bg-skin-accentdark lg:left-20 lg:top-16 lg:h-12 lg:w-12 "></div>
        {/* END TOP LEFT CIRCLES */}
        <h1 className=" z-20  mt-16 font-handcraftChalk text-4xl text-skin-base lg:text-9xl ">
          Brayden Friesen
        </h1>
        <div className="z-20  mt-6 mr-20 font-bitechalknormal text-skin-base lg:mr-96 lg:text-2xl ">
          <p className="">Front End Developer</p>
          <p className="">Design Tinkerer</p>
        </div>
      </div>
      {/* END GLOW BOX */}
      <img
        className="mx-auto mt-36 w-14 animate-bounce "
        src={Arrow}
        alt=""
        srcSet=""
      />
    </div>
  )
}

//! WORK ON FURTHER RESPONSIVENESS

export default Headercontent
