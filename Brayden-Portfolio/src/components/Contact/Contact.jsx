import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div id='contact' className='h-screen font-handcraftChalk lg:flex flex flex-col  justify-evenly items-center'>
        <h3 className='text-9xl text-skin-accent w-96 text-center '>Don't be shy!</h3>
        <Form />
    </div>
  )
}

export default Contact