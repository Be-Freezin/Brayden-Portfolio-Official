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
			className={`absolute bottom-0 h-[1px] w-1/3 bg-skin-accent ${left}  bottom-[-1px] `}
			layoutId='underline'
		/>
	)



	return (
		<div className='mx-6  font-bitechalknormal text-sm text-skin-base lg:w-1/2 lg:text-xl'>
			<div className='  mt-8 rounded-lg bg-skin-muted p-6' key={index}>
				<span className='   px-2  text-xl md:text-3xl'>{name}</span>
				<img
					className='mx-auto my-2 w-full rounded-lg border-8 border-mainblack'
					src={projectimg}
					alt=''
					srcSet=''
				/>
				<div className='mt-4 rounded-lg border-2 border-mainblack '>
					<div className='relative flex flex-row justify-evenly rounded-lg text-lg  md:text-2xl'>
						<motion.button
							onClick={() => setActiveTab('description')}
							className='w-full rounded-t-lg py-2 hover:bg-mutedtext hover:text-skin-inverted'
						>
							Description
						</motion.button>
						<button
							onClick={() => setActiveTab('techStack')}
							className='w-full rounded-t-lg hover:bg-mutedtext hover:text-skin-inverted active:text-skin-inverted active:bg-mutedtext '
						>
							TechStack
						</button>
						<button
							onClick={() => setActiveTab('links')}
							className='w-full rounded-t-lg hover:bg-mutedtext hover:text-skin-inverted'
						>
							Links
						</button>
						{/* <AnimatePresence wait> */}
						{activeTab === 'description' && <Underline left='left-0' />}
						{activeTab === 'techStack' && <Underline left='left-38' />}
						{activeTab === 'links' && <Underline left='left-2/3' />}
						{/* </AnimatePresence> */}
					</div>
					<div className='overflow-hidden font-paragraph'>
						<AnimatePresence>
							<motion.div
								key={activeTab}
								initial={{ opacity: 1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className='h-full overflow-y-auto'
							>
								{activeTab === 'description' && (
									<p className='p-4  text-lg md:text-xl'>
										{projectDescription}
									</p>
								)}
								{activeTab === 'techStack' && (
									<div className='flex items-center justify-center text-center text-lg md:text-xl'>
										<p className='p-4'>{languages}</p>
									</div>
								)}
								{activeTab === 'links' && (
									<div className='flex flex-row items-center justify-evenly p-4 text-lg md:text-2xl'>
										<a
											className='flex hover:text-skin-accent'
											target='_blank'
											href={site}
										>
											<img src={siteicon} alt='' srcSet='' />
											<p className='ml-4 '>Live Site</p>
										</a>
										<a
											className='flex hover:text-skin-accent'
											target='_blank'
											href={code}
										>
											<img className='' src={repoicon} alt='' srcSet='' />
											<p className='ml-4'>Repo</p>
										</a>
									</div>
								)}
							</motion.div>
						</AnimatePresence>
					</div>
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
