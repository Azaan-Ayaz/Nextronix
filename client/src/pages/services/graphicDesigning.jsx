import React, { useEffect } from 'react';
import Header from '../../Layout/header';
import Footer from '../../Layout/Footer';
import { FaGem, FaVideo, FaCube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GraphicDesigning = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/contact')
  }


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
      <Header />
      <div className='bg-black'>
        {/* import * as React from "react"; */}


        <div className="flex flex-col items-center p-20 rounded-xl max-md:px-5 bg-gradient-to-l from-black via-black to-red-950">
          <div className="flex gap-5 mt-6 w-full text-7xl font-bold uppercase md:leading-[76px] max-w-[1672px] md:tracking-[2.76px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl ">
            <div className="flex-auto my-auto bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-red-600 max-md:max-w-full max-md:text-4xl max-md:leading-[35px]" data-aos="fade-right"
            data-aos-duration="4000">
              Designing your vision, pixel by pixel.
            </div>
            <img
              loading="lazy"
              srcSet="/graphic/G1.png"
              className="w-6/12 aspect-[0.71] max-md:max-w-full"
            />
          </div>
          <div class="overflow-hidden relative md:text-2xl flex flex-col justify-center items-center px-10 py-6 mt-16 shadow-2xl text-lg bg-red-700 text-white font-semibold tracking-wider leading-8 text-center uppercase border border-solid border-white border-opacity-20 rounded-lg" data-aos="fade-right" data-aos-duration="9000">
    <div>
        <p class="">Do you want your intended audience to interact more with your social media posts?</p>
        
    </div>
</div>

          <div className="mt-10 text-5xl font-bold text-center uppercase bg-clip-text text-transparent bg-gradient-to-l from-red-600 to-red-900  tracking-[1.64px] w-[718px] max-md:mt-10 max-md:max-w-full max-md:text-2xl max-md:leading-[30px]" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="300">
            Don’t worry we have you covered
          </div>
          <div className="justify-center px-14 md:pb-20 text-lg mt-10 max-w-full md:text-3xl font-normal tracking-tight leading-8 max-md:leading-5 text-center text-white w-[1531px] max-md:px-5 max-md:mt-3 max-md:max-w-full"  data-aos="fade-right" data-aos-duration="9000" data-aos-delay="600">
            At Nectronix Digital Solutions, we believe that great design is not just
            about aesthetics, but also about effectively communicating your brand
            message. That's why we take the time to understand your business goals
            and target audience, ensuring that every design we create aligns with
            your brand identity and resonates with your customers.
          </div>
         
         

          <div className="overflow-hidden px-8 py-4 mt-11 max-w-full border border-solid shadow-lg backdrop-blur-[25px] border-white border-opacity-20 w-[1531px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/graphic/G3.png"
                  className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-semibold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-l from-red-800 to-red-600 leading-[55.96799999999999px] max-md:max-w-full max-md:text-4xl" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="300">
                  Creative Skills
                  </div>
                  <div className="mt-6 md:text-2xl font-poppins tracking-wider leading-6 text-white max-md:max-w-full" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="500">
                  Whether it's designing Social Media Posts or crafting a User
                    Interface for a Website, we've got you covered. Our expertise
                    spans a diverse range of design needs, ensuring that you get the
                    best possible results for your project. Let us help bring your
                    vision to life with our top-notch design services.
                    <br />
                    <span className='text-red-700'>Starting from Just $149/design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="overflow-hidden px-8 py-4 mt-11 max-w-full border border-solid shadow-lg backdrop-blur-[25px] border-white border-opacity-20 w-[1531px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/graphic/G3.png"
                  className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-semibold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-l from-red-800 to-red-600 leading-[55.96799999999999px] max-md:max-w-full max-md:text-4xl" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="300">
                  Videos and Animations
                  </div>
                  <div className="mt-6 md:text-2xl font-poppins tracking-wider leading-6 text-white max-md:max-w-full" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="500">
                    Our team, comprising skilled videographers, animators, and video
                editors, possesses a wealth of knowledge when it comes to crafting
                videos that are both entertaining and informative. With access to
                cutting-edge technological tools and our own creative talent, we
                have the ability to produce visually captivating videos that are
                sure to capture the attention of any viewer.
                    <br />
                    <span className='text-red-700'>Starting from Just $349/video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="overflow-hidden px-8 py-4 mt-11 max-w-full border border-solid shadow-lg backdrop-blur-[25px] border-white border-opacity-20 w-[1531px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/graphic/G4.png"
                  className="grow w-full aspect-[1.19] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl font-semibold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-l from-red-800 to-red-600 leading-[55.96799999999999px] max-md:max-w-full max-md:text-4xl" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="300">
                    NFTs
                  </div>
                  <div className="mt-6 md:text-2xl font-poppins tracking-wider leading-6 text-white max-md:max-w-full" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="500">
                    Our team has dedicated ourselves to perfecting the craft of
                    crafting the most captivating and immersive NFTs currently
                    available on the market. We take pride in offering both 3D and
                    2D NFTs that are sure to impress even the most discerning
                    collectors and enthusiasts. Whether you're looking for a
                    stunning visual experience or a unique investment opportunity,
                    our NFTs are designed to meet your needs and exceed your
                    expectations. Allow us to show you the level of quality and
                    excellence that we bring to every project we undertake.
                    <br />
                    <span className='text-red-700'>Starting from Just $249/NFT design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 md:py-9 md:mt-16 max-w-full text-3xl font-semibold tracking-normal text-center uppercase shadow-2xl backdrop-blur-[25px]  min-h-[90px] w-[1597px] max-md:px-5 max-md:mt-6">
            <div className="relative md:ml-6 bg-clip-text text-transparent md:text-5xl font-semibold z-10 bg-gradient-to-r from-red-800 to-red-600">WHY CHOOSE US ?</div>
          </div>
          <div className="md:mt-10 w-full max-w-[1501px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] bg-gradient-to-t from-gray-600 to-gray-300 shadow-2xl rounded-xl max-md:ml-0 max-md:mb-2 max-md:w-full" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="300">
                <div className="grow justify-center px-8 md:pt-24 pb-9 md:pb-20 w-full md:text-2xl tracking-tight md:leading-7 text-center text-normal font-poppins max-md:px-5 max-md:mt-10 max-md:max-w-full"  >
                  We pride ourselves on our creativity, attention to detail, and
                  ability to deliver stunning visual solutions that leave a lasting
                  impression. Our team stays up-to-date with the latest design
                  trends and technologies to ensure that we provide you with
                  cutting-edge designs that set you apart from the competition.
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] bg-gradient-to-t from-gray-600 to-gray-300 shadow-2xl max-md:mb-2 rounded-xl max-md:ml-0 max-md:w-full"data-aos="fade-right" data-aos-duration="9000" data-aos-delay="450">
                <div className="grow justify-center px-16 md:pt-20 pb-9 md:pb-16 w-full md:text-2xl tracking-tight leading-7 text-center text-normal font-poppins max-md:pr-5 max-md:pl-7 max-md:mt-10 max-md:max-w-full" >
                  When you work with us, you can expect a seamless and collaborative
                  design process. We value your input and ideas and strive to
                  involve you at every step, from the initial concept development to
                  the final design delivery. Our goal is to not only meet but exceed
                  your expectations.
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] bg-gradient-to-t from-gray-600 to-gray-300 shadow-2xl rounded-xl max-md:ml-0 max-md:w-full" data-aos="fade-right" data-aos-duration="9000" data-aos-delay="600">
                <div className="grow justify-center px-16 md:pt-20 pb-9 md:pb-20 w-full md:text-2xl tracking-tight leading-7 text-center text-normal font-poppins max-md:px-5 max-md:mt-10 max-md:max-w-full"
                >
                  So, whether you are a start-up looking to establish your brand or
                  an established business seeking a design refresh, Graphic
                  Designing Services is here to help. Contact us today to discuss
                  your design needs and let us bring your vision to life!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GraphicDesigning;
