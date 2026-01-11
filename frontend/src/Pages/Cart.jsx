import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  scrollTo(0, 0);
  const location = useNavigate();

  const [count, setCount] = useState(1);
  const [cart, setCart] = useState(true);

 
 

  const increaseQty = () => {
    setCount(count + 1);
  };
  const dincreaseQty =() => {
    if(count == 1){ 
      setCart(false)
    }
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const handelButton = () => {
    if(count < 1){
    setCart(false)
    }
    }

  const hendelorderSummary = () => {
    location("/checkout");
  };

  return (
    <div>
      <div className="min-h-screen bg-[rgb(234,208,184)] px-4 py-30">
        <h1 className="text-3xl font-bold text-center mb-12">Shopping Cart</h1>

       

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          {cart ? 
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[rgb(239,220,202)] p-4 rounded-lg shadow flex flex-col sm:flex-row items-center gap-10">
              <img
                src="./fevicon.png"
                className="w-60 h-40 object-cover rounded"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold text-lg">Gift</h2>
                <p className="text-gray-950"> ₹400</p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1 cursor-pointer border hover:bg-blue-400 hover:text-white rounded"
                  onClick={dincreaseQty}
                >
                  −
                </button>
                <span className="px-3">{count}</span>
                <button
                  className="px-3 py-1 cursor-pointer hover:bg-blue-400 hover:text-white border rounded"
                  onClick={increaseQty}
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={handelButton}
                className="text-red-500 text:bold cursor-pointer hover:underline"
              >
                Remove
              </button>
            </div>
          </div> 
          :
          <> <p className="text-center text-gray-950 text-3xl animate-bounce mb-6">Your cart is empty 🛒</p></>
          }
          {/* Summary */}
          <div className="bg-[rgb(239,224,209)] p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold  mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span></span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>₹</span>
            </div>

            <button
              className="w-full bg-black text-white py-2 rounded hover:bg-blue-600 transition"
              onClick={() => hendelorderSummary()}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
