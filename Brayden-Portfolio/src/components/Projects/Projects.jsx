import React from "react"
import ProjectCard from "./ProjectCard"
import projectData from "../../projectData"

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
        key={project.key}
      />
    )
  })

  return (
		<div
			id="projects"
			className={'flex h-fit flex-col items-center justify-center  '}
		>
			<h3 className="mx-auto font-handcraftChalk text-5xl text-skin-accent lg:mb-20 lg:text-8xl">
				Projects
			</h3>
			<div className="mx-auto grid place-items-center lg:grid-cols-2 ">
				{projectcard}
			</div>
			<div className="  mt-8 rounded-lg bg-skin-accentdark p-6 ">
    <h3>More are on the way...</h3>
      </div>
		</div>
	)
}

export default Projects
