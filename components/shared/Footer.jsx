import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-80 md:mt-[150px]">
      <div className="bg-[#1E5631] py-[30px] font-play text-center h-[220px]">
        {/* Social Icons */}
        <div className="w-full my-1 py-[0.6%] text-[#e8d1f4] text-[25px] flex justify-center space-x-6">
          <a href="#" className="transition duration-500 hover:text-white">
            <Facebook size={25} />
          </a>
          <a href="#" className="transition duration-500 hover:text-white">
            <Instagram size={25} />
          </a>
          <a href="#" className="transition duration-500 hover:text-white">
            <Youtube size={25} />
          </a>
          <a href="#" className="transition duration-500 hover:text-white">
            <Twitter size={25} />
          </a>
        </div>

        {/* Links */}
        <div className="w-full my-4 text-sm">
          <ul className="flex justify-center">
            {["Contact us", "Our Services", "Privacy Policy", "Terms & Conditions", "Career"].map((text) => (
              <li key={text} className="inline-block mx-[30px]">
                <a href="#" className="text-[#e8d1f4] transition duration-500 hover:text-white">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="w-full my-1 py-[0.6%] text-[#e8d1f4] text-[0.8em]">
          ecoNova Copyright © 2024 ecoNova. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
