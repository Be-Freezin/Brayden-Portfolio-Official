import { motion } from 'framer-motion'
import Git from '../../assets/site-icons/git.png'
import Download from '../../assets/site-icons/download.png'
import Linkedin from '../../assets/site-icons/linkedin.png'
import resume from '../../../public/Resume.pdf'

const wobble = {
	scale: [1, 1.1, 1.05, 1.1, 1],
	rotate: [0, -3, 3, -3, 0],
	transition: {
		scale: {
			times: [0, 0.2, 0.4, 0.6, 1],
			duration: 0.5,
		},
		rotate: {
			times: [0, 0.2, 0.4, 0.6, 1],
			duration: 0.5,
		},
	},
}

const Navsocials = () => {
	return (
		<div className='mr-40 flex lg:mr-20  lg:flex'>
			<a href={resume} download>
				<motion.img
					className='px-4'
					whileHover={wobble}
					src={Download}
					alt='download logo'
					srcSet=''
				/>
			</a>
			<a href='https://github.com/Be-Freezin' target='_blank'>
				<motion.img
					className='px-4 '
					whileHover={wobble}
					src={Git}
					alt='Github Logo'
					srcSet=''
				/>
			</a>
			<a href='https://www.linkedin.com/in/braydenfriesen/' target='_blank'>
				<motion.img
					className='px-4 '
					whileHover={wobble}
					src={Linkedin}
					alt='Linkedin Logo'
					srcSet=''
				/>
			</a>
		</div>
	)
}

export default Navsocials
