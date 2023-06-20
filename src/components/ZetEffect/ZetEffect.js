'use client'
import React, { useRef, useState } from "react";

import './ZetEffect.css'
import zetImg from "../../../public/peeps1.png"
import Image from 'next/image';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const ZetEffect = () => {
 
  
  return (
    <div>
      <div className="chSxnX gurTFd ">
        <div className="kLrQtv max-w-screen-2xl mx-auto">
          <div className="cPDRAh flex justify-center items-center">
            <Image
              src={zetImg}
              alt="people Image"
              loading="lazy"
              width="695"
              height="463"
              decoding="async"
              data-nimg="1"
              style="color:transparent"
              className="sc-eKCZMz cmROcX hidden md:block lg:block xl:block"
            ></Image>
            <div className="hufdxl mb-10">
              <p className="gHPgIl ml-28">THE ZET EFFECT</p>
              {/*  */}
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
               
                modules={[Autoplay,  Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <p className="md:text-3xl md:mr-28 text-base leading-10 font-extrabold text-white mb-w ml-10">
                    14 Lakh+ Financial Advisor across India are using ZET to
                    increase their income.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="md:text-3xl text-base leading-10 font-extrabold text-white mb-w ml-10">
                    We helped customers in more than 50 cities to get their
                    first financial product
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="md:text-3xl text-base leading-10 font-extrabold text-white mb-w ml-10">
                    More than ₹20 Cr earned by our Agents by selling Credit
                    Cards and Loans
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetEffect;