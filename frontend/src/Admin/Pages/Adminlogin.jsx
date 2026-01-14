import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../ContextApi/Contex";
import { toast } from "react-toastify";

const Adminlogin = () => {
  const { Adminlogin } = useContext(AppContext);

  const [admindata, setAdmindata] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const hendlechange = (e) => {
    setAdmindata({
      ...admindata,
      [e.target.name]: e.target.value,
    });
  };
  

  const handalesubmit = (e) => {
    e.preventDefault(); 
    Adminlogin(admindata);
 
  };
 
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[rgb(234,208,184)] px-4">
        <div className="bg-[rgb(235,225,215)] w-full max-w-md p-8 rounded-lg shadow">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2">Admin Login</h1>
          <p className="text-center text-gray-950 mb-6">
            Login to manage Emporium
          </p>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              className="w-full border p-3 rounded focus:outline-none focus:ring"
              required
              onChange={hendlechange}
            />

            <input
              type="password"
              name="password"
              placeholder="Admin Password"
              className="w-full border p-3 rounded focus:outline-none focus:ring"
              required
              onChange={hendlechange}
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
              onClick={handalesubmit}
            >
              Login as Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
