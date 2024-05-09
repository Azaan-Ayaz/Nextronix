import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md md:flex md:py-5 md:px-2 md:justify-between md:items-center">
      <div className="flex items-center justify-between p-4 md:p-0">
        <div className="flex-shrink-0">
          <img src="final.png" alt="Logo" className="w-32" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">  
              {isOpen ? (
                <FaXmark />
              ) : (
                <IoIosArrowDropdownCircle />
              )}
          </button>
        </div>
      </div>
      <div className={`px-2 pt-2 pb-4 md:flex md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="md:flex md:space-x-4">
        <li>
            <Link to="/" className={`text-blue-600 font-poppins ${location.pathname === '/advertising' ? 'underline' : ''}`}>
            <FaHome className='md:w-[24px] md:h-[24px]' />
            </Link>
          </li>

          <li>
            <Link to="/advertising" className={`text-blue-600 font-poppins ${location.pathname === '/advertising' ? 'underline' : ''}`}>
              Advertising
            </Link>
          </li>
          <li>
            <Link to="/smm" className={`text-blue-600 font-poppins ${location.pathname === '/smm' ? 'underline' : ''}`}>
              SMM
            </Link>
          </li>
          <li>
            <Link to="/seo" className={`text-blue-600 font-poppins ${location.pathname === '/seo' ? 'underline' : ''}`}>
              SEO
            </Link>
          </li>
          <li>
            <Link to="/lead-generation" className={`text-blue-600 font-poppins ${location.pathname === '/lead-generation' ? 'underline' : ''}`}>
              Lead Generation
            </Link>
          </li>
          <li>
            <Link to="/content-marketing" className={`text-blue-600 font-poppins ${location.pathname === '/content-marketing' ? 'underline' : ''}`}>
              Content Marketing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
