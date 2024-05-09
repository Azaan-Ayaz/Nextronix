import React, { useEffect } from "react";
import Header from "../../../Layout/header";
import Footer from "../../../Layout/Footer";
import { useNavigate } from "react-router-dom";
// import Navbar from "../../../Layout/navbar";
// import Header from "../../../Layout/header";
import AOS from 'aos';
import 'aos/dist/aos.css';


const SEO = () => {
  const navigate = useNavigate();

  const eventHandler = () => {
    navigate("/contact");
  };

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
      <div>
        {/* <Navbar /> */}
        <Header/>
        <div className="flex flex-col items-center md:py-20 bg-gradient-to-l from-black via-black to-red-950">
      <div className="flex md:gap-28 max-md:gap-5 px-5 md:mt-20 w-full text-7xl font-semibold text-white max-w-[1716px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:mt-6">
        <div className="flex-auto my-auto max-md:max-w-full max-md:text-3xl" data-aos="fade-right" data-aos-duration="4000">
          Gain Visibility, Drive Conversions: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-600 to-red-600">Power Up with SEO</span> 
        </div>
        <img
          loading="lazy"
          srcSet="/SEO/seo1.png"
          className="w-full aspect-square"
        />
      </div>
      <div class="flex flex-col justify-center items-center mt-10 md:mt-40 max-w-[1273px] max-md:mx-3 mx-auto text-4xl font-medium font-poppins" data-aos="fade-right" data-aos-duration="8000">
    <div class="px-6 py-10 md:py-14 bg-gradient-to-t from-gray-600 to-gray-300 shadow-2xl rounded-xl max-w-[800px] md:max-w-full text-center">
        <p class="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Worried about the growth of your website’s digital presence?
        </p>
    </div>
</div>
      <div className="flex flex-col justify-center self-stretch py-0.5 mt-14 w-full text-white bg-black bg-opacity-80 max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[424px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/SEO/seo2.png"
            className="object-cover absolute inset-0 size-full"
          />
        <div class="absolute inset-0 bg-black bg-opacity-80"></div> 
          <div className="flex relative flex-col mt-8 mb-2 w-full max-w-[1464px] max-md:max-w-full">
            <div className="text-3xl max-md:text-xl max-md:text-center font-poppins max-md:max-w-full" data-aos="fade-right" data-aos-duration="8000">
              Don’t worry Nectronix Digital Solutions Search Engine Optimization
              (SEO) team has you covered
            </div>
            <div className="mt-9 text-2xl max-md:text-lg text-center max-md:max-w-full" data-aos="fade-right" data-aod-duration="8000" data-aos-delay="500">
              We are aware that no one size fits all approach to SEO. At
              Nectronix Digital Solutions, our team creates a customized SEO
              plan designed just for your company using our expert analysis and
              your firm’s particular demands, industry, present SEO performance,
              and goals. Contact us immediately if you’re prepared to develop
              your unique, revenue-generating SEO approach.
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-20 w-full max-w-[1362px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-red-950 via-red-700 to-red-700 shadow-2xl rounded-xl" data-aos="fade-right" data-aos-duration="8000">
            <div className="flex flex-col grow px-10 py-14 w-full text-white max-md:px-5 max-md:mt-10 max-md:py-6">
              <div className="self-center text-3xl font-medium">Direct</div>
              <span className="font-semibold text-2xl self-center text-center mt-5"> $1,499</span>
              <div className=" text-lg">
                <br />
                 ✔️ Keyword Research (50-100 Keywords)
                <br />
                ✔️ Analytics Setup & Configuration
                <br />
                ✔️ Monthly Strategy Discussion
                <br />
                ✔️ Internal Link Building (Crosslinking)
                <br />
                ✔️ Content Editing & Optimization
                <br />
                ✔️ Basic On-Site Optimization
                <br />
                ✔️ Monthly Custom Report
                <br />
                ✔️ Monthly Review Call
                <br />
                ✔️ 1 Blog Post (400 words each)
                <br />
                ✔️ Image Alter Tags (1 page)
                <br />
                ❌ Competitor Analysis
                <br />
                ❌ Target Audience Identification
                <br />
                ❌ Dedicated Resources
                <br />
                ❌ Keyword Density Customization
                <br />
                ❌ A/B Testing
              </div>
              <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-red-950 via-red-700 to-red-700 shadow-2xl rounded-xl max-md:mt-2"data-aos="fade-right" data-aos-duration="8000"data-aos-delay="300">
            <div className="flex flex-col grow max-md:py-6 px-10 py-14 w-full text-white max-md:px-5 max-md:mt-10">
              <div className="self-center text-3xl font-medium">Express</div>
              <span className="font-semibold text-2xl mt-5 text-center"> $2,499</span>
              <div className="text-lg">
                <br />
                 ✔️Keyword Research (200-300 Keywords)
                <br />
                ✔️Analytics Setup & Configuration
                <br />
                ✔️Monthly Strategy Discussion
                <br />
                ✔️Internal Link Building (Crosslinking)
                <br />
                ✔️Content Editing & Optimization
                <br />
                ✔️Basic On-Site Optimization
                <br />
                ✔️Monthly Custom Report
                <br />
                ✔️Bi-Weekly Review Call
                <br />
                ✔️2 Blog Post (400 words each)
                <br />
                ✔️Target Audience Identification
                <br />
                ✔️Image Alter Tags (2 pages)
                <br />
                ✔️Competitor Analysis
                <br />
                ❌ Dedicated Resources
                <br />
                ❌ Keyword Density Customization
                <br />
                ❌ A/B Testing
              </div>
              <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-red-950 via-red-700 to-red-700 shadow-2xl rounded-xl max-md:mt-2"data-aos="fade-right" data-aos-duration="8000" data-aos-delay="600">
            <div className="flex flex-col grow px-10 py-12 w-full text-white max-md:px-5 max-md:mt-10 max-md:py-6">
              <div className="self-center text-3xl font-medium">Turbo</div>
              <div className="font-semibold mt-5 text-2xl text-center">$3,499</div>
              <div className=" text-lg">
                <br />
                 ✔️ Keyword Research (300-500 Keywords)
                <br />
                ✔️ Analytics Setup & Configuration
                <br />
                ✔️ Monthly Strategy Discussion
                <br />
                ✔️ Internal Link Building (Crosslinking)
                <br />
                ✔️ Content Editing & Optimization
                <br />
                ✔️ Advanced On-Site Optimization
                <br />
                ✔️ Bi-Weekly Custom Report
                <br />
                ✔️ Weekly Review Call
                <br />
                ✔️ 3 Blog Posts (400 words each)
                <br />
                ✔️ Target Audience Identification
                <br />
                ✔️ Image Alter Tags (4 pages)
                <br />
                ✔️ A/B Testing
                <br />
                ✔️ Keyword Density Customization
                <br />
                ✔️ Competitor Analysis
                <br />
                ✔️ Dedicated Resources
              </div>
              <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 md:mt-52 w-full max-w-[1507px]">
    <div class="flex flex-col gap-5 md:flex-row md:gap-16">
        <div class="w-full md:w-[29%]">
            <img loading="lazy"  srcset="/SEO/seo3.png" class="w-full aspect-square " alt="SEO Image" />
        </div>
        <div class="w-full md:w-[71%] bg-gradient-to-t from-gray-500 to-gray-300 shadow-2xl rounded-xl">
            <div class="px-6 py-8 md:py-20 md:px-16 text-lg md:text-3xl text-black">
                <div class="max-w-[400px] md:max-w-full">
                    <p class="mb-8 md:mb-16"data-aos="fade-right" data-aos-duration="8000">
                        All the prices are in USD and are on a per-month basis.
                    </p>
                    <p class="mb-8 md:mb-16"data-aos="fade-right" data-aos-duration="8000" data-aos-delay="300">
                        We initially sign a contract for a minimum of 6 months.
                    </p>
                    <p data-aos="fade-right" data-aos-duration="8000" data-aos-delay="600">
                        Every plan includes a basic Website ranking Audit.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
      <div class="relative flex flex-col justify-center items-center self-stretch px-8 pt-16 pb-20 mt-12 text-lg text-center text-white min-h-[424px] md:text-xl lg:text-2xl"data-aos="fade-right" data-aos-duration="8000">
    <img loading="lazy" src="/SEO/seo2.png" srcset="/SEO/seo2.png" class="object-cover absolute inset-0 w-full h-full" alt="SEO Image" />
    <div class="absolute inset-0 bg-black bg-opacity-80"></div>
    <div class="relative z-10 max-w-[full]">
        <p class="mt-4 md:mt-6"data-aos="fade-right" data-aos-duration="8000" data-aos-delay="300">
            At Nectronix Digital Solutions, we perform an in-depth analysis of a website's search engine optimization results, known as an SEO audit.
            Consider it as a medical check-up for the well-being of your website.
            Our SEO audit team checks your website's technical setup, content quality, and search engine exposure like a doctor would assess your physical health.
            The audit's goal is to find any problems that can prevent your website from showing up highly on search engine results pages (SERPs).
        </p>
    </div>
</div>
      <div className="md:mt-12 text-4xl max-md:text-2xl font-medium text-center text-red-700 max-md:mt-10 max-md:max-w-full">
        So, are you Ready to outrank your competitors website?
      </div>
      <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-white bg-gradient-to-t from-red-950 via-red-800 to-red-700 p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Contact Us</button>
      </div>
    </div>
        <Footer />
      </div>
    </>
  );
};

export default SEO;
