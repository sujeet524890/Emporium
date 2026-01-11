import React from 'react'
import { useLocation } from 'react-router';


const ProductPage = () => {

  const { state } = useLocation();
  const products = state?.item;
  
  const{name,image,price,description,rating,reviews} = products

  return (
    <div>
      <div className="min-h-screen bg-[rgb(234,208,184)] px-4 py-35">
      <div className="max-w-6xl mx-auto bg-[rgb(240,232,224)] rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt={name}
              className="rounded-xl w-full max-w-md object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">
             " {name}"
            </h1>

            <p className="text-2xl font-semibold text-green-600 mb-4">
              {price}
            </p>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-500">
               
              </div>
              <span className="text-gray-600">
                {rating} ({reviews} )
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row  gap-4">
              <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>

              <button className="flex-1 border border-black text-black py-3 rounded-lg hover:bg-black hover:text-white transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductPage

