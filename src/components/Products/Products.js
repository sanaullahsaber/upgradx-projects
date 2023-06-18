"use client";
import React from "react";

import img1 from "../../../public/Products/CC.png";
import img2 from "../../../public/Products/Loan.png";
import img3 from "../../../public/Products/BNPL.png";
import img4 from "../../../public/Products/AccountSave.png";
import Image from "next/image";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="my-20">
        <div className="text-center leading-9">
          <p className="font-bold text-2xl">Products on ZET</p>
          <p className="text-lg font-medium">
            We are trusted by the best brands in the country
          </p>
        </div>
        {/*  */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2   mx-2">
            {/* 1st */}
            <div
              className="transform hover:scale-110"
              style={{
                willChange: "transform",
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="flex flex-col md:flex-row  justify-center items-center shadow-lg bg-[#edffec] p-8"
                data-aos="fade-up"
              >
                <div className="">
                  <Image
                    className="grayscale hover:grayscale-0"
                    height={203}
                    width={203}
                    src={img1}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-xl font-semibold">CREDIT CARDS</p>
                  <p className="text-base font-medium text-[rgb(54, 55, 75)]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div
              className="transform hover:scale-110"
              style={{
                willChange: "transform",
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex flex-col md:flex-row justify-center items-center shadow-lg p-8 bg-[#fff1ca]">
                <div className="p">
                  <Image
                    className="grayscale hover:grayscale-0"
                    height={203}
                    width={203}
                    src={img2}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-xl font-semibold">CREDIT CARDS</p>
                  <p className="text-base font-medium text-[rgb(54, 55, 75)]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div
              className="transform hover:scale-110"
              style={{
                willChange: "transform",
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex flex-col md:flex-row  justify-center items-center shadow-lg p-8 bg-[#ffeee7]">
                <div className="p">
                  <Image
                    className="grayscale hover:grayscale-0"
                    height={203}
                    width={203}
                    src={img3}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-xl font-semibold">CREDIT CARDS</p>
                  <p className="text-base font-medium text-[rgb(54, 55, 75)]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </div>
            {/* 4th */}
            <div
              className="transform hover:scale-110"
              style={{
                willChange: "transform",
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex flex-col md:flex-row justify-center items-center shadow-lg p-8 bg-[#fff5e7]">
                <div className="">
                  <Image
                    className="grayscale hover:grayscale-0"
                    height={203}
                    width={203}
                    src={img4}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-xl font-semibold">CREDIT CARDS</p>
                  <p className="text-base font-medium text-[rgb(54, 55, 75)]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
