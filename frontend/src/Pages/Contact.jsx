import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../ContextApi/Contex";

const Contact = () => {
  scrollTo(0,0)
  const {Contect} = useContext(AppContext);

  const[contectdata,setContectdatat]=useState({
        fullname:"",
        email:"",
        textarea:"",
  });
  const hendlechange =(e)=>{
    setContectdatat({
      ...contectdata,
      [e.target.name]:e.target.value

    })
    console.log(contectdata)
    
  }
  const hendlesubmit=()=>{
    Contect(contectdata)
    }
  return (
    <div>
      <div className="bg-[rgb(219,195,172)] py-25">
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-5xl bg-[rgb(235,212,191)] rounded-lg shadow-lg p-8">
            {/* <!-- Title --> */}

            <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* <!-- Contact Info --> */}

              <div>
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-800 mb-6">
                  We’d love to hear from you. Please fill out the form or
                  contact us directly.
                </p>

                <div className="space-y-4 text-gray-800">
                  <p>
                    <strong>Name:</strong> Emporium
                  </p>
                  <p>
                    <strong>Email:</strong> sujeeten1@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +916392414213
                  </p>
                  <p>
                    <strong>Location:</strong> India
                  </p>
                </div>
              </div>

              {/* <!-- Contact Form --> */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Your Name"
                    className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                   onChange={hendlechange}/>
                </div>

                <div>
                  <label className="block text-sm font-medium ">Email</label>
                  <input
                   name="email"
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                   onChange={hendlechange}/>
                </div>

                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    name="textarea"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                   onChange={hendlechange}></textarea>
                </div>

                <button
                
                  type="submit"
                  className="w-full bg-gray-950 text-white py-2 rounded hover:bg-blue-700 transition"
                 onClick={()=>hendlesubmit()}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
