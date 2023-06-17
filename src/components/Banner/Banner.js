import Image from "next/image";
import React from "react";
import BannerImg from "../../../public/HeroImgNew.png";
import GooglePlayStore from "../../../public/googlePlayStore.a0f01343.svg";

const Banner = () => {
  return (
    <div className="lg:my-20 my-2 bg-[#dbe9ff]">
      <div className="flex">
        <div className="p-0 lg:p-20">
          <h1 className="text-4xl font-bold text-center sm:text-left px-10 sm:px-0">
            Become a Financial Advisor and Earn{" "}
            <span style={{ color: "rgb(38, 78, 255)" }}>Rs.1</span>
            <br /> <span style={{ color: "rgb(38, 78, 255)" }}>Lakh/Month</span>
          </h1>
          <p className="mb-1 text-center sm:text-left">
            No investment required
          </p>
          <div className="ml-10 sm:mx-auto">
            <Image
              className="w-28 h-28"
              src={GooglePlayStore}
              alt="google-play-logo"
            />
          </div>
        </div>
        <div className="hidden md:block lg:block xl:block -mt-20">
          <Image
            className="mr-2"
            width={500}
            height={500}
            src={BannerImg}
            alt="A Happy man with good earning"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
