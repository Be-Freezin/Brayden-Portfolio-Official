import React from 'react'
import { motion } from 'framer-motion'

const Path = (props) => (
	<motion.path
		fill='transparent'
		strokeWidth='3'
		stroke='#ffc466'
		strokeLinecap='round'
		{...props}
	/>
)

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}

export const MenuToggle = ({ toggle, isOpen }) => (
	<button onClick={toggle} className='mr-6 z-50 lg:hidden'>
		<motion.svg
			width='23'
			height='23'
			viewBox='0 0 23 23'
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			variants={variants}
		>
			<Path
				variants={{
					closed: { d: 'M 2 2.5 L 20 2.5' },
					open: { d: 'M 3 16.5 L 17 2.5' },
				}}
			/>
			<Path
				d='M 2 9.423 L 20 9.423'
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: 'M 2 16.346 L 20 16.346' },
					open: { d: 'M 3 2.5 L 17 16.346' },
				}}
			/>
		</motion.svg>
	</button>
)
