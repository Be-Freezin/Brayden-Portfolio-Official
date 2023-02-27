import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex  h-screen flex-col items-center  justify-evenly lg:flex-row"
    >
      <h3 className="w-96 text-center font-handcraftChalk text-5xl text-skin-accent lg:text-9xl ">
        Don't be shy!
      </h3>
      <Form />
    </div>
  )
}

export default Contact