import React from 'react'
import projectone from '../../assets/project-imgs/code-project.jpg'

const ProjectCard = () => {
  return (
    <div className="lg:w-1/2 font-bitechalknormal lg:text-xl mx-6">
      <div className="  rounded-lg bg-skin-accentdark p-6 mt-8 ">
        <img
          className="mx-auto w-full rounded-lg border-8 border-mainblack"
          src={projectone}
          alt=""
        />
        <div className="mt-4 flex lg:w-1/2 justify-between">
          <span className="border-4 border-mainblack bg-mutedtext p-2">
            Project 1
          </span>
          <span className="border-4 border-mainblack bg-mutedtext p-2">
            HTML + TailwindCSS + React
          </span>
          <a className="border-4 border-mainblack bg-mutedtext p-2" href="#">
            Site
          </a>
          <a className="border-4 border-mainblack bg-mutedtext p-2" href="#">
            repo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard