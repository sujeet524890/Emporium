import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../ContextApi/Contex";


const Singup = () => {
  scrollTo(0, 0);
const location = useNavigate()
 
 const { signup } = useContext(AppContext);

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    ConformPassword: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
   
  };
   console.log(userData);

  const handalesubmit=(e)=>{
    e.preventDefault()
    location("/login")
  signup(userData)
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[rgb(234,208,184)]  px-4">
        <div className="bg-[rgb(237,220,203)]  w-full max-w-md p-8 rounded-lg shadow">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Join Emporium and start shopping
          </p>

          {/* Form */}
          <form className="space-y-4">
            <input
              name="fullname"
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded focus:outline-none focus:ring"
              required
              onChange={handleChange}
            />

            <input
              name="email"
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

            <input
              name="ConformPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded focus:outline-none focus:ring"
              required
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                          onClick={handalesubmit}
            >
              Sign Up
            </button>
          </form>

          {/* Extra Links */}
          <div className="text-center mt-4 text-sm">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link to="/login">
              <span
                className="text-black font-semibold cursor-pointer hover:underline"
               
              >
                Login
              </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
