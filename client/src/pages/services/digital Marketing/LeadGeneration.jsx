import React, { useEffect } from "react";
// import { motion, AnimatePresence } from 'framer-motion';
import Header from "../../../Layout/header";
import Footer from "../../../Layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useNavigate } from "react-router-dom";
// import Navbar from "../../../Layout/navbar";

const LeadGeneration = () => {
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
  const handleSubmit = ()=>{
    navigate("/contact")
  }
  return (
    <>
      <div className="z-10 relative">
        <Header />
      </div>
      <div>
      <div className="flex justify-center items-center px-10 md:py-20 bg-gradient-to-tl from-black via-black to-red-950 shadow-2xl max-md:px-5">
      <div className="flex flex-col mt-2 w-full max-w-[1308px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto md:text-7xl font-semibold text-white leading-[70px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10" data-aos="fade-right" data-aos-duration="4000">
                Unlock Your Potential: Transform Leads into Success Stories!
              </div>
            
          </div>
        </div>
        <div className="flex flex-col pr-11 pl-5 md:mt-36 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow max-md:max-w-full">
                <div className="flex flex-col max-md:flex-row max-md:gap-0 max-md:space-y-5">
  <div className="flex flex-col w-full max-md:w-full max-md:ml-0">
    <img
      loading="lazy"
      srcSet="/Lead/LEAD2.jpg"
      className="w-full aspect-w-4 aspect-h-5 max-md:mt-10 max-md:max-w-full"
    />
  </div>
</div>

                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-6 max-md:mt-10 max-md:max-w-full">
                  <div className="md:text-3xl text-2xl font-semibold leading-8 text-white max-md:max-w-full" data-aos="fade-left" data-aos-delay="200">
                    Looking for effective lead generation services for your
                    business?
                  </div>
                  <div className="md:mt-6 mt-2 md:text-2xl text-lg text-white tracking-tight text-opacity-80 max-md:max-w-full" data-aos="fade-left" data-aos-delay="500">
                    Our comprehensive lead generation approach includes various
                    tactics such as targeted online advertising, engaging
                    content creation, search engine optimization, email
                    marketing, and social media campaigns. We conduct thorough
                    research to identify your target audience and customize our
                    strategies to reach them effectively.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden flex flex-col justify-center items-center px-8 pt-16 pb-16 mt-20  md:ml-0 font-semibold leading-8 text-center text-white min-h-[387px] max-w-[calc(100% - 32px)] md:max-w-full md:mt-6 md:mr-1 max-md:px-5 max-md:pt-10 max-md:pb-10">
  <img loading="lazy" src="/Lead/Group29.png" alt="Background Image" class="absolute inset-0 w-full h-full object-cover opacity-75" />
  <span class="relative z-10 text-2xl md:text-5xl">When you partner with us for lead generation services, you can expect</span>
</div>

          <div className="mt-20 md:ml-8 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col max-md:mb-2 w-[33%] max-md:ml-0 bg-gradient-to-b from-gray-300 to-gray-600 rounded-2xl max-md:w-full" data-aos="fade-right" data-aos-delay="100">
                <div className="flex flex-col grow px-7 py-20 w-full text-center rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="mt-6  text-3xl font-semibold leading-8 text-red-700">
                    Increased visibility
                  </div>
                  <div className="self-center mt-10 md:text-2xl font-poppins text-lg leading-8 text-white">
                    Our strategies are designed to enhance your online
                    visibility and attract potential customers to your website.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 max-md:mb-2 w-[33%] bg-gradient-to-b from-gray-300 to-gray-600 rounded-2xl max-md:ml-0 max-md:w-full" data-aos="fade-right" data-aos-delay="250">
                <div className="flex flex-col grow px-8 py-16 w-full text-center rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="self-center mt-6 text-3xl font-semibold leading-8 text-red-700">
                    Quality leads
                  </div>
                  <div className="mt-10 md:text-2xl font-poppins text-lg leading-8 text-white">
                    We focus on attracting high-quality leads that are more
                    likely to convert into paying customers. Our targeted
                    approach ensures that you reach the right audience
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 md:w-[33%] bg-gradient-to-b from-gray-300 to-gray-600 rounded-2xl max-md:ml-0 max-md:w-full" data-aos="fade-right" data-aos-delay="500">
                <div className="flex flex-col grow px-9 py-16 w-full leading-8 text-center rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="self-center mt-2.5 text-3xl font-semibold text-red-700 w-[303px]">
                    Improved conversion rates
                  </div>
                  <div className="mt-6 md:text-2xl font-poppins text-lg text-white">
                    &nbsp;Through strategic content creation and personalized
                    messaging, we help you nurture leads and convert them into
                    loyal customers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center md:mt-14 max-w-full w-[803px] max-md:mt-2">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col max-md:mb-2 bg-gradient-to-b from-gray-300 to-gray-600 shadow-2xl rounded-2xl w-6/12 max-md:ml-0 max-md:w-full"data-aos="fade-right"data-aos-delay="150"data-aos-duration="4000"
              >
                <div className="flex flex-col grow px-11 py-16 w-full leading-8 text-center rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="mt-1.5 md:ml-3.5 text-3xl font-semibold text-red-700 w-[269px] ">
                    Cost-effective solutions
                  </div>
                  <div className="md:mt-8 mt-6 md:text-2xl font-poppins text-lg text-white">
                    Our lead generation services are designed to provide maximum
                    ROI. We optimize your campaigns to minimize costs while
                    maximizing results
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 bg-gradient-to-b from-gray-300 to-gray-700 rounded-2xl shadow-2xl max-md:ml-0 max-md:w-full"data-aos="fade-right" data-aos-delay="250">
                <div className="flex flex-col grow px-9 py-16 w-full leading-8 text-center rounded-2xl max-md:px-5 max-md:mt-10">
                  <div className="self-center mt-2.5 text-3xl font-semibold text-red-700 w-[303px]">
                    Transparent reporting
                  </div>
                  <div className="mt-6 md:text-2xl font-poppins text-lg  text-white">
                    We provide regular reports and insights on the performance
                    of your lead generation campaigns. You can track the
                    progress and effectiveness of our strategies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative flex-col justify-center items-center self-center px-16 pt-28 pb-20 mt-28 w-full text-3xl leading-8 text-center text-white max-w-[1212px] min-h-[387px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/Lead/Group30.png"
            className="object-cover absolute inset-0 size-full"
          />
          <span className="relative text-xl md:twxt-3xl font-poppins z-10">
          Remember, effective lead generation is an ongoing process. With our
          services, you can establish a steady pipeline of leads and
          consistently grow your business. Get in touch with us today to discuss
          how we can help you boost your lead-generation efforts and take your
          business to new heights</span>
        </div>
      </div>
    </div>
      </div>
        <Footer />
    </>
  );
};

export default LeadGeneration;
