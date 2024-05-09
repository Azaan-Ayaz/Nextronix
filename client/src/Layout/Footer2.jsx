import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Footer2 = () => {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <hr className="border-blue-500" />
      <div className="bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between py-8 px-4">
          <div className="flex justify-center md:w-1/4 w-2/3 mb-8 md:mb-0">
            <img src="/full.png" alt="Nectronix" className="w-full max-w-xs" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:w-2/4">
            <div className="text-gray-800">
              <div className="text-blue-600 font-poppins text-lg font-semibold mb-2">GET IN TOUCH</div>
              <div className="text-sm mb-2 flex items-center gap-1"><CiLocationOn /> 36E1, PECHS Block 6 Karachi</div>
              <div className="text-sm mb-2 flex items-center gap-1">
                <a href="mailto:info@techsol.com" className="text-blue-500 hover:underline">info@techsol.com</a>
              </div>
              <div className="text-sm mb-2 flex items-center gap-1"><BsTelephone /> +92 2135867521-22</div>
            </div>
            <div className="text-gray-800">
              <div className="font-semibold text-blue-600 font-poppins mb-4">QUICK LINKS</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/digital-marketing")}>DIGITAL MARKETING</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/about-us")}>ABOUT US</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/privacy-policy")}>PRIVACY POLICY</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/terms-of-services")}>TERMS OF SERVICES</div>
              <div className="cursor-pointer text-sm mb-2" onClick={() => redirectTo("/disclaimer")}>DISCLAIMER</div>
            </div>
        </div>
        </div>
        <hr className="border-white items-center" />
        <div className="text-white text-lg text-center py-4 bg-blue-600">All rights reserved</div>
      </div>
    </>
  );
};

export default Footer2;
