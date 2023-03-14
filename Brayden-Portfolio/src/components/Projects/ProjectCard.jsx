import React from "react"
import projectone from "../../assets/project-imgs/code-project.jpg"

const ProjectCard = ({
  name,
  languages,
  site,
  siteicon,
  repoicon,
  code,
  index,
}) => {
  return (
    <div className="mx-6  font-bitechalknormal text-sm lg:w-1/2 lg:text-xl">
      <div className="  mt-8 rounded-lg bg-skin-accentdark p-6" key={index}>
        <img
          className="mx-auto w-full rounded-lg border-8 border-mainblack"
          src={projectone}
          alt=""
          srcSet=""
        />
        <div className="mt-4 flex items-center justify-between text-center lg:w-full">
          <span className="   px-2 py-2">{name}</span>
          <span className=" px-2 py-1">{languages}</span>
          <a className="  p-2" href="#">
            <img src={siteicon} alt="" srcSet="" />
          </a>
          <a className="  p-2 " href="#">
            <img className="w-" src={repoicon} alt="" srcSet="" />
          </a>
        </div>
      </div>
      {/* <div className="  mt-8 rounded-lg bg-skin-accentdark p-6 ">
    <h3>Coming Soon...</h3>
      </div> */}
    </div>
  )
}

export default ProjectCard
