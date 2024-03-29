import React from 'react'
import scytheLeft from '../../../public/scythe left.svg'
import scytheRight from '../../../public/scythe right.svg'

const Footer = () => {
	return (
		<div className=' flex justify-center border-t-2 border-bordermain py-6'>
			<div className='flex flex-row items-center justify-evenly w-full md:w-1/4'>
				<img src={scytheLeft} alt='' srcset='' className='w-10 md:w-20' />
				<p className='font-paragraph font-light text-skin-base '>
					Crafted with care and caffeine
				</p>
				<img src={scytheRight} alt='' srcset='' className='w-10 md:w-20' />
			</div>
		</div>
	)
}

export default Footer
