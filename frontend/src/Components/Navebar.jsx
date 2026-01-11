import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'


const Navebar = () => {
  const location = useNavigate();
  const[isOpen,setIsOpen]=useState(false)

  const[isLogin,setIsLogin]=useState(true)

  
  

  return (
    <div>
            <nav className="w-full bg-gray-950  z-10 fixed shadow-md px-6 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
{/* 
    <!-- Logo & Name --> 
    */}
     <Link to="/">
    <div className="flex items-center   cursor-pointer  "  >
      <img src="./fevicon.png"  alt="Logo" className="w-15 h-10 " />
      <span className="text-2xl font-bold hover:animate-bounce  text-white">Emporium</span>
    </div>
    </Link>

    {/* <!--  Menu Links (Desktop) --> */}
  
    <ul className="hidden  md:flex gap-10 text-white text-2xl sm:text-xl font-bold">
      <Link to="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
      <Link to="/Collection"className="hover:text-blue-600 cursor-pointer">Collection</Link>
      <Link to="/About"className="hover:text-blue-600 cursor-pointer">About</Link>
      <Link to="/Contact"className="hover:text-blue-600 cursor-pointer">Contact</Link>
      <Link to={`${isLogin ? "/Cart" : "/login" }`}className="hover:text-blue-600 cursor-pointer">Cart 🛒</Link>
    </ul>

    {/* <!--  Button & Hamburger --> */}

    <div className="flex items-center gap-4 ">
    <Link to='/login'>  <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer" >
        Login
      </button> </Link>

      {/* <!-- Hamburger Icon --> */}

      <button className ="md:hidden"onClick={() => isOpen ? setIsOpen (false): setIsOpen(true)} >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16" />
        
             
        </svg>
      </button>
    </div>
    
    

  </div>

  {/* <!-- Mobile Menu --> */}
 {isOpen &&
  <div className=" mt-4 space-y-3 px-4">
    <Link to="/"  className="block text-white hover:text-blue-600" onClick={()=>setIsOpen(false)}>Home</Link>
    <Link to="/Collection" className="block text-white hover:text-blue-600" onClick={()=>setIsOpen(false)} >Collection</Link>
    <Link to="/About" className="block text-white hover:text-blue-600" onClick={()=>setIsOpen(false)}>About</Link>
    <Link to="/Cart" className="block text-white hover:text-blue-600" onClick={()=>setIsOpen(false)}>Car🛒</Link>
    {isLogin ?
    <button className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded"
    onClick={()=>hendellogin()}>
      <h1 onClick={()=>setIsOpen(false)}>Login</h1>
    </button>
    :
  <Link to='/login'>  <button className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded"
   >
      <h1 onClick={()=>setIsOpen(false)}>Login</h1>
    </button>
    </Link>
 }
  </div>
 } 
</nav>

      
    </div>
  )
}

export default Navebar
