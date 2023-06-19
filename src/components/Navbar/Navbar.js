"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="bg-[rgb(255, 255, 255)] border-b-2">
        {/* 1st start */}
        <div className="max-w-full mx-auto px-4 py-2 sm:px-12 lg:px-24">
          {/* 2nd start */}
          <div className="flex items-center justify-between h-16 ">
            {/* 3rd start */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white font-bold text-xl">
                  <Image
                    src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
                    width={90}
                    height={47.93}
                    alt="Zet-logo"
                  />
                </Link>
              </div>
              {/* 3rd end */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-black  px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* 2nd end */}
          </div>
          {/* 1st end */}
        </div>

        {/* small screen   */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-black  block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
