import React from "react"
import OrangeBall from "../../../public/waveball orange.svg"
import Yellowball from '../../../public/waveball yellow.svg'
const Headercontent = () => {
  return (
		<div className='mx-auto  flex w-full flex-col items-center justify-center lg:h-screen '>
			{/* GLOW BOX */}
			<div className='lg:min-h-96 relative mx-auto  mt-64 flex h-72 w-full  flex-col items-center justify-center   lg:h-full lg:w-3/5   '>
				{/* BOTTOM RIGHT CIRCLES */}
				{/* <div className="absolute bottom-10 right-6 h-28 w-28  rounded-full bg-skin-accentdark shadow-0xl shadow-circleredglow lg:right-20 lg:bottom-24 lg:h-80 lg:w-80"></div> */}
				<img
					src={OrangeBall}
					alt=''
					className='absolute bottom-20 right-6 w-1/4 lg:w-1/3'
				/>
				{/* <div className='absolute bottom-6 right-4 h-6 w-6  rounded-full bg-skin-accent lg:right-20  lg:bottom-16 lg:h-12 lg:w-12'></div> */}

				{/* END BOTTOM RIGHT CIRCLES */}
				{/* TOP LEFT CIRCLES */}
				{/* <div className='absolute top-14 left-6 h-28 w-28  rounded-full bg-skin-accent shadow-0xl shadow-borderglow lg:left-20 lg:top-24 lg:h-80 lg:w-80'></div> */}
				<img
					src={Yellowball}
					alt=''
					className='absolute top-20 left-6 w-1/4 lg:w-1/3'
				/>
				{/* <div className='absolute top-8 left-4 h-6 w-6 rounded-full bg-skin-accentdark lg:left-20 lg:top-16 lg:h-12 lg:w-12 '></div> */}
				{/* END TOP LEFT CIRCLES */}
				<h1 className=' z-20  mt-16 text-center font-handcraftChalk text-4xl text-skin-base lg:text-9xl  '>
					Brayden Friesen
				</h1>
				<div className='z-20  mt-6 mr-20 font-bitechalknormal text-skin-base lg:mr-96 lg:text-2xl '>
					<p className=''>Front End Developer</p>
					<p className=''>Design Tinkerer</p>
				</div>
			</div>
			{/* END GLOW BOX */}
		</div>
	)
}

//! WORK ON FURTHER RESPONSIVENESS

export default Headercontent
