"use client";
import React from "react";

import img1 from "../../../public/Co-Founder/Manish.png";
import img2 from "../../../public/Co-Founder/Yash.png";
import img3 from "../../../public/Co-Founder/Lokesh.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/Fa";
import Link from "next/link";

const CoFounder = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(168deg, rgb(233, 244, 255) 0%, rgb(255, 255, 255) 100%);",
      }} 
    >
      <div className="max-w-screen-2xl mx-auto mt-20 py-10">
        <p className="text-4xl md:p-0 p-5 font-extrabold text-[#2F3440] text-center">
          Meet our Founders
        </p>
        <p className="text-center">Few words from founders desk</p>
        <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 gap-5">
          <div className="p-8">
            <Image src={img1} alt="founder" />
            <div className="mt-5 flex flex-row justify-between">
              <div>
                <p className="text-2xl font-medium leading-8">Manish Shara</p>
                <p className="text-xl font-normal leading-8">
                  Co- Founder & CEO
                </p>
              </div>
              <div>
                <Link
                  href="https://www.linkedin.com/in/manishshara/"
                  target="_blank"
                >
                  <FaLinkedin className="h-10 w-10"></FaLinkedin>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-8">
            <Image src={img2} alt="founder" />
            <div className="mt-5 flex flex-row justify-between">
              <div>
                <p className="text-2xl font-medium leading-8">Yash Desai</p>
                <p className="text-xl font-normal leading-8">Co- Founder</p>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/yash-desai-20a3b5b1/">
                  <FaLinkedin className="h-10 w-10"></FaLinkedin>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-8">
            <Image src={img3} alt="founder" />
            <div className="mt-5 flex flex-row justify-between">
              <div>
                <p className="text-2xl font-medium leading-8">Lokesh Agarwal</p>
                <p className="text-xl font-normal leading-8">CTO</p>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/lokesh198/">
                  <FaLinkedin className="h-10 w-10"></FaLinkedin>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoFounder;
