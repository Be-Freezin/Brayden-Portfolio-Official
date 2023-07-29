import React from 'react'
import vscode from '../../assets/site-icons/vscode.png'
import tailwind from '../../assets/site-icons/tailwind.png'
import react from '../../assets/site-icons/react.png'
import javascript from '../../assets/site-icons/javascript.png' 
import html from '../../assets/site-icons/html.png'
import gitcircle from '../../assets/site-icons/git-circle.png'
import figma from '../../assets/site-icons/figma.png'
import css from '../../assets/site-icons/css.png'

const SkillsContent = () => {
  return (
		<div className='relative flex  h-4/6 items-center justify-center   md:h-full md:w-1/2 '>
			<h3 className='mt-10 w-1/2 text-center font-handcraftChalk text-5xl text-skin-accent lg:text-9xl '>
				Things im good at
			</h3>
			<div className='absolute top-52 left-14 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base md:h-24 md:w-24 md:text-2xl lg:top-48 lg:left-28'>
				<img className='my-2 mx-auto w-5 lg:w-7' src={html} alt='' srcSet='' />
				<span className=''>HTML</span>
			</div>
			<div className='absolute top-36 flex   h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain  p-2 font-bitechalknormal text-lg text-skin-base md:text-2xl md:text-2xl lg:top-10 lg:h-24 lg:w-24'>
				<img className='my-2 mx-auto w-5 lg:w-7' src={css} alt='' srcSet='' />
				<span className=''>CSS</span>
			</div>
			<div className='absolute top-52 right-14 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base md:text-2xl lg:top-48 lg:right-28 lg:h-24 lg:w-24'>
				<img
					className='my-2 mx-auto w-5 lg:w-7'
					src={javascript}
					alt=''
					srcSet=''
				/>
				<span className=''>Javascript</span>
			</div>
			<div className='absolute right-0 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2  border-bordermain p-2 font-bitechalknormal text-lg text-skin-base md:text-2xl lg:h-24 lg:w-24'>
				<img className='my-2 mx-auto w-5 lg:w-7' src={react} alt='' srcSet='' />
				<span className=''>React</span>
			</div>
			<div className='absolute bottom-52 right-14 flex  h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base md:text-2xl lg:bottom-48 lg:right-28 lg:h-24 lg:w-24'>
				<img
					className='my-2 mx-auto w-5 lg:w-7'
					src={tailwind}
					alt=''
					srcSet=''
				/>
				<span className=''>Tailwind</span>
			</div>
			<div className='absolute bottom-36 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain  p-2 font-bitechalknormal text-lg text-skin-base md:text-2xl lg:bottom-10 lg:h-24 lg:w-24'>
				<img
					className='my-2 mx-auto w-5 lg:w-7'
					src={gitcircle}
					alt=''
					srcSet=''
				/>
				<span className=''>Git</span>
			</div>
			<div className='absolute bottom-52 left-14 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2 border-bordermain p-2  font-bitechalknormal text-lg text-skin-base md:text-2xl lg:bottom-48 lg:left-28 lg:h-24 lg:w-24'>
				<img className='my-2 mx-auto w-5 lg:w-7' src={figma} alt='' srcSet='' />
				<span className=''>Figma</span>
			</div>
			<div className='absolute left-0 flex h-16 w-16 flex-col items-center justify-center rounded-md border-b-2  border-bordermain p-2 font-bitechalknormal text-lg text-skin-base md:text-2xl lg:h-24 lg:w-24'>
				<img
					className='my-2 mx-auto w-5 lg:w-7'
					src={vscode}
					alt=''
					srcSet=''
				/>
				<span className=''>VSCode</span>
			</div>
		</div>
	)
}

export default SkillsContent