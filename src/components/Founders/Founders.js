"use client";
import React from "react";

import img1 from "../../../public/Founder/Inv1.png";
import img2 from "../../../public/Founder/Inv2.png";
import img3 from "../../../public/Founder/Inv3.png";
import img4 from "../../../public/Founder/Inv4.png";
import img5 from "../../../public/Founder/Inv5.png";
import img6 from "../../../public/Founder/Inv6.png";
import img7 from "../../../public/Founder/Inv7.png";
import img8 from "../../../public/Founder/Inv8.png";
import Image from "next/image";

const Founders = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-20">
      
      <div className="mt-10 mb-20 grid grid-cols-3 md:grid-cols-5 md:gap-20 gap-3">
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img1}
            alt="founder"
          />
          <div className="mt-2">
            <p>Kunal Shah</p>
            <p>Founder, CRED</p>
          </div>
        </div>
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img2}
            alt="founder"
          />
          <div className="mt-2">
            <p>Gaurav Munjal</p>
            <p>Founder, UNACADEMY</p>
          </div>
        </div>
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img3}
            alt="founder"
          />
          <div className="mt-2">
            <p>Aakrit Vaish</p>
            <p>Co-Founder, HAPTIK</p>
          </div>
        </div>
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img4}
            alt="founder"
          />
          <div className="mt-2">
            <p>Harshil Mathur</p>
            <p>Founder, RAZORPAY</p>
          </div>
        </div>
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img5}
            alt="founder"
          />
          <div className="mt-2">
            <p>Vidit Aatrey</p>
            <p>Founder & CEO, MEESHO</p>
          </div>
        </div>
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img6}
            alt="founder"
          />
          <div className="mt-2">
            <p>Amrish Rau</p>
            <p>CEO, PINELABS</p>
          </div>
        </div>
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img7}
            alt="founder"
          />
          <div className="mt-2">
            <p>Lalit Keshre</p>
            <p>CEO, GROWW</p>
          </div>
        </div>
        <div className="md:p-0 p-5">
          <Image
            className="md:w-52 w-20 h-11 md:h-44"
            src={img8}
            alt="founder"
          />
          <div className="mt-2">
            <p>Gokul Rajaram</p>
            <p>Product, DOORDASH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
