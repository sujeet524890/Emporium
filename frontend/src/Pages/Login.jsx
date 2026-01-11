import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useContext } from "react";
import { AppContext } from "../ContextApi/Contex";

const Login = () => {
  scrollTo(0,0)
  
   const { Loginuser } = useContext(AppContext);

  
 const [ userData, setUserData]=useState(
  {
    email:"",
    password:"",
  })

  const handleChange = (e) => {
  setUserData({
    ...userData,
    [e.target.name]: e.target.value,
    
  });
  console.log(userData) 
};

const handalesubmit=()=>{
  Loginuser(userData)
}


 
  return (
    <div>
                <div className="min-h-screen flex items-center justify-center bg-[rgb(234,208,184)]  px-4">
      <div className="bg-[rgb(243,225,208)]  w-full max-w-md p-8 rounded-lg shadow">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-950 mb-6">
          Login to your Emporium account
        </p>

        {/* Form */}
        
        <form  className="space-y-4">
          <input
            name="Email"
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded focus:outline-none focus:ring"
              required
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded focus:outline-none focus:ring"
            required
           onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
           onClick={handalesubmit}>
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4 text-sm">
          <p className="text-gray-500">
            Don’t have an account?{" "}
           
           <Link to="/singup"> <span className="text-black font-semibold cursor-pointer hover:underline" >
              Sign Up
            </span></Link>
          </p>
          <p className="mt-2 text-black cursor-pointer hover:underline">
            {/* Forgot Password? */}
          </p>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Login
