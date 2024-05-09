import React, { useEffect } from "react";
import Footer from "../../../Layout/Footer";
import Header from "../../../Layout/header";
// import Navbar from "../../../Layout/navbar";
import { useNavigate } from "react-router-dom";
// import Header from '../../../Layout/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SMM = () => {
  const navigate = useNavigate()

  const eventHandler = ()=>{
    navigate("/contact")
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
      <div>
        <Header />
        <div>
        <div className="flex flex-col items-center md:pt-20 pb-8 bg-gradient-to-tl from-black via-black to-red-950">
      <div className=" md:font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-600 to-red-600 leading-[259.2px] md:text-[240px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        MARKETING
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-14 mt-7 w-full font-medium text-center fill-zinc-800 fill-opacity-100 max-w-[1507px] min-h-[246px] text-white text-opacity-100 max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25da7aaccc5578f6b8788dc6f3d98177b76df9ef262b786563968e331595288?"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full w-[1187px]">
          <div className="self-center md:text-3xl text-xl font-medium font-poppins leading-6 max-md:max-w-full text-transparent bg-clip-text bg-gradient-to-t from-red-800 via-red-600 to-red-600" data-aos="fade-right" data-aos-duration="4000">
            Ready to uplift your brand’s Social Media Presence?
          </div>
          <div className="mt-4 text-xl max-md:text-lg leading-6 font-normal max-md:leading-5 font-poppins max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
            At Nectronix Digital Solutions we have a team of professional social
            media marketers. Social media marketing campaigns are to build brand
            awareness and establish social trust. As you go deeper into social
            media marketing, you can use it to obtain leads and as a direct
            marketing or sales channel. Promoted posts and tweets are two
            examples of social media marketing.
          </div>
          
        </div>
      </div>
      <div className="mt-14 w-full max-w-[1423px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-24 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/SMM/smm1.png"
              className="shrink-0 max-w-full aspect-square w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto max-md:text-lg text-xl font-poppins font-normal max-md:text-center leading-8 text-white max-md:mt-10 max-md:max-w-full">
              Social media has changed how we interact with one another and how
              businesses can influence consumer behavior. This includes
              promoting content that increases engagement and extracting
              location-based, demographic, and personal data that helps
              messaging resonate with users. SMM Action Plan: Your social media
              marketing (SMM) plan will be more successful if it is more
              focused.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-5xl max-md:text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-700 to-red-700 max-md:leading-8 leading-[73.2px] max-md:mt-10 max-md:max-w-full">
        Success Metrics set by our team are as follows
      </div>
      <div class="flex flex-col justify-center self-stretch py-px mt-6 w-full bg-black max-md:mt-10 max-md:max-w-full">
    <div class="flex overflow-hidden relative flex-col justify-center items-center px-16 py-4 w-full min-h-[347px] max-md:px-5 max-md:max-w-full">
        <img
            loading="lazy"
            srcSet="/SMM/smm2.png"
            class="object-cover absolute inset-0 size-full"
            alt="SMM Image"
        />
        <div class="absolute inset-0 bg-black bg-opacity-80"></div> 
        <div class="relative w-full max-w-[1359px] max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                    <div class="flex relative grow gap-5 text-lg font-normal leading-8 text-white max-md:flex-wrap max-md:mt-10">
                        <div class="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
                            <div class="max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" >
                                Align SMM aims with your distinct goals.
                            </div>
                            <div class="mt-3 md:mt-9 leading-8 max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="300">
                                Find out who your target market is (their age, location, income, job title, industry, and interests).
                            </div>
                            <div class="mt-3 md:mt-9 max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="450">
                                Perform a market analysis of your competitors (successes and failures).
                            </div>
                            <div class="md:mt-9 max-md:mt-3 max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="600">
                                Audit your current SMM (successes and failures).
                            </div>
                        </div>
                        <div class="shrink-0 w-px bg-white border border-white border-solid h-[318px] max-md:hidden"></div>
                    </div>
                </div>
                <div class="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                    <div class="flex relative flex-col self-stretch my-auto text-lg font-normal leading-8 text-white max-md:max-w-full">
                        <div class="mt-3 max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="750">
                            Create a calendar for SMM content delivery.
                        </div>
                        <div class="mt-3 md:mt-9 max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="900">
                            Track performance and adjust SMM strategy as needed.
                        </div>
                        <div class="mt-3 md:mt-9 max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="1050">
                            Create best-in-class content.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      <div className="px-5 mt-12 w-full max-w-[1421px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 bg-gradient-to-t from-black via-red-800 to-red-700 shadow-2xl max-md:w-full rounded-xl"data-aos="fade-right" data-aos-duration="4000">
            <div className="flex flex-col self-stretch px-16 py-11 my-auto w-full font-medium text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-3xl text-center leading-[73.28px]">
                Direct
              </div>
              <div className="self-start mt-9 text-xl leading-8">
                $1,499
                <br />
                ✔️ Optimize or create social media profiles
                <br />
                ✔️ Developing Content Calendar
                <br />
                ✔️ 10 Posts per month (1 animation)
                <br />
                ✔️ Social Media Branding
                <br />
                ✔️ 2 Social Media Platforms (Facebook & Instagram)
                <br />
                ✔️ Competitor Analysis
                <br />
                ✔️ Social Media Strategy
                <br />
                ✔️ Target Audience
                <br />
                ✔️ Monthly Reports
                <br />
                ✔️ Shared Social Media Account Manager
                <br />
                ✔️ Less then 48 hours of query response time
                <br />
                ❌ A/B Testing
                <br />
                ❌ Social Advertising
                <br />
                ❌ Social Media’s Search Engine Optimization
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
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-black via-red-800 to-red-700 shadow-2xl rounded-xl"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="250">
            <div className="flex flex-col px-16 py-9 mt-3.5 w-full font-medium text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-3xl text-center leading-[73.28px]">
                Express
              </div>
              <div className="mt-7 text-xl leading-8">
                $2,499
                <br />
                ✔️ Optimize or create social media profiles
                <br />
                ✔️ Developing Content Calendar
                <br />
                ✔️ 15 Posts per month (1 video, 1 infographics)
                <br />
                ✔️ Social Media Branding
                <br />
                ✔️ 3 Social Media Platforms (Facebook ,Instagram, other)
                <br />
                ✔️ Competitor Analysis
                <br />
                ✔️ Social Media Strategy
                <br />
                ✔️ Target Audience
                <br />
                ✔️ Bi Weekly Reports
                <br />
                ✔️ Shared Social Media Account Manager
                <br />
                ✔️ Less then 36 hours of query response time
                <br />
                ✔️ A/B Testing
                <br />
                ✔️ Social Advertising
                <br />
                ✔️ Social Media’s Search Engine Optimization
                <br />
                ✔️ A/B Testing
                <br />
                ❌Content Moderation
                <br />
                ❌Brand Building Campaigns 
              </div>
              <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-black via-red-800 to-red-700 shadow-2xl rounded-xl"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
            <div className="flex flex-col grow px-14 pt-9 pb-6 w-full font-medium text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-3xl text-center leading-[73.28px]">
                Turbo
              </div>
              <div className="mt-9 text-xl leading-8">
                $3,499
                <br />
                 ✔️ Optimize or create social media profiles
                <br />
                ✔️ Developing Content Calendar
                <br />
                ✔️ 24 Posts per month (2 videos, 2 animations, 2 infographics)
                <br />
                ✔️ Social Media Branding
                <br />
                ✔️ 4 Social Media Platforms (Facebook ,Instagram, others)
                <br />
                ✔️ Competitor Analysis
                <br />
                ✔️ Social Media Strategy
                <br />
                ✔️ Target Audience
                <br />
                ✔️ Weekly Reports
                <br />
                ✔️ Dedicated Social Media Account Manager
                <br />
                ✔️ Less then 16 hours of query response time
                <br />
                ✔️ A/B Testing
                <br />
                ✔️ Social Advertising initially (as per your budget)
                <br />
                ✔️ Social Media’s Search Engine Optimization
                <br />
                ✔️ A/B Testing
                <br />
                ✔️Content Moderation
                <br />
                ✔️Brand Building Campaigns 
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
      <div className="flex flex-col pt-6 pr-20 pb-10 pl-4 mt-12 text-white max-md:pr-5 max-md:mt-10 max-md:max-w-full bg-gradient-to-t from-black via-red-800 to-red-700 shadow-2xl rounded-xl"data-aos="fade-right" data-aos-duration="4000" >
        <div className="self-center text-3xl font-semibold leading-7 text-center">
          Enterprise Accelerator
        </div>
        <div className="mt-3.5 text-lg leading-7 max-md:max-w-full">
          Everything your company’s website needs to grow For Further Details, Contact Us
          <a href="mailto:info@techsolsol.com">info@techsolsol.com</a>
          
        </div>
      </div>
      <div className="flex flex-col justify-center self-stretch py-px mt-8 w-full text-xl font-medium leading-7 text-center text-red-700 bg-black bg-opacity-80 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 pb-12 w-full min-h-[187px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/SMM/smm3.png"
            className="object-cover absolute inset-0 size-full"
          />
        <div class="absolute inset-0 bg-black bg-opacity-85"></div> 
          <div className="flex relative gap-5 mt-3.5 w-full max-w-[1488px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto md:text-2xl font-poppins max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000">
              All the prices are in USD and our on per month basis
            </div>
            <div className="flex-auto md:text-2xl font-poppins max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="250">
              We initally sign a contract of minimum 6 months
            </div>
            <div className="flex-auto md:text-2xl font-poppins max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
              Every Plan includes a basic Social Media Audit
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col items-center px-16 pt-12 pb-20 mt-12 w-full font-medium text-center fill-zinc-800 fill-opacity-20 max-w-[1507px] min-h-[256px] text-white text-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf904a0b620de5fc961977b306aca47d0bebb4de3268a2cd4604402bbc82062?"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-1.5 md:h-[180px] max-w-full w-[1163px]">
    <div className="self-center max-md:text-xl text-3xl font-poppins leading-6 max-md:max-w-full text-transparent bg-clip-text bg-gradient-to-t from-red-800 via-red-600 to-red-600">
        We craft Social Media strategies that produce results
    </div>
    <div className="mt-7 max-md:text-lg text-xl font-poppins leading-6 max-md:max-w-full">
        Nectronix Digital Solutions is an established digital marketing firm
        with several accolades. We work with clients across a range of
        industries and are knowledgeable about what it takes to develop
        social media strategies that provide results.
    </div>
</div>
      </div>
    </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SMM;
