import React, { useState} from 'react'
import { motion, useCycle } from 'framer-motion'

import Socials from './Navsocials'
import Hamburger from '../../assets/site-icons/hamburger.png'
import Close from '../../assets/site-icons/close.png'
import Logo from '/public/BF Logo Final.png'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false, true)

	// const scrollToSection = (sectionId) => {
	// 	const element = document.getElementById(sectionId)
	// 	const navHeight = document.querySelector('nav').offsetHeight

	// 	const elementRect = element.getBoundingClientRect()
	// 	const absoluteElementTop = elementRect.top + window.pageYOffset
	// 	const finalPosition = absoluteElementTop - navHeight

	// 	window.scrollTo({
	// 		top: finalPosition,
	// 		behavior: 'smooth',
	// 	})
	// }

	return (
		<nav className='sticky top-0 z-50 bg-skin-bg py-4 '>
			<div className=' flex h-6 flex-row-reverse items-center justify-between py-6 lg:flex-row lg:justify-between'>
				<img
					className='mr-6 cursor-pointer lg:hidden'
					src={Hamburger}
					alt='Hamburger Icon '
					srcSet=''
					onClick={() => setToggleMenu(true)}
				/>

				<ul className='ml-20  hidden w-1/4 items-center justify-between   font-bitechalknormal text-2xl text-skin-base lg:flex'>
					<li className='px-4'>
						<a href='#home' className='hover:text-skin-accent'>
							<img className='w-10' src={Logo} alt='' />
						</a>
					</li>
					<li className='px-4'>
						<a href='#about' className='hover:text-skin-accent'>
							About
						</a>
					</li>
					<li className='px-4'>
						<a href='#skills' className='hover:text-skin-accent '>
							Skills
						</a>
					</li>
					<li className='px-4'>
						<a href='#projects' className='hover:text-skin-accent '>
							Projects
						</a>
					</li>
					<li className='px-4'>
						<a href='#contact' className='hover:text-skin-accent '>
							Contact
						</a>
					</li>
				</ul>

				<Socials />
				{toggleMenu && (
					<div className='fixed top-0 left-0 z-40 mx-auto my-0 h-full w-screen flex-row-reverse items-center justify-center  bg-skin-bg py-2 text-lg '>
						<div className='flex flex-row-reverse items-center justify-between'>
							<img
								className='mr-10 cursor-pointer pt-4'
								src={Close}
								alt=''
								srcSet=''
								onClick={() => setToggleMenu(false)}
							/>
						</div>
						<ul className='mx-auto my-6 flex h-5/6 w-1/4  flex-col items-center justify-evenly font-bitechalknormal text-2xl text-skin-base'>
							<li className='px-4 hover:text-skin-accent'>
								<a href='#about' onClick={(e) => setToggleMenu(false)}>
									About
								</a>
							</li>
							<li className='px-4 hover:text-skin-accent'>
								<a href='#skills' onClick={() => setToggleMenu(false)}>
									Skills
								</a>
							</li>
							<li className='px-4 hover:text-skin-accent'>
								<a href='#projects' onClick={() => setToggleMenu(false)}>
									Projects
								</a>
							</li>
							<li className='px-4 hover:text-skin-accent'>
								<a href='#contact' onClick={() => setToggleMenu(false)}>
									{' '}
									Contact
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
