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
			className={`absolute bottom-0 h-[1px] w-1/3 bg-skin-accent ${left}  bottom-[-1px] overflow-hidden `}
			initial={{ left: 'left-0' }}
			animate={{ left: left }}
			layoutId='underline'
			transition={{ duration: 0.3 }}
		/>
	)
	const tabPosition = ['left-0', 'left-38', 'left-2/3']

	return (
		<div className='mx-6  font-paragraph text-sm text-skin-base lg:w-3/4 lg:text-xl'>
			<div className='  mt-8 rounded-lg bg-skin-muted p-4 ' key={index}>
				<span className='   px-2  text-xl font-bold md:text-3xl'>{name}</span>
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
							className='w-full overflow-hidden rounded-t-lg py-2 hover:bg-mutedtext hover:text-skin-inverted'
						>
							Details
						</motion.button>
						<button
							onClick={() => setActiveTab('techStack')}
							className='w-full overflow-hidden rounded-t-lg hover:bg-mutedtext hover:text-skin-inverted active:bg-mutedtext active:text-skin-inverted '
						>
							Tech Stack
						</button>
						<button
							onClick={() => setActiveTab('links')}
							className='w-full overflow-hidden rounded-t-lg hover:bg-mutedtext hover:text-skin-inverted'
						>
							Links
						</button>
						
						{activeTab === 'description' && <Underline left={tabPosition[0]} />}
						{activeTab === 'techStack' && <Underline left={tabPosition[1]} />}
						{activeTab === 'links' && <Underline left={tabPosition[2]} />}
						
					</div>
					<div className='overflow-hidden font-paragraph'>
						<AnimatePresence>
							<motion.div
								key={activeTab}
								initial={{ opacity: 1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className='h-full overflow-hidden'
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
											
											<p className='ml-4 '>Live Site</p>
										</a>
										<a
											className='flex hover:text-skin-accent'
											target='_blank'
											href={code}
										>
										
											<p className='ml-4'>Repo</p>
										</a>
									</div>
								)}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
