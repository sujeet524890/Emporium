import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../ContextApi/Contex";

const Products = () => {
 window.scrollTo(0, 0);
  const { products ,deletProduct  } = useContext(AppContext);

  // products
 
  return (
    <div>
      <div className="w-full ">
        {/* ===== DESKTOP TABLE ===== */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-[rgb(219,195,172)]">
              <tr className="text-left text-sm font-semibold">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">oldPrice</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Review</th>
                <th className="px-4 py-2">Action</th>
                {/* <th className="px-4 py-2">Update</th> */}
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr key={item._id} className="border-t text-sm">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 font-medium">{item.name}</td>
                  <td className="px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2 max-w-xs truncate">
                    {item.description}
                  </td>
                  <td className="px-4 py-2">{item.rating} ⭐</td>
                  <td className="px-4 py-2">{item.review}</td>
                  <td><button onClick={()=>deletProduct(item._id)} className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded">Delet</button></td>
                  {/* <td><button  onClick={()=>updateproduct(item._id)}className="bg-blue-400 cursor-pointer text-white px-3 py-1 rounded">Update</button></td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== MOBILE CARD VIEW ===== */}
        <div className="md:hidden space-y-4">
          {products.map((item, index) => (
            <div
              key={item._id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.price}</p>
                  <p className="text-sm">Rating: {item.rating} ⭐</p>
                </div>
              </div>

              <p className="text-sm mt-2 text-gray-700">{item.description}</p>

              <p className="text-sm mt-1">
                <span className="font-medium">Review:</span> {item.review}
                <button className=""onClick={()=>deletProduct(item._id)}>Delet</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
