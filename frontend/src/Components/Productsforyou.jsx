import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../ContextApi/Contex";
import { Link } from "react-router-dom";
const ProductsForYou = () => {
  const { products } = useContext(AppContext);
 

  const Candles = products.filter((Candle) => Candle.category == "Candle");
  const Chocolate = products.filter((Chocolate) => Chocolate.category == "Chocolate");
  const Cake = products.filter((Cake) => Cake.category == "Cake");
  const SoftDrink= products.filter((SoftDrink) => SoftDrink.category == "SoftDrink");
  const Gift = products.filter((Gift) => Gift.category == "Gift");
  const PartyCap = products.filter((PartyCap) => PartyCap.category == "Partycap");
  const Decoration = products.filter((Decoration) => Decoration.category == "Decoration");
  const Cookies = products.filter((Cookies) => Cookies.category == "Cookies");

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

            <Link to={`/collection`} state={{ products: Cake }}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/photo-1685956801990-57ef97b17d45?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="cake-image"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Cake 🎂</h3>
                  <p className="text-white text-sm mt-1">
                    where celebrations find their
                    taste. 
                  </p>
                </div>
              </div>
            </Link>
            <Link to={`/collection`} state={{ products: Cookies }}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/flagged/photo-1619271949275-7bb5e1dcea53?q=80&w=827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cookies-image"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Cookies 🍪</h3>
                  <p className="text-white text-sm mt-1">small bites of pure happiness.</p>
                </div>
              </div>
            </Link>
            <Link to={`/collection`} state={{ products: SoftDrink }}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/photo-1603833971780-1a096342a9dd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Soft-Drink-image"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Soft-Drink 🥤</h3>
                  <p className="text-white text-sm mt-1">refreshment that lifts the mood.</p>
                </div>
              </div>
            </Link>
            <Link to={`/collection`} state={{ products: Gift }}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/photo-1707944145479-12755f0434d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHxlbnwwfDJ8MHx8fDA%3D"
                  alt="Gift's-image"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Gift's 🎁</h3>
                  <p className="text-white text-sm mt-1">love shared without words. </p>
                </div>
              </div>
            </Link>
            <Link to={`/collection`} state={{ products: PartyCap  }}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/photo-1723797447445-a7a81aa8078a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFydHklMjBjYXB8ZW58MHwyfDB8fHww"
                  alt="part-cap"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Part-Cap 🧢</h3>
                  <p className="text-white text-sm mt-1">crowning moments of happiness. </p>
                </div>
              </div>
            </Link>
            <Link to={`/collection`} state={{ products: Decoration}}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/photo-1675177046719-a8ca7222aeca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3JhdGlvbnxlbnwwfDJ8MHx8fDA%3D"
                  alt="decpration-image"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Decoration ✨</h3>
                  <p className="text-white text-sm mt-1">where spaces come alive. </p>
                </div>
              </div>
            </Link>
            <Link to={`/collection`} state={{ products: Candles }}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/photo-1702913288156-f55d0f64f7b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuZGVsfGVufDB8MnwwfHx8MA%3D%3D"
                  alt="Candle-imge"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Candle 🕯️</h3>
                  <p className="text-white text-sm mt-1"> captured in a flicker. </p>
                </div>
              </div>
            </Link>
            <Link to={`/collection`} state={{ products: Chocolate }}>
              <div className="bg-gray-800 rounded-lg  shadow hover:shadow-lg transition gap-">
                <img
                  src="https://images.unsplash.com/photo-1720029106261-0d0396bb270d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlfGVufDB8MnwwfHx8MA%3D%3D"
                  alt="Chocolate-image"
                  className="w-full h-60 p-2 object-fit rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Chocolate 🍫</h3>
                  <p className="text-white text-sm mt-1">
                   little joy in every
                    bite. 🍫
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsForYou;
