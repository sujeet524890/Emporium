import React from "react";
import { useState } from "react";

const ProductsForYou = () => {
  const[card,setCard]= useState([
    {
      _id:1,
      imag:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel:"Style Hub",
      name:"Clothes",
      price:"₹512",
    },
     {
      _id:2,
      imag:"https://images.unsplash.com/photo-1609533440656-68c27fc2862d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      titel:"Kide's Product",
      name:"Toy and taide",
      price:"₹512",
    },
    {
      _id:3,
      imag:"https://images.unsplash.com/photo-1566454825481-4e48f80aa4d7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel:"Grocery Product",
      name:"All Grocery Item",
      price:"₹512",
    },
    {
      _id:4,
      imag:"https://images.unsplash.com/photo-1676347929093-6614fb45bd90?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel:"Beauty Products",
      name:"Cream and Deo",
      price:"₹512",
    },
    {
      _id:5,
      imag:"https://images.unsplash.com/photo-1620989928625-08536e746255?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
      titel:"Shose Hub",
      name:"Sport and Fashion Shose",
      price:"₹512",
    },
     {
      _id:6,
      imag:"https://images.unsplash.com/photo-1579043370129-ef9ad52931cf?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel:"Electronics Product",
      name:"Electronics",
      price:"₹512",
      
    },
     {
      _id:7,
      imag:"https://images.unsplash.com/photo-1724137053756-8587ee385fb7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel:"Kichen Product",
      name:"Kichen accessories",
      price:"₹512",
    },
     {
      _id:8,
      imag:"https://plus.unsplash.com/premium_photo-1722086350831-3cc30b7d68a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      titel:"Sport Hub",
      name:"Bat,Ball and All ",
      price:"₹512",
    },

       
  ])
  return (
    <div>
      
      <section className="w-full bg-[rgb(219,195,172)] py-14">
        <div className="max-w-7xl mx-auto px-2">
          {/* <!-- Section Heading --> */}

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Products For You
            </h2>
            
          </div>

          {/* <!-- Products Grid --> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
 
            {/* <!-- Product Card --> */}
            {card.map((item)=>(
            <div key={item._id} className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
              <img
                src={item.imag}
                alt={item.imag}
                className="w-full h-60 p-2 object-fit rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white">{item.titel}</h3>
                <p className="text-white text-sm mt-1">{item.name}</p>

                
              </div>
            </div>
          ))}

          </div>
        </div>
      </section>
     
    </div>
  );
};

export default ProductsForYou;
