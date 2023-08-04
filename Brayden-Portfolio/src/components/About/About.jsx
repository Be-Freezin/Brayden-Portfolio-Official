import React, { useState } from 'react'
import Aboutbio from './Aboutbio'

import Portrait from '/public/portrait.png'

const About = () => {
	return (
		<div id='about' className='flex flex-col justify-center md:my-48 '>
			<div className='flex flex-col-reverse items-center  justify-center lg:flex-row-reverse'>
				<div className='flex flex-col items-center justify-center md:w-1/2    '>
					<h2 className='mx-auto my-5 w-fit px-5 text-center font-lordish text-6xl tracking-wider text-skin-accent sm:text-7xl lg:text-9xl'>
						Get to know me
					</h2>
					<Aboutbio />
				</div>

				<img
					src={Portrait}
					alt=''
					className='mx-auto my-10  w-1/2 md:w-1/3 md:my-10 lg:w-1/4 '
				/>
			</div>
			<div className='mx-auto mt-16 lg:flex lg:h-full lg:w-full lg:flex-row lg:items-center lg:justify-evenly '>
				<div className='flex items-center justify-center bg-skin-bg lg:h-full lg:w-1/2'></div>
			</div>
		</div>
	)
}

export default About
