"use client";
import React from "react";

import "./AboutPageBanner.css";

const AboutPageBanner = () => {
  return (
    <div className="aboutBg mb-10">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className=" text-white text-4xl font-bold text-center">
          OUR MISSION
        </p>
        <p className="mt-2 text-white text-lg  text-center leading-6">
          Enabling financial inclusion for the next billion Indians <br />
          & making their Zindagi Set. Building a platform that enables you to
          sell <br />
          financial products & earn up to Rs. 1 lakh every month.
        </p>
        <p className="mt-2 md:leading-10 leading-none text-white font-extrabold text-center tracking-[0.2em]">
          EARN BETTER. LIVE BETTER.
        </p>
      </div>
    </div>
  );
};

export default AboutPageBanner;
