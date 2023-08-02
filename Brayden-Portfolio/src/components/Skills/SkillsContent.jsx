import React from 'react'
import vscode from '../../assets/site-icons/vscode.svg'
import tailwind from '../../assets/site-icons/tailwind.svg'
import react from '../../assets/site-icons/react.svg'
import javascript from '../../assets/site-icons/javascript.svg'
import html from '../../assets/site-icons/html.svg'
import gitcircle from '../../assets/site-icons/git-circle.svg'
import figma from '../../assets/site-icons/figma.svg'
import css from '../../assets/site-icons/css.svg'
import next from '../../assets/site-icons/next.svg'
import firebase from '../../assets/site-icons/firebase.svg'

const skills = [
	{ image: html, name: 'HTML' },
	{ image: css, name: 'CSS' },
	{ image: javascript, name: 'Javascript' },
	{ image: react, name: 'React' },
	{ image: next, name: 'Next.js' },
	{ image: tailwind, name: 'Tailwind' },
	{ image: firebase, name: 'Firebase' },
	{ image: figma, name: 'Figma' },
	{ image: gitcircle, name: 'Git' },
	{ image: vscode, name: 'VSCode' },
]

const SkillsContent = () => {
	return (
		<div className=' flex flex-col  items-center justify-center   md:h-full  '>
			<h3 className='my-10 w-full text-center font-handcraftChalk text-5xl text-skin-accent lg:text-9xl '>
				Things im good at
			</h3>
			<div className='grid grid-cols-2 md:grid-cols-5 grid-rows-2 place-content-center content-center gap-8 px-8 md:gap-16 my-10   '>
				{skills.map((skill, index) => (
					<div
						key={index}
						className='content-center mx-auto flex h-full w-16 flex-col items-center justify-between  p-2 font-bitechalknormal text-xl text-skin-base md:h-full md:w-36  md:text-xl lg:text-2xl '
					>
						<div className=' '>
							<img
								className='my-2 mx-auto w-full md:w-1/2 lg:w-3/4'
								src={skill.image}
								alt=''
								srcSet=''
							/>
						</div>
						<span className=''>{skill.name}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default SkillsContent
