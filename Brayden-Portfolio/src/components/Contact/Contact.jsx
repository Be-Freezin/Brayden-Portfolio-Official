import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex  my-20 flex-col items-center  justify-evenly lg:flex-row"
    >
      <h3 className="md:w-96 my-10  text-center font-lordish text-6xl tracking-wider text-skin-accent sm:text-7xl lg:text-10xl ">
        Don't be shy!
      </h3>
      <Form />
    </div>
  )
}

export default Contact