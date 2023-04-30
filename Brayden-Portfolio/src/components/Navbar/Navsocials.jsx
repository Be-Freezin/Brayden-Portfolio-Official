import React, {useState} from 'react'
import Git from '../../assets/site-icons/git.png'
import Download from '../../assets/site-icons/download.png'
import Linkedin from '../../assets/site-icons/linkedin.png'
import resume from '../../../public/Resume.pdf'


const Navsocials = () => {
	
	return (
		<div className="mr-40 flex lg:mr-20 lg:flex">
			<a href={resume} download >
				<img
					className="px-4 hover:animate-pulse"
					src={Download}
					alt="download logo"
					srcSet=""
				/>
			</a>

			<a
				href="https://github.com/Be-Freezin"
				target="_blank"
				
			>
				<img
					className="px-4 hover:animate-pulse"
					src={Git}
					alt="Github Logo"
					srcSet=""
				/>
			</a>
			<a href="https://www.linkedin.com/in/braydenfriesen/" target="_blank">
				<img
					className="px-4 hover:animate-pulse"
					src={Linkedin}
					alt="Linkedin Logo"
					srcSet=""
				/>
			</a>
			
		</div>
	)
}

export default Navsocials
