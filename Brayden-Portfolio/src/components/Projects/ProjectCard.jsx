import React from "react"


const ProjectCard = ({
	name,
	languages,
	site,
	siteicon,
	repoicon,
	code,
	index,
	projectimg,
}) => {
	return (
		<div className="mx-6  font-bitechalknormal text-sm lg:w-1/2 lg:text-xl">
			<div className="  mt-8 rounded-lg bg-skin-accentdark p-6" key={index}>
				<img
					className="mx-auto w-full rounded-lg border-8 border-mainblack"
					src={projectimg}
					alt=""
					srcSet=""
				/>
				<div className="mt-4 flex items-center justify-between text-center lg:w-full">
					<span className="   px-2 py-2">{name}</span>
					<span className=" px-2 py-1">{languages}</span>
					<a className="  p-2" target="_blank" href={site}>
						<img src={siteicon} alt="" srcSet="" />
					</a>
					<a className="  p-2 " target="_blank" href={code}>
						<img className="w-" src={repoicon} alt="" srcSet="" />
					</a>
				</div>
			</div>
		
		</div>
	)
}

export default ProjectCard
