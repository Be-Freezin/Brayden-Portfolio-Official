import React, { useState } from 'react'
import Aboutbio from './Aboutbio'
import InterestsCards from './InterestsCards'
import interestsData from '../../interestsData'
import Portrait from '/public/portrait.png'

const About = () => {
	const interestsElements = interestsData.map((interest) => {
		return (
			<InterestsCards
				cardtitle={interest.cardtitle}
				maintitle={interest.maintitle}
				item={interest.list}
				index={interest.key}
				description={interest.description}
				icon={interest.icon}
			/>
		)
	})

	return (
		<div id='about' className='flex flex-col justify-center  '>
			<div className='flex flex-col-reverse items-center  justify-center md:flex-row-reverse'>
				<div className='flex flex-col items-center justify-center md:w-1/2   '>
					<h2 className='mx-auto my-5 w-fit  text-center font-handcraftChalk text-5xl text-skin-accent lg:text-8xl'>
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
			{/* <h3 className='mx-auto mb-10 font-bitechalknormal text-skin-accent'>
				Somethings i like
			</h3> */}
			<div className='mx-auto grid w-5/6  grid-cols-3  items-center justify-evenly gap-4 pb-16  md:flex   '>
				{interestsElements}
			</div>
		</div>
	)
}

export default About
