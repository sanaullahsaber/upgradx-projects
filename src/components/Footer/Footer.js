"use client";
import React from "react";
import "./Footer.css";
import Image from "next/image";
import bgLogo from "../../../public/zet_logo_white.0.svg";
import { HiOutlineMail } from "react-icons/Hi";
import { FaPhoneAlt } from "react-icons/Fa";
import { AiOutlineLinkedin } from "react-icons/Ai";

const Footer = () => {
  return (
    <div className="footer-bg absolute w-full pb-60  ">
      <footer
        style={{ borderBottom: "1px solid rgb(236, 239, 245)" }}
        className="footer pt-6 sm:px-24 lg:px-48 text-base-content "
      >
        <div className="items-center grid-flow-col">
          <Image src={bgLogo} width={90} height={47.93} alt="Zet-logo" />
        </div>
      </footer>

      <footer className="footer grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-2 my-10 sm:px-24 lg:px-48 text-base-content">
        {/*  */}
        <div className="text-white">
          <span className="footer-title">COMPANY</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Partner with us</a>
          <a className="link link-hover">Blog</a>
        </div>
        {/*  */}
        <div className="text-white">
          <span className="footer-title">LEGAL</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover"> Terms of Use</a>
        </div>
        {/*  */}
        <div className="text-white">
          <span className="footer-title">CONTACT</span>
          <a className="link link-hover flex ">
            <div>
              <HiOutlineMail className="w-5 h-5 mr-2"></HiOutlineMail>
            </div>
            hi@zetapp.in
          </a>
          <a className="link link-hover text-xs  flex">
            <div>
              <FaPhoneAlt className="w-4 h-4 mr-2"></FaPhoneAlt>
            </div>
            +91-7417274072bs
          </a>
        </div>

        {/*  */}
        <div className="text-white">
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            {/* Linkedin icon */}
            <a href="https://www.linkedin.com/company/zetapp-in/">
              <Image
                src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg"
                width={32}
                height={32}
                alt="Zet-logo"
              />
            </a>
            {/* Instagram icon */}
            <a href="https://www.instagram.com/zetapp.in/">
              <Image
                src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg"
                width={32}
                height={32}
                alt="instagram logo"
              />
            </a>
            {/* facebook icon */}
            <a href="https://www.facebook.com/zetapp.in/">
              <Image
                src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg"
                width={32}
                height={32}
                alt="facebook logo"
              />
            </a>
            {/* Telegram icon */}
            <a href="https://web.telegram.org/k/#@GetOneCode/">
              <Image
                src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg"
                width={32}
                height={32}
                alt="Zet-logo"
              />
            </a>
            {/* Whatsapp icon */}
            <a href="https://www.linkedin.com/company/zetapp-in/">
              <Image
                src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg"
                width={32}
                height={32}
                alt="Whatsapp-logo"
              />
            </a>
          </div>
        </div>
        {/*  */}
      </footer>
    </div>
  );
};

export default Footer;
