import React from 'react'
import ProjectCard from './ProjectCard'
import projectData from '../../projectData'

const Projects = () => {
	const projectcard = projectData.map((project) => {
		return (
			<ProjectCard
				name={project.name}
				languages={project.languages}
				site={project.sitelink}
				code={project.repolink}
				siteicon={project.siteicon}
				repoicon={project.repoicon}
				projectimg={project.projectimage}
				projectDescription={project.projectDescription}
				key={project.key}
			/>
		)
	})

	return (
		<div
			id='projects'
			className='flex  flex-col items-center justify-center md:my-48'
		>
			<h3 className='mx-auto my-10 font-lordish text-6xl tracking-wider text-skin-accent lg:mb-20 lg:text-9xl'>
				Projects
			</h3>
			<div className='mx-auto grid place-items-center lg:grid-cols-2 '>
				{projectcard}
			</div>
		</div>
	)
}

export default Projects
