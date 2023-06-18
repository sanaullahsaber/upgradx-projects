"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './TopBrand.css'

// brand image
import img1 from "../../../public/Brand-Image/Amex.png";
import img2 from "../../../public/Brand-Image/Aufin.png";
import img3 from "../../../public/Brand-Image/Axis.png";
import img4 from "../../../public/Brand-Image/Bajaj.png";
import img5 from "../../../public/Brand-Image/BOB.png";
import img6 from "../../../public/Brand-Image/Icici.png";
import img7 from "../../../public/Brand-Image/Idfc.png";
import img8 from "../../../public/Brand-Image/IndusInd.png";
import img9 from "../../../public/Brand-Image/StandardChartered.png";
import img10 from "../../../public/Brand-Image/YesBank.png";
import Image from "next/image";

const TopBrand = () => {
  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Breakpoint for tablets
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20">
      <div className="text-center leading-9">
        <p className="font-bold text-2xl">Top Brands on ZET</p>
        <p className="text-lg font-medium">
          We are trusted by the best brands in the country
        </p>
      </div>
      {/* slider */}
      <div className="mt-10">
        <Slider {...settings} className="custom-slider">
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img1} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img2} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img3} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img4} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img5} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img6} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img7} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img8} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img9} alt="bank-logo" priority />
            </div>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <Image src={img10} alt="bank-logo" priority />
            </div>
          </div>
        </Slider>
      </div>

      <style jsx>{`
        .image-container {
          border: 1px solid #ccc;
          padding: 5px 50px;
          margin: 5px;
        }
        .image-wrapper {
          display: flex;
          align-items: center;
        }
        
        }
      `}</style>
    </div>
  );
};

export default TopBrand;
