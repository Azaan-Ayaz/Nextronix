import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <>
    <div className="flex flex-col justify-center text-3xl text-white bg-white">
      <div className="flex justify-center items-center px-16 py-11 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1599px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/Main/fFooter.png"
            className="max-w-full aspect-[3.23] w-[535px] mb-6"
          />
          <hr className='border-white border-2 w-full' />
          <div className="mt-16 text-2xl text-center max-md:mt-10 max-md:max-w-full">
            Nectronix Digital Solutions is your partner in navigating the
            dynamic world of digital marketing. <br />
            Elevate your brand with our strategic insights, creative campaigns,
            and data-driven approach.
          </div>
          <div className="mt-6 max-md:mt-6 cursor-pointer" onClick={() => redirectTo('/')}>Homepage</div>
          <div className="mt-4 cursor-pointer" onClick={() => redirectTo('/about')}>About Us</div>
          <div className="mt-4 max-md:mt-6 cursor-pointer" onClick={() => redirectTo('/contact')} >Contact Us</div>
          <div className="mt-16 text-xl font-light max-md:mt-10">
            © 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
