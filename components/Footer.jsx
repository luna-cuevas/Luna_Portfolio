import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t-2 flex py-2 w-screen h-fit z-50 bg-[#222] mt-8 border-gray-700">
      <div className="w-full m-auto text-center">
        Copyright © {currentYear} <br /> Luna Cuevas
      </div>
    </div>
  );
};

export default Footer;
