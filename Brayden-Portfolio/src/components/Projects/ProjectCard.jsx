import React from 'react'
import projectone from '../../assets/project-imgs/code-project.jpg'
import repo from '../../assets/icons/repo.png'
import livesite from '../../assets/icons/livesite.png'
const ProjectCard = () => {
  return (
    <div className="mx-6 font-bitechalknormal text-sm lg:w-1/2 lg:text-xl">
      <div className="  mt-8 rounded-lg bg-skin-accentdark p-6 hidden">
        <img
          className="mx-auto w-full rounded-lg border-8 border-mainblack"
          src={projectone}
          alt=""
        />
        <div className="mt-4 flex items-center justify-between text-center lg:w-1/2">
          <span className="   px-2 py-2">
            Project 1
          </span>
          <span className=" px-2 py-1">
            HTML + TailwindCSS + React
          </span>
          <a className="  p-2" href="#">
            <img src={livesite} alt="" srcset="" />
          </a>
          <a
            className="  p-2 "
            href="#"
          >
            <img className='w-' src={repo} alt="" srcset="" />
          </a>
        </div>
      </div>
      <div className="  mt-8 rounded-lg bg-skin-accentdark p-6 ">
    <h3>Coming Soon...</h3>
      </div>
    </div>
  )
}

export default ProjectCard