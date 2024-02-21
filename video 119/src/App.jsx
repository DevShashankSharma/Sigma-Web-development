import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (s) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, s * 1000);
    })
  }


  const onSubmit = async (data) => { 
    // await delay(4) //! Simulating network delay
    let r = await fetch("http://localhost:3000/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let res = await r.text()
    console.log(data,res) 
    // if (data.email === "I0b0D@gmail.com") {
    //   setError("sub_issue", { type: "manual", message: "Wrong email or password" })
    // }
    // else if(data.email === "hello@gmail.com"){
    //   setError("sub_issue", { type: "manual", message: "User is blocked" })
    // }
  }

  return (
    <>
      {isSubmitting && <div className="loader">Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input placeholder='Email' {...register("email", { required: { value: true, message: "Email is required" }, minLength: { value: 5, message: "Minimum length should be 5" }, maxLength: { value: 30, message: "Maximum length should be 30" } })} type="email" />
          {errors.email && <div className='red'>{errors.email.message}</div>}
          <input placeholder='Password' {...register("password", { required: {value: true, message: "Password is required"}, minLength: {value: 5, message: "Minimum length should be 5"}, maxLength: {value: 30, message: "Maximum length should be 30"} })} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.sub_issue && <div className='red'>{errors.sub_issue.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
