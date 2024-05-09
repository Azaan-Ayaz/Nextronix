import React, { useEffect } from 'react';
import Footer from '../../../Layout/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../Layout/navbar';
import Header from '../../../Layout/header';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContentMarketing = () => {
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
      {/* <Navbar /> */}
      <Header/>
      <div>
      <div className="flex flex-col md:py-20 bg-gradient-to-tl from-black via-black to-red-950">
      <div class="flex flex-col items-center justify-center px-5 py-10 text-white capitalize max-w-[1400px] mx-auto md:flex-row md:justify-between md:py-20">

    <div class="max-w-[1000px] md:w-2/3 md:pr-16">
        <div class="text-center md:text-left">
            <div class="text-3xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600">
                Content that Connects, Conversations that Convert.
            </div>

        </div>
    </div>

    <img loading="lazy" srcSet="/CM/cm1.png" class="mt-10 max-w-full w-64 md:mt-0 md:w-2/5 md:ml-10 md:rounded-lg shadow-lg" alt="Content Image"/>

</div>


      
<div class="px-4 py-6 mt-6 mb-6 text-white text-center bg-gradient-to-t from-red-950 to-red-600 text-xl md:text-3xl font-medium md:max-w-[800px] mx-auto md:px-6">
    Is your content missing out on the touch of Brilliance?
</div>
      <div className="flex z-10 flex-col items-center px-5 mt-0 w-full max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center self-stretch w-full text-2xl text-white capitalize min-h-[563px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/CM/cm2.png"
            className="object-cover absolute inset-0 size-full rounded-[0px_0px_0px_0px]"
          />
          <div className="flex relative justify-center items-center px-16 py-20 w-full bg-black bg-opacity-80 rounded-[0px_0px_0px_0px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-24 w-full max-w-[1269px] max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-poppins font-medium text-center max-md:max-w-full max-md:text-xl text-transparent bg-clip-text bg-red-600">
                Don’t worry Nectronix Digital Solutions Content Marketing team
                has you covered!
              </div>
              <div className="mt-9 max-md:max-w-full max-md:text-lg">
                Nectronix Digital Solutions is a premier provider of
                high-quality content marketing services that help you connect
                with your target audience and drive business growth. Our expert
                team of content strategists, writers, editors, and designers is
                dedicated to creating and promoting exceptional content that
                delivers results and strengthens your brand.
              </div>
              <div className="mt-6 max-md:max-w-full max-md:text-lg">
                We offer a range of content marketing services designed to help
                you achieve your business goals. Whether you are looking to
                attract new customers, increase engagement, or establish
                industry authority, our services have got you covered.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 w-full max-w-[1166px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col-reverse max-md:gap-0">
          <div class="flex flex-col items-center justify-center w-[36%] max-md:ml-0 max-md:w-full max-md:justify-center">
    <img loading="lazy" srcSet="/CM/cm3.png" class="w-full aspect-square max-md:mt-2 max-md:w-2/3" alt="Image" />
</div>

            <div className="flex flex-col ml-10 w-[64%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-gray-400 to-gray-200 rounded-xl shadow-2xl">
              <div className="flex flex-col grow px-8 md:py-16 py-6 w-full capitalize max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold text-red-700 max-md:max-w-full max-md:text-2xl font-poppins">
                  Content Strategy
                </div>
                <div className="mt-3 text-2xl text-black max-md:max-w-full max-md:text-lg font-poppins">
                  Our content strategists work with you to understand your
                  goals, audience, and brand messaging, creating a comprehensive
                  content strategy that outlines the best approach to achieve
                  optimal outcomes.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full max-w-[1133px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-gray-400 to-gray-200 rounded-xl shadow-2xl">
              <div className="flex flex-col grow px-8 md:py-16 py-6 w-full capitalize max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold text-red-700 max-md:max-w-full max-md:text-2xl font-poppins">
                  Content Creation
                </div>
                <div className="mt-5 text-2xl text-black max-md:max-w-full max-md:text-lg font-poppins">
                  Our team of expert writers and designers creates powerful,
                  engaging content that resonates with readers and drives
                  action. From blog posts and case studies to videos and
                  infographics, we tailor our content to meet your specific
                  needs.
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center ml-5 md:ml-0 w-[34%] max-md:w-full">
    <img loading="lazy" srcSet="/CM/cm4.png" class="w-full aspect-square max-md:mt-2 max-md:w-2/3" alt="Image" />
</div>

          </div>
        </div>
        <div className="md:mt-20 w-full max-w-[1166px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col-reverse max-md:gap-0">
            <div className="flex flex-col items-center ml-5 md:ml-0 w-[34%] max-md:w-full">
              <img
                loading="lazy"
                srcSet="/CM/cm5.png"
                className="w-full aspect-square max-md:mt-2 max-md:w-2/3"
              />
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-gray-400 to-gray-200 rounded-xl shadow-2xl">
              <div className="flex flex-col grow px-8 md:py-16 py-6 w-full capitalize max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold text-red-700 max-md:max-w-full max-md:text-2xl font-poppins">
                  Content Optimization
                </div>
                <div className="mt-3.5 text-2xl text-black max-md:max-w-full max-md:text-lg font-poppins">
                   We optimize your existing content to enhance its visibility
                  and increase the likelihood of conversion. We identify key
                  opportunities to improve engagement and conversion, from
                  headline optimization to internal linking.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full max-w-[1133px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-gray-400 to-gray-200 rounded-xl shadow-2xl">
              <div className="flex flex-col grow px-8 md:py-16 py-6 w-full capitalize max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold text-red-700 max-md:max-w-full  max-md:text-2xl font-poppins">
                  Content Promotion
                </div>
                <div className="mt-5 text-2xl text-black max-md:max-w-full max-md:text-lg font-poppins">
                  We promote your content across a range of channels, ensuring
                  maximum visibility and reach. From social media and email
                  marketing to paid promotion, we create a targeted promotion
                  plan that drives results.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center ml-5 md:ml-0 w-[34%] max-md:w-full">
              <img
                loading="lazy"
                srcSet="/CM/cm6.png"
                className="w-full aspect-square max-md:mt-2 max-md:w-2/3"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center self-stretch py-0.5 mt-20 w-full capitalize bg-black bg-opacity-80 max-md:mt-10 max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 min-h-[605px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/CM/cm7.png"
              className="object-cover absolute inset-0 size-full"
            />
            <div className='absolute inset-0 bg-black opacity-75'></div>
            <div className="flex relative flex-col w-full max-w-[1150px] max-md:max-w-full">
              <div className="self-center text-4xl max-md:text-2xl font-semibold text-red-700 max-md:max-w-full font-poppins">
                How do we deliver success?
              </div>
              <div className="mt-14 md:text-2xl max-md:xl text-white max-md:mt-10 max-md:max-w-full font-poppins">
                We have a simple starting process!
                <br />
                We Discuss your company’s objectives
                <br />
                We’ll find out about your company’s short- and long-term goals
                in order to develop a content marketing strategy that advances
                those objectives.
                <br /> <br />
                Review your market segment
                <br />
                To choose the best course of action, we’ll conduct a thorough
                analysis of your competition, both generally and in terms of
                search.
                <br /> <br />
                Examine your strategic aims.
                <br />
                What main goals are listed on your roadmap? Increase content
                generation? introduce a fresh product line? We’ll come up with a
                strategy that precisely fits.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full max-w-[1214px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-red-950 max-md:mb-2 to-red-600 rounded-xl shadow-2xl">
              <div className="flex flex-col grow py-11 pr-12 pl-4 w-full text-white capitalize max-md:pr-5 max-md:mt-10">
                <div className="self-center text-4xl font-semibold">Direct</div>
                <div className="font-semibold mt-5 text-2xl text-center mb-2">$1,000</div>
                <div className="self-start text-lg">
                  ✔️ 3 Content resources created
                  <br />
                  ✔️ Shared Content Marketing Expert 
                  <br />
                  ✔️ Keyword Research
                  <br />
                  ✔️ Monthly Strategy Report
                  <br />
                  ✔️ 1 long form text
                  <br />
                  ✔️ 1-3 blog posts
                  <br />
                  ✔️ 1 Website Page content
                  <br />
                  ✔️ 1 Ad Copy
                  <br />
                  ✔️ Competitor analysis report
                  <br />
                  ✔️ Calendar Creation
                  <br />
                  ❌ Presentation
                  <br />
                  ❌ Product Descriptions
                </div>
                <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-red-950 to-red-600 rounded-xl shadow-2xl max-md:mb-2">
              <div className="flex flex-col grow px-4 py-16 w-full text-white capitalize max-md:mt-10">
                <div className="self-center text-4xl font-semibold">
                  Express
                </div>
                <div className="font-semibold mt-5 text-2xl text-center mb-2">$1,500</div>
                <div className="text-lg">
                  ✔️ 6 Content resources created
                  <br />
                  ✔️ Shared Content Marketing Expert
                  <br />
                  ✔️ Keyword Research
                  <br />
                  ✔️ Bi-weekly Strategy Report
                  <br />
                  ✔️ 2 long form text
                  <br />
                  ✔️ 1-3 blog posts
                  <br />
                  ✔️ 2 Website Page content
                  <br />
                  ✔️ 3 Ad Copy
                  <br />
                  ✔️ Competitor analysis report
                  <br />
                  ✔️ Calendar Creation
                  <br />
                  ✔️ 1 Presentation
                  <br />
                  ✔️ 4 Product Descriptions
                </div>
                <div className="flex justify-center md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-red-700 bg-white p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Learn More</button>
      </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full bg-gradient-to-t from-red-950 to-red-600 rounded-xl shadow-2xl">
              <div className="flex flex-col grow md:py-12 pr-11 pl-4 w-full text-white capitalize max-md:pr-5 max-md:mt-3 max-md:py-3">
                <div className="self-center text-4xl font-semibold">Turbo</div>
                <div className="font-semibold mt-5 text-2xl text-center mb-2">$2,700</div>
                <div className=" text-lg">
                  ✔️12 Content resources created
                  ✔️ Personal Content Marketing Expert
                  <br />
                  ✔️ Keyword Research
                  <br />
                  ✔️ Weekly Strategy Report
                  <br />
                  ✔️ 3 long form text
                  <br />
                  ✔️ 3-5 blog posts
                  <br />
                  ✔️ 4-6 Website Page content
                  <br />
                  ✔️ 12 Ad Copy
                  <br />
                  ✔️ Competitor analysis report
                  <br />
                  ✔️ Calendar Creation
                  <br />
                  ✔️ 2 Presentations
                  <br />
                  ✔️ 12 Product Descriptions
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
        <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-20 w-full text-2xl font-medium text-center text-white capitalize min-h-[223px] max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/CM/cm8.png"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative justify-center items-center px-16 py-20 w-full bg-black bg-opacity-80 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 mb-2.5 w-full max-w-[1206px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto">
                Every Plan includes a basic Brand Audit
              </div>
              <div className="flex-auto">
                All the prices are in USD and our on per month basis
              </div>
              <div className="flex-auto">
                We initally sign a contract of minimum 6 months
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-2xl font-poppins max-md:text-lg text-center text-red-700 capitalize w-[1150px] max-md:mt-10 max-md:max-w-full">
          If you are ready to take your content marketing to the next level,
          then look no further. Contact us today to schedule a free consultation
          and discover how we can help you achieve your business goals through
          exceptional content marketing services.
        </div>
      </div>
      <div className="flex justify-center relative z-10 md:mt-6 max-md:mt-3 max-md:mb-2">
        <button className="text-white bg-gradient-to-t from-red-950 via-red-800 to-red-700 p-3 shadow-2xl rounded-lg max-md:text-lg text-[20px] font-poppins font-medium"
        onClick={eventHandler}
        data-aos="zoom-in-up" data-aos-duration="8000" data-aos-delay="300">Contact Us</button>
      </div>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentMarketing;
