import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  scrollTo(0, 0);
  const location = useNavigate();

  const hendleback=()=>{
    location("/cart")
  }

  

  return (
    <div>
      <div className="min-h-screen bg-[rgb(234,208,184)] py-25 px-4">
      <span className="mx-30 cursor-pointer hover:text-blue-600"onClick={()=>hendleback()}> ← Back to Cart</span> 
        <h1 className="text-3xl font-bold text-center mb-10">Checkout</h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT : Billing Details */}
          <div className="bg-[rgb(241,228,216)] p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded focus:outline-none focus:ring"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded focus:outline-none focus:ring"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-3 rounded focus:outline-none focus:ring"
              />

              <textarea
                placeholder="Full Address"
                rows="3"
                className="w-full border p-3 rounded focus:outline-none focus:ring"
              ></textarea>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border p-3 rounded focus:outline-none focus:ring"
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="border p-3 rounded focus:outline-none focus:ring"
                />
              </div>

              <input
                type="text"
                placeholder="Secret Key / Coupon Code"
                className="w-full border p-3 rounded focus:outline-none focus:ring"
              />
              <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
                Place Order
              </button>
            </form>
          </div>

          {/* RIGHT : Order Summary */}
          <div className="bg-[rgb(241,228,216)] p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4">
              {/* {cartItems.map((item) => ( */}
              <div
                //  key={item.id}
                className="flex justify-between border-b pb-2"
              >
                <div>
                  <p className="font-medium"></p>
                  <p className="text-sm text-gray-500">Qty:</p>
                </div>
                <p>₹</p>
              </div>
              {/* ))} */}
            </div>

            <div className="flex justify-between font-bold text-lg mt-6">
              <span>Total</span>
              <span>₹</span>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
