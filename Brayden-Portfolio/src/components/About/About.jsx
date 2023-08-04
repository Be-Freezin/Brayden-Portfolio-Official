import React, { useState } from 'react'
import Aboutbio from './Aboutbio'


import Portrait from '/public/portrait.png'

const About = () => {


	return (
		<div id='about' className='flex flex-col justify-center md:my-48 '>
			<div className='flex flex-col-reverse items-center  justify-center md:flex-row-reverse'>
				<div className='flex flex-col items-center justify-center md:w-1/2    '>
					<h2 className='mx-auto my-5 w-fit px-5 text-center font-lordish tracking-wider text-6xl sm:text-7xl text-skin-accent lg:text-9xl'>
						Get to know me
					</h2>
					<Aboutbio />
				</div>

				<img
					src={Portrait}
					alt=''
					className='mx-auto my-10  w-1/2 md:my-10 md:w-1/4 '
				/>
			</div>
			<div className='mx-auto mt-16 lg:flex lg:h-full lg:w-full lg:flex-row lg:items-center lg:justify-evenly '>
				<div className='flex items-center justify-center bg-skin-bg lg:h-full lg:w-1/2'></div>
			</div>
		</div>
	)
}

export default About
