"use client"
import React from 'react';

import Image from 'next/image';
import growth from "../../../public/Growth.png"
const WeEvolved = () => {
  return (
    <div className="mt-2 mb-4">
      <p className="text-center text-2xl md:text-4xl font-bold">
        How we evolved over the years
      </p>
      <div className="w-full overflow-x-scroll">
        <Image
          className="max-w-screen-2xl mx-auto my-10"
          src={growth}
          alt="Background Image"
        />
      </div>
    </div>
  );
};

export default WeEvolved;