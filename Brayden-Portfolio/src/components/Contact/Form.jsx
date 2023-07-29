import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {
	const success = () => toast('Message sent successfully!')
	const fail = () => toast('Uh oh! Something went wrong!')

	const [formData, setFormData] = useState({
		user_name: '',
		user_email: '',
		message: '',
	})

	const contactForm = useRef()

	function handleChange(event) {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[event.target.name]: event.target.value,
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
		if (!emailPattern.test(formData.user_email)) {
			toast.error('Invalid email address')
			return
		}

		if (formData.message.trim() === '') {
			toast.error('Message is required')
			return
		}

		emailjs
			.sendForm(
				'service_lv3xmqs',
				'template_wpbqykc',
				contactForm.current,
				'rZ3O8_5PqwdF_SHnY'
			)
			.then(
				(result) => {
					success()
				},
				(error) => {
					fail()
				}
			)
	}

	return (
		<form
			className=' font-bitechalknormal'
			ref={contactForm}
			onSubmit={handleSubmit}
		>
			<div className=' mx-auto  flex-col items-center  justify-evenly text-skin-base '>
				<input
					type='text'
					placeholder='Name'
					onChange={handleChange}
					name='user_name'
					value={formData.user_name}
					className='mx-auto mb-6 block w-64 rounded-md border-2 border-bordermain bg-transparent p-4 lg:w-96 lg:text-2xl'
				/>
				<input
					type='text'
					placeholder='Email Address'
					onChange={handleChange}
					name='user_email'
					value={formData.user_email}
					className='mx-auto mb-6 block w-64 rounded-md border-2 border-bordermain bg-transparent p-4 lg:w-96 lg:text-2xl'
				/>
				<textarea
					placeholder='Message'
					onChange={handleChange}
					name='message'
					value={formData.message}
					className='mx-auto mb-6 block h-64 w-64 rounded-md border-2 border-bordermain bg-transparent p-4 lg:w-96 lg:text-2xl'
				/>
				<button
					className='mx-auto block w-48 rounded-md border-2 border-bordermain px-8 py-2 text-skin-base transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:animate-morph hover:bg-skin-accent hover:text-skin-inverted lg:w-96 lg:py-4 lg:text-2xl'
					type='submit'
					onClick={handleSubmit}
				>
					Send!
				</button>
			</div>
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</form>
	)
}

export default Form
