import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className="flex h-screen flex-col items-center justify-center">
      <h3 className="mx-auto font-handcraftChalk text-5xl text-skin-accent lg:mb-20 lg:text-8xl">
        Projects
      </h3>
      <ProjectCard />
    </div>
  )
}

export default Projects