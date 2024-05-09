import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-black opacity-100 shadow-lg md:relative sticky top-0 z-50">
      <div className="md:px-10 flex flex-wrap items-center justify-between mx-auto p-5">
        <div className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse">
          <img
            src="/Main/final.png"
            className="w-auto h-10 md:h-auto md:w-80"
            alt="Nectronix Logo"
          />
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={open ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {open ? <IoClose className="w-5 h-5" /> : <IoMdMenu className="w-5 h-5" />}
        </button>
        <div
          className={`w-full md:flex md:w-auto duration-500 ease-in ${
            open ? "block" : "hidden"
          } md:block`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-red-600 rounded-lg max-md:bg-red-600 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:text-red-700 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                <FaHome className="w-7 h-7" />
              </Link>
            </li>
            <li className="relative">
              <button
                className={`block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 md:dark:text-red-700 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  isServicesOpen ? "text-blue-800" : "text-white"
                } hover:text-blue-500 md:text-xl font-semibold font-poppins text-md cursor-pointer`}
                onClick={handleServicesToggle}
              >
                Services
              </button>
              <ul
                className={`absolute left-0 top-full bg-white rounded-lg shadow-lg mt-2 w-60 ${
                  isServicesOpen ? "block" : "hidden"
                }`}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <li>
                  <Link to="/web-development" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/software-development" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/app-development" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link to="/marketing-consultancy" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    Marketing Consultancy
                  </Link>
                </li>
                <li>
                  <Link to="/managed-service-bpo" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    Managed Service BPO
                  </Link>
                </li>
                <li>
                  <Link to="/ecommerce" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link to="/graphic-designing" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    Graphic Designing
                  </Link>
                </li>
                <li>
                  <Link to="/digital-marketing" className="font-semibold font-poppins text-gray-800 block px-4 py-2 hover:bg-gray-200">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:dark:text-red-700 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white font-semibold font-poppins md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 md:text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:dark:text-red-700 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white font-semibold font-poppins md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
