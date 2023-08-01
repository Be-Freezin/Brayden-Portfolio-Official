import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({
	name,
	languages,
	site,
	siteicon,
	repoicon,
	code,
	index,
	projectimg,
	projectDescription,
}) => {
	const [activeTab, setActiveTab] = useState('description')

	const Underline = ({ left }) => (
		<motion.div
			className={`absolute bottom-0 h-0.5 w-1/3 bg-skin-accent ${left}  bottom-[-1px] z-10`}
			layoutId='underline'
		/>
	)

	return (
		<div className='mx-6  font-bitechalknormal text-sm text-skin-base lg:w-1/2 lg:text-xl'>
			<div className='  mt-8 rounded-lg bg-skin-muted p-6' key={index}>
				<span className='   px-2 py-2'>{name}</span>
				<img
					className='mx-auto w-full rounded-lg border-8 border-mainblack'
					src={projectimg}
					alt=''
					srcSet=''
				/>
				<div className='mt-4 rounded-lg border-2 border-mainblack '>
					<div className='relative flex flex-row justify-evenly rounded-lg  text-2xl'>
						<motion.button
							onClick={() => setActiveTab('description')}
							className='w-full rounded-t-lg py-2 hover:bg-mutedtext hover:text-skin-inverted'
						>
							Description
						</motion.button>
						<button
							onClick={() => setActiveTab('techStack')}
							className='w-full rounded-t-lg hover:bg-mutedtext hover:text-skin-inverted'
						>
							TechStack
						</button>
						<button
							onClick={() => setActiveTab('links')}
							className='w-full rounded-t-lg hover:bg-mutedtext hover:text-skin-inverted'
						>
							Links
						</button>
						<AnimatePresence wait>
							{activeTab === 'description' && <Underline left='left-0' />}
							{activeTab === 'techStack' && <Underline left='left-38' />}
							{activeTab === 'links' && <Underline left='left-2/3' />}
						</AnimatePresence>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						{activeTab === 'description' && (
							<p className='p-4'>{projectDescription}</p>
						)}
						{activeTab === 'techStack' && <p className='p-4'>{languages}</p>}
						{activeTab === 'links' && (
							<div className='flex flex-row p-4'>
								<a className='' target='_blank' href={site}>
									<img src={siteicon} alt='' srcSet='' />
								</a>
								<a className='' target='_blank' href={code}>
									<img className='w-' src={repoicon} alt='' srcSet='' />
								</a>
							</div>
						)}
					</motion.div>
				</div>

				{/* <div className='mt-4 flex items-center justify-between text-center lg:w-full'>
					<span className='   px-2 py-2'>{name}</span>
					<span className=' px-2 py-1'>{languages}</span>
					<a className='  p-2' target='_blank' href={site}>
						<img src={siteicon} alt='' srcSet='' />
					</a>
					<a className='  p-2 ' target='_blank' href={code}>
						<img className='w-' src={repoicon} alt='' srcSet='' />
					</a>
				</div> */}
			</div>
		</div>
	)
}

export default ProjectCard
