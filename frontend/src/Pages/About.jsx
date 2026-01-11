import React from 'react'

const About = () => {
  scrollTo(0,0)
  
  return (
    <div>
               <div className="min-h-screen bg-[rgb(234,208,184)] px-4 py-30">
      <div className="max-w-6xl mx-auto bg-[rgb(243,226,210)] rounded-lg shadow-md overflow-hidden">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">

          {/* Brand Image */}
          <div className="flex justify-center">
            <img
              src="./fevicon.png"
              alt="Emporium Brand"
              className="rounded-lg shadow-sm w-full text-fit max-w-md"
            />
          </div>

          {/* About Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4">
              About Emporium
            </h1>

            <p className="text-gray-800 mb-4 leading-relaxed">
              <span className="font-semibold">Emporium</span> is a modern
              e-commerce platform designed to deliver quality products with a
              smooth and user-friendly shopping experience.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Our goal is to combine technology, simplicity, and trust to create
              a reliable online marketplace where customers can explore,
              discover, and shop with confidence.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[rgb(239,211,185)] p-8">
          <h2 className="text-2xl font-semibold text-gray-950 mb-6 text-center">
            Why Choose Emporium?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2  text-white md:grid-cols-3 gap-6 ">
            <div className="bg-gray-800 rounded shadow-sm text-center">
              <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
              <p className="text-white text-sm mb-5">
                Carefully selected items to ensure the best quality.
              </p>
            </div>

            <div className="bg-gray-800 rounded shadow-sm text-white text-center">
              <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>
              <p className="text-white text-sm">
                Safe payments and reliable checkout experience.
              </p>
            </div>

            <div className="bg-gray-800 rounded text-white shadow-sm text-center">
              <h3 className="font-semibold text-lg mb-2">Fast Support</h3>
              <p className="text-white text-sm">
                Customer-focused support whenever you need help.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>   
    </div>
  )
}

export default About
