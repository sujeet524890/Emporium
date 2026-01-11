import React from 'react'
import { useContext } from "react";
import { AppContext } from "../../ContextApi/Contex";

const User = () => {
        const {  user } = useContext(AppContext);
                 
  return (
    <div>
                <div className="w-full ">

      {/* ===== DESKTOP TABLE ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-[rgb(219,195,172)]">
            <tr className="text-left text-sm font-semibold">
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {user.map((item ,index)=>(
              <tr key={item._id} className="border-t text-sm">
                <td className="px-4 py-2">{item.username}</td>
                <td className="px-4 py-2">{item.gmail}</td>
               

                <td className="px-4 py-2">
                  <button
                   
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
     ))}
           
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE CARD VIEW ===== */}
      <div className="md:hidden space-y-4">
         {user.map((item ,index)=>(
          <div key={item._id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <p><span className="font-medium">Username:</span>{item.username}</p>
            <p><span className="font-medium">Email:</span>{item.gmail}</p>
            <p><span className="font-medium">Password:</span>{item.password}</p>

            <button
             
              className="mt-3 w-full bg-red-500 text-white py-2 rounded"
            >
              Delete User
            </button>
          </div>
       ))}
      </div>

    </div>
       
    </div>
  )
}

export default User
