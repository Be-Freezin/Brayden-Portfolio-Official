import React from 'react'
import ProjectCard from './ProjectCard'
import projectData from '../../projectData'

const Projects = () => {

  const projectcard = projectData.map(project => {
    return <ProjectCard name={project.name} languages={project.languages} site={project.site} code={project.repo} siteicon={project.siteicon} repoicon={project.repoicon}/>
  })

  return (
    <div id='projects' className="flex h-screen flex-col items-center justify-center">
      <h3 className="mx-auto font-handcraftChalk text-5xl text-skin-accent lg:mb-20 lg:text-8xl">
        Projects
      </h3>
      {projectcard}
    </div>
  )
}

export default Projects