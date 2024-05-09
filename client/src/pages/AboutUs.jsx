import React, { useEffect } from 'react';
import Header from '../Layout/header';
import Footer from '../Layout/Footer';
// import { FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';


const AboutUs = () => {

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


  const navigate = useNavigate()

  const hanldeSubmit = ()=>{
    navigate("/contact")
  }

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center bg-white border-solid border-[24px] border-neutral-200">
      <div className="flex overflow-hidden relative flex-col items-start px-16 pt-14 pb-7 w-full capitalize min-h-[593px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/about/Header.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 text-5xl font-semibold text-white max-md:flex-row max-md:text-4xl">
          <div className="shrink-0 my-auto w-1.5 bg-red-700 rounded-xl shadow-sm h-[100px]" data-aos="fade-left" data-aos-duration="5000" data-aos-delay="1000" />
          <div className="flex-auto max-md:max-w-full max-md:text-2xl " data-aos="fade-left" data-aos-duration="8000" data-aos-delay="1000">
            So, you have decided to move ahead… <br />
            Congratulations on being among the leaders….{" "}
          </div>
        </div>
        <div className="relative mt-8 text-2xl max-md:text-base font-poppins leading-8 text-stone-300 max-md:max-w-full">
          Starting a new venture or taking steps to grow, launching a new
          product line, expanding into new markets, or enlarging your market
          share. Stick to knit and focus on your core business. You are at the
          right place… leave pressing challenges to us as your reliable
          Marketing Agency and Processes Outsourcing Partner……
        </div>
        <div className="flex relative gap-5 py-3.5 pr-20 mt-8 text-lg font-medium text-center max-md:flex-wrap max-md:pr-5">
          <button className="justify-center px-7 py-4 text-white rounded-lg border border-solid border-slate-200 max-md:px-5"
          onClick={hanldeSubmit}>
            Contact us
          </button>
        </div>
      </div>
      <div className="flex justify-center max-md:flex-col max-md: items-center  px-16 mt-28 w-full rounded-lg max-md:px-5 max-md:mt-10 ">
      <div class="flex justify-center max-w-[1800px] mx-auto max-md:ml-10">
    <img data-aos="fade-right" data-aos-delay="500" data-aos-duration="4000" loading="lazy" src="/about/second.png" class="w-full max-w-full md:max-w-md" alt="Image"/>
</div>
        <div className="flex flex-col max-md:mt-3 justify-center max-w-[1000px]">
      <div className="flex gap-3 px-5 max-md:flex-wrap">
        <div className="flex justify-center items-center self-start px-1.5 w-9 h-9 rounded-lg bg-pink-700 bg-opacity-30">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6418d741862450bc7142f67ab9ec730f724c53cf69c8f929630d8f6139c70824?"
            className="w-16 aspect-square"
          />
        </div>
        <div className="flex-auto text-3xl capitalize text-stone-900 max-md:max-w-full">
          About us
        </div>
      </div>
      <div className="mt-3 w-full text-lg max-md:text-base font-normal md:text-xl tracking-tight leading-7  max-md:max-w-full">
        Starting a new venture or taking steps to grow, launching a new product
        line, expanding into new markets, or enlarging your market share. Stick
        to knit and focus on your core business. You are at the right place…
        leave pressing challenges to us as your reliable Marketing Agency and
        Processes Outsourcing Partner……
      </div>
      
      <div className="mt-5 w-full text-4xl max-md:text-2xl font-poppins max-md:text-center text-red-600 font-normal max-md:max-w-full">
        Who We Are?
        <br />
        <span className="">Your Trusted Growth Partner……</span>
      </div>
      <div className="mt-5 w-full max-md:text-base text-lg font-normal md:text-xl tracking-tight leading-7  max-md:max-w-full">
        We are a team of professionals who enjoy working in dynamic situations
        for our customers encountering different challenges of their verticals
        and economic conditions of their regions yet obtaining the desired
        results in terms of reducing the cost/performance, brand image, market
        share, accelerating the growth, market development and exceeding the
        revenue targets through our Integrated Marketing Services and
        Outsourcing their Business Processes to us.
      </div>
    </div>
      </div>
      <div className="flex overflow-hidden relative  gap-5 justify-between p-16 mt-28 w-full rounded-lg min-h-[521px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/about/last.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col flex-wrap justify-center content-start max-md:max-w-full">
          <div className="flex gap-3 max-md:flex-wrap">
            <div className="flex justify-center items-center px-1.5 my-auto w-9 h-9 rounded-lg shadow-sm bg-pink-700 bg-opacity-30">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1807fb42d15627150cf32934062cbe5d85274fbc42820447b3682e3f0cfcbf02?"
                className="w-6 aspect-square"
              />
            </div>
            <div className="flex-auto text-3xl text-white capitalize max-md:max-w-full"data-aos="fade-up" data-aos-duration="6000" data-aos-delay="200">
              WHY US?
            </div>
          </div>
          <div className="mt-6 text-4xl max-md:text-lg font-poppins font-normal text-white capitalize max-md:max-w-full">
            With our satisfied clients reviving up for their success stories.
            Techsol Solutions brings up a significant change in your growth
            rate.{" "}
          </div>
        </div>
        <div className="relative flex-auto my-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full" data-aos="fade-left"
                  data-aos-delay="400" data-aos-duration="5000">
              <div className="flex relative flex-col grow self-stretch px-10 py-12 text-2xl font-medium leading-9 text-center text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4af4a1c9323e1821fd2d1114083d829dadf827ee7f8b6e9998172a6a57cad42?"
                  className="self-center aspect-square w-[70px]"
                />
                <div className="mt-4">
                  See Result
                  <br />
                  more <br />
                  Quickly
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full" data-aos="fade-left" data-aos-delay="600" data-aos-duration="5000">
              <div className="flex relative flex-col grow self-stretch px-4 py-12 text-2xl font-medium leading-9 text-center text-white rounded-xl border border-white border-solid max-md:mt-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4af4a1c9323e1821fd2d1114083d829dadf827ee7f8b6e9998172a6a57cad42?"
                  className="self-center aspect-square w-[70px]"
                />
                <div className="mt-4">
                  Collaboration
                  <br />
                  with <br />
                  Professionals
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"data-aos="fade-left" data-aos-delay="800" data-aos-duration="5000">
              <div className="flex relative flex-col grow self-stretch px-6 py-12 text-2xl font-medium leading-9 text-center text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4af4a1c9323e1821fd2d1114083d829dadf827ee7f8b6e9998172a6a57cad42?"
                  className="self-center aspect-square w-[70px]"
                />
                <div className="mt-4">
                  Gain access <br />
                  to fresh
                  <br />
                  Viewpoints
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"data-aos="fade-left" data-aos-delay="1000" data-aos-duration="5000">
              <div className="flex relative flex-col grow self-stretch px-6 pt-12 pb-20 text-2xl font-medium leading-9 text-center text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4af4a1c9323e1821fd2d1114083d829dadf827ee7f8b6e9998172a6a57cad42?"
                  className="self-center aspect-square w-[70px]"
                />
                <div className="mt-4">
                  Manage <br />
                  Greater
                  <br />
                  ROI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center px-16 mt-28 w-full rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full"data-aos="fade-left" data-aos-delay="700" data-aos-duration="5000">
            <img
              loading="lazy"
              srcSet="/about/branding.png"
              className="w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <div className="flex justify-center items-center self-start px-1.5 w-9 h-9 rounded-lg bg-pink-700  bg-opacity-30">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32b5e3aa5002de942e4f8867bc81e8a669e04d580ccfaa9546d9535de5021435?"
                    className="w-6 aspect-square"
                  />
                </div>
                <div className="flex-auto text-3xl capitalize text-stone-900 max-md:max-w-full"data-aos="fade-right" data-aos-delay="1000" data-aos-duration="5000">
                  What we believe:
                </div>
              </div>
              <div className="mt-3 text-4xl max-md:text-lg font-medium capitalize font-poppins max-md:text-center text-stone-900 max-md:max-w-full"data-aos="fade-right"  data-aos-duration="5000">
                We believe that purpose of Techsol Solutions (The Source) is to
                uplift Brands
              </div>
              <div className="flex flex-col pt-0.5 pb-8 mt-6 text-2xl font-normal tracking-tight bg-gray-300 bg-opacity-50 leading-8 text-justify text-red-700 md:pt-4 shadow-2xl md: ml-2 p-2 rounded-xl max-md:max-w-full">
              <div class="flex gap-4 justify-center max-md:flex-wrap">
  <div class="shrink-0 w-1 bg-red-700 rounded-none h-auto max-h-[495px]"></div>
  <div class="grow justify-center max-w-full max-md:max-w-none">
    <div data-aos="fade-left" data-aos-duration="5000">
      <p class="mb-4 max-md:text-lg">We leverage customer-centric strategies for success whether we are working as a full-service marketing agency or as a BPO Partner. Our approach is to optimize by focusing on the data while executing those strategies that ensure measurable and sustainable growth.</p>
    </div>
    <div data-aos="fade-left" data-aos-duration="5000">
      <p class="mb-4 max-md:text-lg">We have faith in driving results. By combining people with relevant skill-set, optimizing processes, and using proven best practices for the growth of your business. We also strive to focus on critical parameters like leads and revenue generation that are mandatory to take your business forward and in fact, will be the criterion to measure our performance and to take corrective measures.</p>
    </div>
    <div data-aos="fade-left" data-aos-duration="5000">
      <p class="mb-4 max-md:text-lg">The reason we offer full-service strategies is our belief that each channel has its advantages and to get optimal results we need to use a holistic approach to use marketing channels in a well-knit integrated plan using different digital/marketing channels to get the required results in terms of visibility, conversion, customer experience/retention, market share, revenue, and brand image, etc.</p>
    </div>
  </div>
</div>

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

export default AboutUs;
