import React, { useState } from "react";
import  {Link} from "react-router"
import { useContext } from "react";
import { AppContext } from "../ContextApi/Contex";
const Collections = () => {
  scrollTo(0,0)

     const { products  } = useContext(AppContext);

  return (
    <div>
      <div className="min-h-screen  bg-[rgb(219,195,172)] py-26 px-4">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Our Collection</h1>
          <p className="text-gray-500 mt-2">
            Discover premium products from Emporium
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item,index) => 
          (

           <Link  key={item._id} to={`/ProductPage/${item._id}`} state={{item}}  > 
           <div
             
              className="bg-gray-800 p-2  rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-fit object-cover rounded-t-lg"
              />

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-white ">
                  {item.name}
                </h2>
                <p className="text-white mt-1">{item.price}</p>

                <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
