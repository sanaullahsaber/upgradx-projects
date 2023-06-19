'use client'
import React from 'react';

import img1 from "../../../public/Featured/EconomicTimes.png"
import img2 from "../../../public/Featured/Inc42.png"
import img3 from "../../../public/Featured/mint.png"
import img4 from "../../../public/Featured/YourStory.png"
import img5 from "../../../public/Featured/BusinessStandard.png"
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {
  return (
    <div className="bg-[#FAFBFE] ">
      <div className="max-w-screen-2xl mx-auto mt-20">
        <p className="text-4xl md:p-0 p-5 font-extrabold text-[#2F3440]">
          Got Featured
        </p>
        <div className="mt-10 mb-20 grid grid-cols-5 gap-3 ">
          <div>
            <Link
              href="https://economictimes.indiatimes.com/tech/funding/onecode-has-raised-13-million-in-fresh-funding-led-by-general-catalyst/articleshow/90571172.cms"
              target="_blank"
            >
              <Image src={img1} alt="logo" />
            </Link>
          </div>
          <div>
            <Link
              href="https://inc42.com/buzz/fintech-startup-onecode-raises-13mn-in-series-a-round-led-by-general-catalyst/"
              target="_blank"
            >
              <Image src={img2} alt="logo" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.livemint.com/companies/start-ups/onecode-raises-5-million-led-by-sequoia-s-surge-and-nexus-venture-partners-11626329270757.html"
              target="_blank"
            >
              <Image src={img3} alt="logo" />
            </Link>
          </div>
          <div>
            <Link
              href="https://yourstory.com/2022/03/funding-alert-onecode-series-a-general-catalyst-financial-services"
              target="_blank"
            >
              <Image src={img4} alt="logo" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.business-standard.com/article/companies/onecode-raises-5-mn-led-by-sequoia-capital-s-surge-nexus-venture-partners-121071500470_1.html"
              target="_blank"
            >
              <Image src={img5} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;