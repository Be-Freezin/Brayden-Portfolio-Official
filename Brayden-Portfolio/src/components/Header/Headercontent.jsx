import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import scythe from '../../../public/scythe.svg'
const Headercontent = () => {

	const interests = ['Design Tinkerer','Metal Head','Fantasy Nerd','Gamer','Horror Movie Junkie','Traveler','Optimist' ]
	const [currentInterest, setCurrentInterest] = useState(interests[0])
	const indexRef = useRef(0)
	
	useEffect(() => {
		const intervalID = setInterval(() =>{
			indexRef.current = (indexRef.current + 1) % interests.length
			setCurrentInterest(interests[indexRef.current])
		}, 3000)
		return () => clearInterval(intervalID)
	},[interests])

  return (
		<div className='mx-auto  flex flex-col  items-center justify-center tracking-wider '>
			<div className='   md:my-48  flex  w-full  flex-col items-center justify-center   md:h-5/6 lg:w-fit text-skin-base   '>
				
				<h1 className='   my-10 text-center font-lordish text-8xl text-skin-accent sm:text-9xl lg:text-10xl  '>
					Brayden Friesen
				</h1>
				<div className='font-paragraph  flex flex-col justify-center items-center text-xl sm:text-2xl text-skin-base text-left lg:text-3xl tracking-wide md:w-1/2  '>
					<p className='w-full'> I'm a Front End Developer</p>
					<div className='flex flex-col justify-center text-left overflow-hidden    w-full  '>
						<div className='flex  items-center justify-start  '>
							<p className='mr-2'>and a</p>
							<div className='md:w-2/3 text-left'>
					 			<motion.div
								 	className='text-skin-accent'
									key={currentInterest} 
									initial={{ opacity: 0, y: '100%' }} 
									animate={{ opacity: 1, y: '0%' }} 
									exit={{ opacity: 0, y: '100%' }} 
									transition={{ duration: 2 }}  >{currentInterest}
								</motion.div>
								</div>
							</div>
					</div>
				</div>
				<img
					src={scythe}
					alt=''
					className=' w-2/3 lg:w-1/2 my-10'
				/>
			</div>
	
		</div>
	)
}



export default Headercontent
