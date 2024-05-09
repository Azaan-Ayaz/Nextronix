import React, { useEffect } from 'react'
import Header from '../../../Layout/header'
import Footer from '../../../Layout/Footer'
import { useNavigate } from 'react-router-dom'
// import Navbar from '../../../Layout/navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Advertising = () => {

  const navigate = useNavigate()

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
    <Header/>
    <div>
    <div className="flex flex-col items-center pt-20 pb-6 bg-gradient-to-tl from-black via-black to-red-950">
      <div className="flex flex-col mt-1.5 w-full text-white max-w-[1668px] max-md:max-w-full">
      <div class="flex flex-col md:flex-row items-center gap-5 text-6xl max-w-full max-md:flex-wrap max-md:text-4xl">
    <div class="flex-auto text-center md:text-left md:max-w-6/12">
        <p class="text-4xl md:text-5xl lg:text-6xl font-medium max-md:font-medium font-poppins leading-tight md:leading-snug" data-aos="fade-right" data-aos-duration="4000">
            Your Vision, Our Strategy: <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-800 to-red-700'>Let's Make </span>
            <span className='text-transparent bg-clip-text bg-gradient-to-l from-red-900 via-red-800 to-red-700'>Advertising Magic Together</span> 
        </p>
    </div>

    <img loading="lazy" src="/advertising/A1.png" srcset="/advertising/A1.png" class="w-full md:w-[500px] aspect-square" alt="Advertising Image" />
</div>
        <div className="justify-center items-center self-center text-center bg-gradient-to-t from-black to-red-600 shadow-2xl px-16 py-11 mt-24  md:ml-14  max-md:text-2xl text-4xl leading-7 w-[1084px] max-md:px-5 max-md:mt-10 max-md:max-w-full mx-5">
          Not getting the desired ROI?
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-44 w-full text-2xl leading-7 text-white min-h-[429px] max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/advertising/A2.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative justify-center items-center px-16 md:py-16 w-full bg-black bg-opacity-70 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mb-3.5 w-full max-w-[1604px] max-md:max-w-full">
            <div className="self-center text-4xl max-md:text-2xl font-poppins font-medium leading-7 max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000">
              Don’t Worry Techsol Solutions has you covered.
            </div>
            <div className="mt-10 text-center text-xl max-md:text-lg font-poppins text-normal max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
              Paid search, also known as paid advertising, is another way to
              drive traffic to your business website. Unlike free organic
              traffic, paid traffic means spending money bidding on keywords and
              advertising in search results. Digital ads can appear on websites,
              search engine result pages (SERPs), and social media channels.
            </div>
            <div className="mt-7 text-center text-xl font-poppins max-md:text-lg text-normal max-md:max-w-full"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="1000">
              We have mastered creating eye-catching, keyword-filled ads that
              follow the best practices of the digital platforms on which they
              appear. Popular services include creating and serving ads on
              Facebook, Instagram, Twitter, and YouTube, and creating and
              managing Google Ads Manager accounts
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-28 w-full max-w-[1500px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:mb-3 rounded-xl max-md:ml-0 max-md:w-full bg-gradient-to-t from-black via-red-800 to-red-700 shadow-2xl"data-aos="fade-right" data-aos-duration="4000">
            <div className="flex flex-col self-stretch py-14 pr-4 pl-9 my-auto w-full leading-7 text-white max-md:pl-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-4xl font-semibold leading-7">
                Direct
                <br />
              </div>
              <div className="mt-9 text-lg">
                ✔️PPC Campaign (Google Ads)
                <br />
                ✔️Target Audience Identification
                <br />
                ✔️Social Media Advertising (2 Platforms)
                <br />
                ✔️2 Ads Campaigns per Month
                <br />
                ✔️Upto 3 Ad sets
                <br />
                ✔️Monthly Report Generation
                <br />
                ✔️Shared Account Manager
                <br />
                ✔️Minimum Net Ad Spent of $4000
                <br />
                ✔️4 Ads Design
                <br />
                ✔️1 Video Ad
                <br />
                ✔️Maximum ROI Management
                <br />
                ✔️Cloud Leads Management
                <br />
                ❌Customer Engagement via Ads Platform
                <br />
                ❌Analytics Tracking & Reporting
                <br />
                ❌Bi Weekly Brain Storming Sessions
                <br />
                ❌Bi Weekly Brain Storming Sessions
                <br />
                ❌2 Consultations
                <br /> <br />
                20% Of Ad spent
              </div>
              <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:mb-3 rounded-xl bg-gradient-to-t from-black via-red-800 to-red-700 max-md:ml-0 max-md:w-full shadow-2xl"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
            <div className="flex flex-col grow px-10 py-16 mt-1.5 w-full text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-4xl font-semibold leading-7">
                Express
              </div>
              <div className="mt-6 text-lg leading-7">
                ✔️PPC Campaign (Google Ads)
                <br />
                ✔️Target Audience Identification
                <br />
                ✔️Social Media Advertising (3 Platforms)
                <br />
                ✔️3 Ads Campaigns per Month
                <br />
                ✔️Upto 5 Ad sets
                <br />
                ✔️Bi Weekly Report Generation
                <br />
                ✔️Shared Account Manager
                <br />
                ✔️Minimum Net Ad Spent of $6000
                <br />
                ✔️6 Ads Design
                <br />
                ✔️1 or 2 Video Ads
                <br />
                ✔️Maximum ROI Management
                <br />
                ✔️Cloud Leads Management
                <br />
                ✔️Customer Engagement via Ads Platform
                <br />
                ✔️Landing Page Designs
                <br />
                ✔️Bi Weekly Brain Storming Sessions
                <br />
                ✔️Bi Weekly Brain Storming Sessions
                <br />
                ✔️Market Research
                <br />
                ✔️Brand Awareness Campaigns
                <br />
                ✔️Keyword research and advanced selection
                <br />
                ✔️2 Consultations
                <br />
                ❌Analytics Tracking & Reporting
                <br /> <br />
                20% of Ad Spent
              </div>
              <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:mb-3 rounded-xl bg-gradient-to-t from-black via-red-800 to-red-700 max-md:ml-0 max-md:w-full shadow-2xl"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="1000">
            <div className="flex flex-col px-10 py-14 w-full text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-4xl font-semibold leading-7">
                Turbo
              </div>
              <div className="mt-9 text-lg leading-7">
                ✔️PPC Campaign (Google Ads)
                <br />
                ✔️Target Audience Identification
                <br />
                ✔️Social Media Advertising (4 Platforms)
                <br />
                ✔️4 Ads Campaigns per Month
                <br />
                ✔️Upto 8 Ad sets
                <br />
                ✔️Weekly Report Generation
                <br />
                ✔️Personal Account Manager
                <br />
                ✔️Minimum Net Ad Spent $10000
                <br />
                ✔️12 Ads Design
                <br />
                ✔️3 Video Ads
                <br />
                ✔️Maximum ROI Management
                <br />
                ✔️Cloud Leads Management
                <br />
                ✔️Customer Engagement via Ads Platform
                <br />
                ✔️Analytics Tracking & Reporting
                <br />
                ✔️Landing Page Designs
                <br />
                ✔️Weekly Brain storming Sessions
                <br />
                ✔️Market Research
                <br />
                ✔️Brand Awareness Campaigns
                <br />
                ✔️Keyword research and advanced selection
                <br />
                ✔️2 Consultation Sessions
                <br /> <br />
                20% of Ad Spent
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
      <div className="flex flex-col items-center px-20 py-10 mt-7 max-w-full text-white w-[1000px] max-md:px-5 bg-gradient-to-t from-black via-red-800 to-red-700 shadow-2xl rounded-xl">
        <div className="text-3xl font-semibold leading-7">
          Enterprise Accelerator
        </div>
        <div class="mt-4 text-lg leading-7 max-md:max-w-full">
    Everything your company’s website needs to grow. For Further Details, Contact Us {""}
    <a href="mailto:info@techsolsol.com" class="text-white hover:underline hover:text-blue-600">info@techsol.com</a>
</div>
      </div>
      <div class="flex flex-col md:flex-row gap-5 md:h-[300px] justify-between mt-10 md:mt-28 w-full max-w-[1436px] mx-auto">
    <img loading="lazy" srcSet="/advertising/A3.png" class="w-full md:w-1/4 aspect-square" alt="Placeholder Image" />

    <div class="flex flex-col justify-center bg-gray-300 px-6 py-8 md:px-6 md:py-6 max-w-[600px]"data-aos="fade-right" data-aos-duration="4000">
        <p class="text-lg md:text-2xl leading-7 text-black"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="300">
            1) All prices are in USD and are per month.
        </p>
        <p class="text-lg md:text-2xl leading-7 text-black mt-4"data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
            2) We initially sign a contract for a minimum of 6 months.
        </p>
        <p class="text-lg md:text-2xl leading-7 text-black mt-4" data-aos="fade-right" data-aos-duration="4000" data-aos-delay="800">
            3) Every plan includes a basic Brand Audit.
        </p>
    </div>
</div>
      <div className="flex overflow-hidden relative flex-col justify-center self-stretch md:mt-36 w-full text-2xl leading-7 text-center text-white min-h-[300px] max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/advertising/A2.png"
          className="object-cover absolute inset-0 size-full "
        />
        <div className="flex relative justify-center items-center px-16 md:py-20 w-full bg-black bg-opacity-70 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-16 mb-4 w-full max-w-[1600px] max-md:mt-10 max-md:max-w-full">
            <div className="mx-8 max-md:mr-2.5 max-md:max-w-full text-xl max-md:text-lg font-poppins">
              Advertising has become a crucial component of social marketing for
              businesses across all sectors. Businesses can diversify their
              approaches as algorithms evolve in order to use social advertising
              to reach the appropriate individuals at the right time.
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full text-xl max-md:text-lg font-poppins">
              Every social advertising platform offers advantages and a distinct
              method of connecting with users. As a result, companies in
              virtually every sector can profit from using social advertising to
              engage, educate, and convert their target audience.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Advertising