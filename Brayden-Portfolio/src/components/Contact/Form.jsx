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
    <form
      className=" h-1/4 w-1/4   "
      action=""
    >
      <div className=" mx-auto flex-col justify-evenly items-center h-full w-full">
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="fullName"
          value={formData.fullName}
          className="inline-block   p-2"
        />
        <input
          type="text"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
          value={formData.email}
          className="inline-block p-2"
        />
        <textarea
          placeholder="Message"
          onChange={handleChange}
          name="message"
          value={formData.message}
          className="inline-block p-2"
        />
        <button
          className="block p-2"
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
