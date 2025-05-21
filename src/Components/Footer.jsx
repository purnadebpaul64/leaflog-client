import React from "react";
import logo from "../assets/leaflog-logo.png";
import fooimg from "../assets/footer-bg.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div
      className="bg-cover bg-bottom py-10"
      style={{ backgroundImage: `url(${fooimg})` }}
    >
      <div className="w-11/12 mx-auto">
        <div className="lg:w-6/12 mx-auto flex flex-col gap-5 items-center text-center">
          <Link to={"/"}>
            <img className="w-44" src={logo} alt="" />
          </Link>
          <p>
            At LeafLog, we make plant care simple, personal, and joyful —
            helping you grow healthier plants with confidence and ease.
          </p>
        </div>
        <div className="flex justify-center pt-5 gap-5">
          <a href="">
            <div className="border-1 border-gray-500 rounded-lg p-3 hover:bg-primary hover:text-white hover:border-primary transition duration-200">
              <FaFacebookF size={25} />
            </div>
          </a>
          <a href="">
            <div className="border-1 border-gray-500 rounded-lg p-3 hover:bg-primary hover:text-white hover:border-primary transition duration-200">
              <FaInstagram size={25} />
            </div>
          </a>
          <a href="">
            <div className="border-1 border-gray-500 rounded-lg p-3 hover:bg-primary hover:text-white hover:border-primary transition duration-200">
              <FaLinkedinIn size={25} />
            </div>
          </a>
          <a href="">
            <div className="border-1 border-gray-500 rounded-lg p-3 hover:bg-primary hover:text-white hover:border-primary transition duration-200">
              <FiGithub size={25} />
            </div>
          </a>
          <a href="">
            <div className="border-1 border-gray-500 rounded-lg p-3 hover:bg-primary hover:text-white hover:border-primary transition duration-200">
              <FaXTwitter size={25} />
            </div>
          </a>
        </div>
        <div className="border-b-1 border-gray-400  py-3"></div>
        <div>
          <p className="text-center text-gray-600 pt-4">
            © 2025 LeafLog. All rights reserved. Designed and developed by{" "}
            <a className="text-black font-bold" href="">
              Purna Deb Paul.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
