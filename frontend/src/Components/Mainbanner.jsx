import React from "react";

const Mainbanner = () => {
  return (
    <div>
      <section className="w-full py-15 bg-[rgb(234,208,184)]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* <!-- Left Content --> */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-950  leading-tight">
              Welcome <br/>to <span className="text-[rgb(4,152,232)] ">Emporium</span>
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Discover premium collections, latest trends, and exclassNameusive deals
              crafted just for you.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="border border-gray-950 px-6 py-3 rounded hover:bg-blue-700  hover:text-white  cursor-pointer transition">
                View Collection
              </button>
            </div>
          </div>

          {/* <!-- Right Image --> */}
          <div className="flex justify-center ">
            <img
              src="./Mainbanner.png"
              alt="Main Banner"
              className="w-full max-w-md rounded-lg shadow-lg  animate-pulse"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainbanner;
