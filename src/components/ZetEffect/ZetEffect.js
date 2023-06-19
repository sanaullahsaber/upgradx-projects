'use client'
import React from 'react';
import './ZetEffect.css'
import zetImg from "../../../public/peeps1.png"
import Image from 'next/image';




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
              className="sc-eKCZMz cmROcX"
            ></Image>
            <div className="hufdxl">
              <p className="gHPgIl">THE ZET EFFECT</p>
              {/*  */}
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetEffect;