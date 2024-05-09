import React from 'react';
import { FaSearch, FaUsers, FaPencilAlt, FaBullhorn, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../../Layout/navbar';
import Header from '../../Layout/header';
import AOS from 'aos';
import 'aos/dist/aos.css';


const DigitalMarketing = () => {

  const navigate = useNavigate()

  const eventHandler = (page) =>{
    navigate(page)
  }


  

  return (
    <>
    <Header/>
    {/* <Navbar/> */}
    {/* import * as React from "react"; */}

    <div className="flex flex-col bg-gradient-to-tl from-red-[C20D0D] to-blue-[181E41]">

      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-4xl tracking-wide text-center text-white fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] leading-[65px] min-h-[553px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/Marketing/M1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative justify-center items-center md:text-2xl font-poppins text-lg px-16 py-14 max-w-full bg-red-950 bg-opacity-70 w-[1188px] max-md:px-5 max-md:max-w-full">
          Welcome to Nectronix Digital, your one-stop solution for effective and
          result-driven digital marketing services. Our comprehensive range of
          services is designed to elevate your online presence and help you
          achieve your business goals.
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full font-bold text-white bg-[linear-gradient(113deg,#984D38_-30.3%,#181E41_58.12%)] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-6 w-full max-w-[1237px] mb-[641px] max-md:mb-10 max-md:max-w-full">
          <div className="flex flex-col self-end max-w-full w-[full]">
            <div className="text-5xl tracking-wide font-semibold leading-[90px] max-md:max-w-full max-md:text-4xl">
              SMM Services
            </div>
            <div className="mt-11 md:text-xl text-lg font-normal tracking-wide md:leading-9 text-white max-md:mt-10 max-md:max-w-full">
              Engage with your target audience and build a strong online
              community with our social media management and marketing services.
              We create tailored social media strategies to enhance brand
              awareness, drive engagement, and generate leads, helping you
              connect with your customers on platforms like Facebook, Instagram,
              Twitter, LinkedIn, and more.
            </div>
            <div className="flex flex-col justify-center px-6 py-3 mt-7 max-w-full text-base leading-6 bg-red-900 rounded-lg w-[165px] max-md:px-5">
              <button className="flex gap-2"onClick={()=>eventHandler("/smm")}>
                <div>Go to Page</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e949e6f0c53a8290b9869dc7d2e4ce69797fad84e82fa312e025709ea7f9db87?"
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
          <div className="shrink-0 mx-5 mt-28 max-w-full border-2 border-solid bg-white bg-opacity-50 border-white border-opacity-50 h-[5px] w-[1197px] max-md:mt-10 max-md:mr-2.5" />
          <div className="mt-24 text-5xl tracking-wide font-semibold leading-[90px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            SEO Services
          </div>
          <div className="mt-11 md:text-xl text-lg font-normal tracking-wide md:leading-9 text-white max-md:mt-10 max-md:max-w-full">
            At Nectronix Digital, we specialize in optimizing your website to
            boost its search engine ranking. Our expert team uses cutting-edge
            strategies and techniques to ensure that your website appears at the
            top of search engine results pages (SERPs), driving organic traffic
            and increasing visibility.
          </div>
          <div className="flex flex-col justify-center px-6 py-3 mt-6 max-w-full text-base leading-6 bg-red-900 rounded-lg w-[165px] max-md:px-5">
            <button className="flex gap-2" onClick={()=>eventHandler("/seo")}>
              <div>Go to Page</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e949e6f0c53a8290b9869dc7d2e4ce69797fad84e82fa312e025709ea7f9db87?"
                className="shrink-0 w-6 aspect-square"
              />
            </button>
          </div>
          <div className="shrink-0 mx-5 mt-16 max-w-full border-2 border-solid bg-white bg-opacity-50 border-white border-opacity-50 h-[5px] w-[1197px] max-md:mt-10 max-md:mr-2.5" />
          <div className="flex flex-col self-end mt-24 mr-7 max-w-full w-[full] max-md:mt-10 max-md:mr-2.5">
            <div className="text-5xl tracking-wide font-semibold leading-[90px] max-md:max-w-full max-md:text-4xl">
              Content Marketing
            </div>
            <div className="mt-8 md:text-xl text-lg font-normal tracking-wide md:leading-9 text-white max-md:max-w-full">
              Quality content is key to capturing the attention of your
              audience. Our content marketing services focus on creating
              compelling and relevant content that resonates with your target
              market. From blog posts to infographics, we develop content that
              drives traffic, engages users, and enhances brand credibility.
            </div>
            <div className="flex flex-col justify-center px-6 py-3 mt-6 max-w-full text-base leading-6 bg-red-900 rounded-lg w-[165px] max-md:px-5">
              <button className="flex gap-2" onClick={()=>eventHandler("/content-marketing")}>
                <div>Go to Page</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e949e6f0c53a8290b9869dc7d2e4ce69797fad84e82fa312e025709ea7f9db87?"
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="shrink-0 border-2 border-solid bg-white bg-opacity-50 border-white border-opacity-50 h-[5px] max-md:max-w-full" />
            <div className="mt-24 text-5xl font-semibold tracking-wide leading-[90px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Digital Advertising
            </div>
            <div className="mt-8 md:text-xl text-lg font-normal tracking-wide md:leading-9 text-white max-md:max-w-full">
              Maximize your reach and drive conversions with our digital
              advertising solutions. We create targeted ad campaigns across
              various platforms such as Google Ads and Facebook Ads to reach
              your ideal customers at the right time and place.
            </div>
            <div className="flex flex-col justify-center px-6 py-3 mt-6 max-w-full text-base leading-6 bg-red-900 rounded-lg w-[205px] max-md:px-5">
              <button className="flex gap-2 pr-2"onClick={()=>eventHandler("/advertising")}>
                <div>Go to Page</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e949e6f0c53a8290b9869dc7d2e4ce69797fad84e82fa312e025709ea7f9db87?"
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
          <div className="shrink-0 mt-24 border-2 border-solid bg-white bg-opacity-50 border-white border-opacity-50 h-[5px] max-md:mt-10 max-md:max-w-full" />
          <div className="flex flex-col self-end mt-24 max-w-full w-[full] max-md:mt-10">
            <div className="text-5xl tracking-wide font-semibold leading-[90px] max-md:max-w-full max-md:text-4xl">
              Lead Generation
            </div>
            <div className="mt-11 text-lg md:text-xl font-normal text-normal tracking-wide md:leading-9 text-white max-md:mt-10 max-md:max-w-full">
              By leveraging the power of data analytics and automation tools, we
              can optimize your lead generation process and ensure higher ROI.
              Our team continuously monitors the performance of your campaigns
              and makes necessary adjustments to maximize results.
            </div>
            <div className="flex flex-col justify-center px-6 py-3 mt-7 max-w-full text-base leading-6 bg-red-900 rounded-lg w-[165px] max-md:px-5">
              <button className="flex gap-2"onClick={()=>eventHandler("/lead-generation")}>
                <div>Go to Page</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e949e6f0c53a8290b9869dc7d2e4ce69797fad84e82fa312e025709ea7f9db87?"
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
            </div>
          </div>
          <div className="shrink-0 mt-24 border-2 border-solid bg-white bg-opacity-50 border-white border-opacity-50 h-[5px] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </div>


    </>
  );
};

export default DigitalMarketing;
