import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

import scythe from '../../../public/scythe.svg'
const Headercontent = () => {
	const interests = [
		'Design Tinkerer',
		'Metal Head',
		'Fantasy Nerd',
		'Gamer',
		'Horror Movie Junkie',
		'Traveler',
		'Optimist',
	]
	const [currentInterest, setCurrentInterest] = useState(interests[0])
	const indexRef = useRef(0)

	useEffect(() => {
		const intervalID = setInterval(() => {
			indexRef.current = (indexRef.current + 1) % interests.length
			setCurrentInterest(interests[indexRef.current])
		}, 3000)
		return () => clearInterval(intervalID)
	}, [interests])

	return (
		<div className='mx-auto  flex flex-col  items-center justify-center tracking-wider '>
			<div className='   flex  w-full  flex-col  items-center justify-center text-skin-base   md:my-48 md:h-5/6 lg:w-fit   '>
				<h1 className='   my-10 text-center font-lordish text-8xl text-skin-accent sm:text-9xl lg:text-10xl  '>
					Brayden Friesen
				</h1>
				<div className='flex  flex-col items-center justify-center text-left font-paragraph text-xl tracking-wide text-skin-base sm:text-2xl md:w-1/2 lg:text-3xl  '>
					<p className='w-full'> I'm a Front End Developer</p>
					<div className='flex w-full flex-col justify-center overflow-hidden    text-left  '>
						<div className='flex  items-center justify-start  '>
							<p className='mr-2'>and a</p>
							<div className='text-left md:w-2/3'>
								<motion.div
									className='text-skin-accent'
									key={currentInterest}
									initial={{ opacity: 0, y: '100%' }}
									animate={{ opacity: 1, y: '0%' }}
									exit={{ opacity: 0, y: '100%' }}
									transition={{ duration: 2 }}
								>
									{currentInterest}
								</motion.div>
							</div>
						</div>
					</div>
				</div>
				<img src={scythe} alt='' className=' my-10 w-2/3 lg:w-1/2' />
			</div>
		</div>
	)
}

export default Headercontent
