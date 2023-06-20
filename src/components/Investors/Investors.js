"use client"
import React from "react";

import img1 from "../../../public/Investors/InvCompany1.png";
import img2 from "../../../public/Investors/InvCompany2.png";
import img3 from "../../../public/Investors/InvCompany3.png";
import img4 from "../../../public/Investors/InvCompany4.png";

import Image from "next/image";

const Investors = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-screen-2xl mx-auto mt-20">
          <p className="text-4xl md:p-0 p-5 font-extrabold text-[#2F3440]">
            Meet the Investors
          </p>
          
          <div className="ml-10 mt-24">

          <div className="mt-10 mb-20 grid grid-cols-3 md:grid-cols-4 gap-3">
            <div>
              <Image
                className="md:w-72 md:h-40 w-20 h-11"
                src={img1}
                alt="logo"
              />
            </div>
            <div>
              <Image
                className="md:w-72 md:h-40 w-20 h-11"
                src={img2}
                alt="logo"
              />
            </div>
            <div>
              <Image
                className="md:w-72 md:h-40 w-20 h-11"
                src={img3}
                alt="logo"
              />
            </div>
            <div>
              <Image
                className="md:w-72 md:h-40 w-20 h-11"
                src={img4}
                alt="logo"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
