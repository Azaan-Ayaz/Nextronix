import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../Layout/header";
import Footer from "../Layout/Footer";
import Testimonials from "../Testimonials";
// import ach from '/ach.jpg';
// import performer from '/performer.jpg';
// import doer from '/doer.jpg';
// import executer from '/executer.jpg';
// import {
//   FaPencilAlt,
//   FaBullhorn,
//   FaShoppingCart,
//   FaCogs,
//   FaChartLine,
//   FaCode,
// } from "react-icons/fa";
// import { SiJirasoftware } from "react-icons/si";
// import { MdOutlineDeveloperMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  AOS.refresh();


  return (
    <>
      <div className="md:relative z-10">
        <Header />
      </div>
      <div className="bg-gradient-to-tr from-black via-black to-red-950 md:mb-6 mb-3">
        <div className="flex flex-col items-start md:px-5 md:pt-20">
          <div class="md:mt-20 md:ml-16 md:text-4xl text-xl font-semibold ml-3 text-white bg-clip-text max-md:mt-10 max-md:max-w-full">
            <span class="md:text-5xl">Dive</span> Into The Depths Of
          </div>
          <div class="mt-1.5 md:mt-0 md:ml-16 text-5xl md:text-9xl font-semibold text-white bg-clip-text max-md:ml-2.5" data-aos="fade-right" data-aos-duration="4000">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600">Digital Marketing</span>
          </div>

          <div className="flex justify-center  md:w-full">
            <div className="px-6 flex py-8 mt-10 md:mb-10 bg-gradient-to-b max-md:ml-[22px] from-red-600 via-red-700 to-red-900 rounded-lg shadow-md md:px-4 md:py-6 md:mt-16 md:max-w-[1000px]"
              data-aos="fade-up" data-aos-delay="500">
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                {/* Visit Section */}
                <div className="flex items-center space-x-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46b09a14d4c1db8e15ca968e1b0f0315c5a4f6882c90423cd9b56428edac88fd?"
                    className="md:w-16 md:h-16 w-8 h-8 rounded-full"
                    alt="Visit Icon"
                  />
                  <div className="text-white">
                    <div className="md:text-lg font-semibold">Pay Us a Visit</div>
                    <div className="text-sm">5900 Balcones Drive Ste 100 Austin Texas 78731</div>
                  </div>
                </div>

                {/* Call Section */}
                <div className="flex items-center space-x-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/308d82c5dafb7b52f5b1c5a6f58a9f37768454a5e0f38ec4f77b6febb5b12043?"
                    className="md:w-16 md:h-16 h-8 w-8 rounded-full"
                    alt="Call Icon"
                  />
                  <div className="text-white">
                    <div className="md:text-lg font-semibold">Give Us a Call</div>
                    <div className="text-sm">+1 737 3075543</div>
                  </div>
                </div>

                {/* Message Section */}
                <div className="flex items-center space-x-4">
                  {/* <div className="w-px h-16 bg-violet-300 bg-opacity-30"></div> */}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc10def8531048d8da7edb323ab34be0b42c70e66bd22600513105f253a0fb4?"
                    className="md:w-16 md:h-16 w-8 h-8 rounded-full"
                    alt="Message Icon"
                  />
                  <div className="text-white">
                    <div className="text-lg font-semibold">Send Us a Message</div>
                    <div className="text-sm">sales@nectronixdigital.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-center max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 mt-2.5 max-md:mt-10 max-md:max-w-full">
                <div className="md:text-5xl text-4xl md:ml-28 font-semibold md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 max-md:max-w-full">
                  INTRODUCTION
                </div>

                <div className="md:mt-7 text-3xl md:ml-28 font-light text-white max-md:max-w-full">
                  NECTRONIX DIGITAL
                  <br />
                  SOLUTIONS
                </div>
                <img
                  loading="lazy"
                  src="/Home/homeMan.png"
                  alt="Illustration of a person at home"
                  className="md:mt-16 w-full max-w-full md:max-w-[600px] mx-auto rounded-lg shadow-md"
                />

              </div>
            </div>
            <div className="flex flex-col md:mr-24 md:ml-0 ml-5 w-10/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-lg font-normal md:text-xl md:ml-44 font-poppins text-white max-md:max-w-full">
                  "Nectronix Digital Solutions is your partner in navigating the dynamic world of digital marketing. Elevate your brand with our strategic insights, creative campaigns, and data-driven approach."
                </div>
                <div className="flex flex-col pl-12 md:mt-40 text-4xl font-bold max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <div className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-500 md:text-6xl  max-md:max-w-full">ABOUT</div>
                  <div className="md:mt-6 mr-9 font-light md:text-4xl text-xl text-white text-opacity-90 max-md:mr-2.5 max-md:max-w-full">
                    NECTRONIX DIGITAL SOLUTIONS
                  </div>
                  <div className="md:mt-14 font-normal tracking-tighter text-lg text-white max-md:mt-4 max-md:max-w-full">
                    "At Nectronix Digital Solutions, we're more than just a digital marketing agency – we're your dedicated partner in achieving online success. With a passion for innovation and a commitment to excellence, we specialize in crafting bespoke digital strategies tailored to your unique business needs. Our team of experts brings together diverse skills and experience to deliver cutting-edge solutions that drive growth, engagement, and ROI. From dynamic content creation to targeted advertising campaigns, we leverage the latest technologies and industry best practices to ensure your brand stands out in today's competitive digital landscape. Discover the Nexttronix difference and embark on a journey to digital greatness with us."
                  </div>
                  <div className="justify-center self-start px-10 py-5 md:mt-7 text-xs text-white rounded-[40px] max-md:px-5">
                    <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-600 rounded p-3">
                      <button className="text-lg" onClick={() => { navigate("/about") }}>ABOUT US</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-w-full md:w-[637px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
                <div className="flex md:mt-20 md:ml-20 flex-col px-5 max-md:mt-2.5 max-md:max-w-full">
                  <div className="md:text-6xl text-4xl mt-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 max-md:max-w-full">
                    Services
                  </div>
                  <div className="mt-2 text-4xl font-light text-white max-md:max-w-full">
                    WITH NECTRONIX DIGITAL?
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[21%] max-md:hidden max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd686d836d9908990aba09656e3f3c5a5c5885948ee0ee693f84ee96b74533a1?"
                  className="grow shrink-0 mt-5 max-w-full aspect-[1.35] w-[135px] max-md:mt-7"
                />
              </div>
            </div>
          </div>
          <div className="md:px-20 px-5 w-full max-md:max-w-full">
            {/* First Line */}
            <div className="md:mx-10 md:mt-10">
              <div className="flex justify-center gap-20  md:mx-32 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center items-center aspect-square bg-stone-950 rounded-[40px] bg-opacity-30 w-[219px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/S1.jpg"
                        className="w-full aspect-square rounded-[40px]"
                      />
                    </div>
                    <div className="self-stretch mt-7 text-2xl text-center font-semibold text-white">
                    Designing Content
                     and Videos
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5  text-white md:mb-6 max-md:ml-2.5">
                    we offer expert graphic design services to enhance your brand
                    and communication.
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/graphic-designing")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center items-center aspect-square bg-stone-950 bg-opacity-30 w-[219px] rounded-[40px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/S2.jpg"
                        className="w-full aspect-square rounded-[40px]"
                      />
                    </div>

                    <div className="self-stretch mt-7 text-2xl text-center font-semibold text-white">
                    Digital Marketing
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5  text-white md:mb-12 max-md:ml-2.5">
                    Unlock the full potential of your online presence with our
                    digital marketing
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/digital-marketing")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center items-center aspect-square bg-stone-950 bg-opacity-30 w-[219px] rounded-[40px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/S3.jpg"
                        className="w-full rounded-[40px] aspect-square"
                      />
                    </div>

                    <div className="self-stretch mt-7 text-2xl text-center font-semibold text-white">
                    E-Commerce
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5  md:mb-7 text-white max-md:ml-2.5">
                    Elevate your shopping experience with our seamless e-commerce
                    platform, where you can discover a diverse range of products
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/ecommerce")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center rounded-[40px] items-center aspect-square bg-stone-950 bg-opacity-30 w-[219px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/S4.jpg"
                        className="w-full rounded-[40px] aspect-square"
                      />
                    </div>

                    <div className="self-stretch mt-7 text-2xl text-center font-semibold text-white">
                    Managed Services
                    BPO'S
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5 md:mb-5 text-white max-md:ml-2.5">
                    Experience operational excellence through our managed services
                    BPOs,
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/managed-service-BPO")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>



            {/* Second Line */}
            <div className="md:mx-10 md:mt-10">
              <div className="flex justify-center gap-20  md:mx-32 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center rounded-[40px] items-center aspect-square bg-stone-950 bg-opacity-30 w-[219px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/S5.jpg"
                        className="w-full rounded-[40px] aspect-square"
                      />
                    </div>
                    <div className="self-stretch text-center mt-7 text-2xl font-semibold text-white">
                      Marketing Consultancy
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5 md:mb-10 text-white max-md:ml-2.5">
                      Navigate the complexities of modern business with our marketing
                      consultancy serviceS
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/marketing-consultancy")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center items-center rounded-[40px] aspect-square bg-stone-950 bg-opacity-30 w-[219px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/S6.jpg"
                        className="w-full rounded-[40px] aspect-square"
                      />
                    </div>

                    <div className="self-stretch text-center mt-7 text-2xl font-semibold text-white">
                      App Development
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5  text-white max-md:ml-2.5">
                      Empowering your digital journey with expert web app development,
                      where innovation converges with sleek design 
                      functionality.
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/app-development")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center items-center aspect-square rounded-[40px]  bg-stone-950 bg-opacity-30 w-[219px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/S8.jpg"
                        className="w-full aspect-square rounded-[40px]"
                      />
                    </div>

                    <div className="self-stretch text-center mt-7 text-2xl font-semibold text-white">
                      Web Development
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5 md:mb-10 text-white max-md:ml-2.5">
                      With our team of experienced developers, we offer a wide range of
                      services
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/web-development")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex bg-gradient-to-t from-red-900 via-red-700 to-red-600 flex-col grow items-center px-3 pt-6 pb-10 w-full rounded-[40px] max-md:mt-10">
                    <div className="flex justify-center items-center aspect-square rounded-[40px] bg-stone-950 bg-opacity-30 w-[219px]">
                      <img
                        loading="lazy"
                        srcSet="/Home/soft.jpeg"
                        className="w-full aspect-square rounded-[40px]"
                      />
                    </div>

                    <div className="self-stretch text-center mt-7 text-2xl font-semibold text-white">
                      Software Development
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69462d7c6658be2cd4bb53ac15201704f5ce29cdc6979f4b9fc136b1332ac39f?"
                      className="mt-3.5 max-w-full border border-solid aspect-[100] border-violet-300 border-opacity-30 stroke-[1px] stroke-violet-300 stroke-opacity-30 w-[154px]"
                    />
                    <div className="mt-6 ml-3.5 md:mb-16 text-white max-md:ml-2.5">
                      We are a top-notch provider of Software Development Services.
                    </div>
                    <button className="justify-center px-10 py-5 mt-12 text-xs font-bold text-red-700 bg-white rounded-[40px] max-md:px-5 max-md:mt-10"
                    onClick={()=>{navigate("/software-development")}}>
                      GO TO PAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      {slider }
      </div>
      <div className="flex md:mt-20 mt-16 md:my-4 max-md:mb-3 bg-white flex-col px-5">
  <div className="self-center text-6xl justify-center  max-md:text-3xl font-poppins font-semibold text-black">
    PARTNERS
  </div>
  <div className="flex flex-col gap-5 justify-center md:py-4  mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <div className="md:flex gap-10 justify-center">
      <img
        loading="lazy"
        srcSet="/Home/p1.png"
        className="shrink-0 max-w-full aspect-[0.93] w-[231px] max-md:w-[100px]"
      />
      <img
        loading="lazy"
        srcSet="/Home/logo.png"
        className="shrink-0 max-w-full aspect-[0.93] w-[231px] max-md:w-[100px]"
      />
      <img
        loading="lazy"
        srcSet="/Home/p3.png"
        className="shrink-0 max-w-full aspect-[0.93] w-[231px] max-md:w-[100px]"
      />
      <img
        loading="lazy"
        srcSet="/Home/p4.png"
        className="shrink-0 max-w-full aspect-[0.93] w-[231px] max-md:w-[100px]"
      />
    </div>
    <div className="flex justify-center gap-4">
      <img
        loading="lazy"
        srcSet="/Home/p6.png"
        className="shrink-0 max-w-full aspect-[0.92] w-[230px] max-md:w-[100px]"
      />
      <img
        loading="lazy"
        srcSet="/Home/p5.png"
        className="shrink-0 max-w-full aspect-[0.93] w-[231px] max-md:w-[100px]"
      />
      <img
        loading="lazy"
        srcSet="/Home/p7.png"
        className="shrink-0 max-w-full aspect-[0.93] w-[231px] max-md:w-[100px]"
      />
      <img
        loading="lazy"
        srcSet="/Home/p8.png"
        className="shrink-0 max-w-full aspect-[0.93] w-[231px] max-md:w-[100px]"
      />
    </div>
  </div>
</div>
<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="1" data-height="40" data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="2159506"></div>

      {/* <div className="bg-black md:mt-32 md:mb-3">
        <Testimonials />
      </div> */}
      <Footer />
    </>
  );
};

// const clutch = () =>{
  
// }

const slider = (
  <>
  <div className="text-5xl text-center font-semibold font-poppins mb-5">Testimonials</div>
  <AwesomeSlider>
    {/* First slide */}
   <div className="flex md:flex-rew max-md:flex-col md:gap-10">
    {/* Testimonial 1 */}
    <div className="flex overflow-hidden relative flex-col items-start px-10 pb-9 text-xs text-center aspect-[0.91] fill-red-700 max-w-[500px] text-stone-300">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74a745ef73bacb79c6c0ad11dcf159c420096536e5c2adc995d2b91d67f0709?"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e622eb90e51210ab18eb3c2875a03e0f960650b88cc9aa953b1490a80d0507e?"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="/Home/t1.jpg"
          className="rounded-full relative aspect-square w-[96px]"
        />
        <div className="relative mt-4 text-lg font-semibold font-poppins">Elcat</div>
        {/* <div className="relative mt-3">Lead designer</div> */}
        
        <div className="relative self-stretch text-lg mt-2">
        I'm extremely satisfied with the web development services provided by their team. They turned my vision into reality with a stunning and user-friendly website. Their attention to detail and technical expertise are truly impressive. I highly recommend their web development services!{" "}
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="flex overflow-hidden relative flex-col items-start px-10 pb-9 text-xs text-center aspect-[0.91] fill-red-700 max-w-[500px] text-stone-300">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74a745ef73bacb79c6c0ad11dcf159c420096536e5c2adc995d2b91d67f0709?"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e622eb90e51210ab18eb3c2875a03e0f960650b88cc9aa953b1490a80d0507e?"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="/Home/t3.jpg"
          className="rounded-full relative aspect-square w-[96px]"
        />
        <div className="relative mt-4 text-lg font-semibold font-poppins">Certified Credit <br/> Consultants</div>
        {/* <div className="relative mt-3">Lead designer</div> */}
        
        <div className="relative font-poppins text-lg self-stretch mt-2">
        Thanks to their digital marketing expertise, our online presence has skyrocketed! Their strategies have boosted our website traffic and conversions, resulting in significant business growth{" "}
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="flex overflow-hidden relative flex-col items-start px-10 pb-9 text-xs text-center aspect-[0.91] fill-red-700 max-w-[500px] text-stone-300">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74a745ef73bacb79c6c0ad11dcf159c420096536e5c2adc995d2b91d67f0709?"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e622eb90e51210ab18eb3c2875a03e0f960650b88cc9aa953b1490a80d0507e?"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="/Home/t5.jpg"
          className="rounded-full relative aspect-square w-[96px]"
        />
        <div className="relative mt-4 text-lg font-semibold font-poppins">NDC-BPO</div>
        {/* <div className="relative mt-3">Lead designer</div> */}
        
        <div className="relative self-stretch text-lg font-poppins mt-2">
        Working with their digital marketing team has been a game-changer for us. They've consistently delivered exceptional results, exceeding our expectations. Their deep understanding of our target audience and creative campaigns have helped us connect with customers on a whole new level{" "}
        </div>
      </div>
    </div>
   </div>

    {/* Second SLide */}
    <div className="flex md:flex-rew max-md:flex-col md:gap-10">
    {/* Testimonial 1 */}
    <div className="flex overflow-hidden relative flex-col items-start px-10 pb-9 text-xs text-center aspect-[0.91] fill-red-700 max-w-[500px] text-stone-300">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74a745ef73bacb79c6c0ad11dcf159c420096536e5c2adc995d2b91d67f0709?"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e622eb90e51210ab18eb3c2875a03e0f960650b88cc9aa953b1490a80d0507e?"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="/Home/t2.jpg"
          className="rounded-full relative aspect-square w-[96px]"
        />
        <div className="relative mt-4 text-lg font-poppins font-semibold">Rhouse</div>
        {/* <div className="relative mt-3">Lead designer</div> */}
        
        <div className="relative self-stretch font-poppins text-lg mt-2">
        We couldn't be happier with the lead generation services provided by their team. They've helped us optimize our lead generation campaigns, resulting in a higher conversion rate and improved ROI. Their data-driven approach and attention to detail have made a significant impact on our business{" "}
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="flex overflow-hidden relative flex-col items-start px-10 pb-9 text-xs text-center aspect-[0.91] fill-red-700 max-w-[500px] text-stone-300">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74a745ef73bacb79c6c0ad11dcf159c420096536e5c2adc995d2b91d67f0709?"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e622eb90e51210ab18eb3c2875a03e0f960650b88cc9aa953b1490a80d0507e?"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="/Home/FA.jpg"
          className="rounded-full relative aspect-square w-[96px]"
        />
        <div className="relative mt-4 text-lg font-poppins font-semibold">Fortune Academy</div>
        {/* <div className="relative mt-3">Lead designer</div> */}
        
        <div className="relative self-stretch font-poppins text-lg mt-2">
        We highly recommend their marketing plan and strategies. They have a keen eye for detail and a strategic mindset that has transformed our marketing approach. Their ability to identify new opportunities and implement effective strategies has led to significant growth for our business{" "}
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="flex overflow-hidden relative flex-col items-start px-10 pb-9 text-xs text-center aspect-[0.91] fill-red-700 max-w-[500px] text-stone-300">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74a745ef73bacb79c6c0ad11dcf159c420096536e5c2adc995d2b91d67f0709?"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex overflow-hidden relative flex-col items-center px-10 pb-20 aspect-[0.88] fill-stone-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e622eb90e51210ab18eb3c2875a03e0f960650b88cc9aa953b1490a80d0507e?"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="/Home/t4.jpg"
          className="rounded-full relative aspect-square w-[96px]"
        />
        <div className="relative mt-4 text-lg font-poppins font-semibold">Needs</div>
        {/* <div className="relative mt-3">Lead designer</div> */}
        
        <div className="relative self-stretch text-lg font-poppins mt-2">
        I can't thank their SEO team enough for their incredible work. They have propelled our website to the top of search engine rankings, resulting in a significant increase in organic traffic. Their expertise and attention to detail are unmatched!{" "}
        </div>
      </div>
    </div>
   </div>
  </AwesomeSlider>
  </>
);

export default Home;
