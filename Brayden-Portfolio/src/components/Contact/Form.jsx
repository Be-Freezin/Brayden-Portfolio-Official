import React, { useState } from "react"

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message:"",
  })

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

    console.log(formData)
  }

  return (
    <form className=" font-bitechalknormal  " action="">
      <div className=" mx-auto  flex-col items-center  justify-evenly text-skin-base ">
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="fullName"
          value={formData.fullName}
          className="mx-auto mb-6 block w-48 rounded-md border-2 border-bordermain bg-transparent lg:text-2xl p-4 lg:w-96"
        />
        <input
          type="text"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
          value={formData.email}
          className="mx-auto mb-6 block w-48 rounded-md border-2 border-bordermain bg-transparent lg:text-2xl p-4 lg:w-96"
        />
        <textarea
          placeholder="Message"
          onChange={handleChange}
          name="message"
          value={formData.message}
          className="mx-auto mb-6 block h-64 w-48 rounded-md border-2 border-bordermain bg-transparent lg:text-2xl p-4 lg:w-96"
        />
        <button
          className="mx-auto block w-48 rounded-md border-2 border-bordermain px-8 py-2 lg:py-4 lg:text-2xl text-skin-base lg:w-96"
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
