import React, { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
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

    emailjs
      .sendForm(
        "service_lv3xmqs",
        "template_wpbqykc",
        contactForm.current,
        "rZ3O8_5PqwdF_SHnY"
      )
      .then(
        (result) => {
          // show the user a success message
        },
        (error) => {
          // show the user an error
        }
      )

    console.log(formData)
  }

  return (
    <form className=" font-bitechalknormal" ref={contactForm} onSubmit={handleSubmit}>
      <div className=" mx-auto  flex-col items-center  justify-evenly text-skin-base ">
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="fullName"
          value={formData.fullName}
          className="mx-auto mb-6 block w-48 rounded-md border-2 border-bordermain bg-transparent p-4 lg:w-96 lg:text-2xl"
        />
        <input
          type="text"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
          value={formData.email}
          className="mx-auto mb-6 block w-48 rounded-md border-2 border-bordermain bg-transparent p-4 lg:w-96 lg:text-2xl"
        />
        <textarea
          placeholder="Message"
          onChange={handleChange}
          name="message"
          value={formData.message}
          className="mx-auto mb-6 block h-64 w-48 rounded-md border-2 border-bordermain bg-transparent p-4 lg:w-96 lg:text-2xl"
        />
        <button
          className="mx-auto block w-48 rounded-md border-2 border-bordermain px-8 py-2 text-skin-base lg:w-96 lg:py-4 lg:text-2xl"
          type="submit"
          onClick={handleSubmit}
        >
          Send!
        </button>
      </div>
    </form>
  )
}

export default Form
