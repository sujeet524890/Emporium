import React from "react";


const Footer = () => {
  scrollTo(0,0)
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-5">
            {/* 1️⃣ Logo & Name */}
            <div className="flex items-center  gap-3">
              <div>
                <img
                  src="./fevicon.png"
                  alt=""
                  className="w-30 h-20 text-gray-900  flex items-center justify-center font-bold"
                ></img>
              </div>
              <h2 className="text-2xl font-semibold animate-bounce text-white">Emporium</h2>
            </div>

            {/* 2️⃣ Copyright */}
            <div className="text-sm text-center ">
              Emporium ©. All rights reserved.
            </div>

            {/* 3️⃣ Contact Info */}
            <div className="flex flex-col items-center  md:items-start text-sm gap-2">
              <h1 className="text-2xl font-bold items-start">Contacts</h1>
              <p>Email:sujeeten1@gmail.com</p>
              <p>Mobile:+916392414213</p>

              {/* LinkedIn */}
              <a
                href="linkedin.com/in/sujeet-kumar-yadav-4074aa3a5"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
