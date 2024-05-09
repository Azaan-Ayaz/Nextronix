import React, { useEffect } from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const MarketingConsultancy = () => {
  
  const navigate = useNavigate()
  const eventHandler = ()=>{
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
      <div className="flex flex-col bg-white">
      <div className="px-16 pt-20 w-full bg-gradient-to-r from-red-900 via-red-700 to-red-700 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full" >
              <div className="md:text-6xl text-3xl font-semibold uppercase font-poppions md:leading-[81px] max-md:max-w-full max-md:text-4xl max-md:leading-[30px]"data-aos="fade-right" data-aos-duration="1500">
                Are you looking to elevate your brand to the next level?
              </div>
              <div className="mt-24 md:text-3xl text-xl font-medium tracking-wide max-md:mt-10 max-md:max-w-full" data-aos="fade-right" data-aos-duration="2000">
                You can breathe easy knowing that Nectronix Digital
                Solutions has got your back!
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-3 md:mb-2 ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/Consultancy/C1.jpg"
              className="grow mt-8 md:w-4/5 aspect-[0.71] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col items-start px-12 pt-6 md:pt-20 pb-10 w-full md:text-2xl font-poppins tracking-wide text-black bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          We are a dedicated team of experts, ready to help you take your
          business to the next level. Whether you're an established brand
          looking to expand your reach or a new startup in need of guidance, our
          comprehensive range of services will support you every step of the
          way.
        </div>
        <img
          loading="lazy"
          srcSet="/Consultancy/C7.png"
          className="mt-20 w-full aspect-[3.13] max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <div class="flex justify-center items-center px-14 md:py-20 w-full bg-black max-md:px-5 max-md:max-w-full">
  <div class="mt-28 mb-24 w-full max-w-[1301px] max-md:my-10 max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
    <div class="flex flex-col w-full max-md:ml-0 max-md:w-full">
  <div class="flex flex-col grow px-5 py-8 md:py-16 w-full rounded-3xl shadow-2xl bg-gray-100 max-md:pr-5 max-md:mt-8 max-md:max-w-full">
    <h2 class="md:text-3xl text-xl font-poppins font-semibold text-red-700 mb-4"data-aos="fade-right" data-aos-delay="500">Planning and Strategizing</h2>
    <p class="md:text-lg text-base font-poppins tracking-wide text-gray-800 leading-relaxed" data-aos="fade-right" data-aos-delay="800">Our experienced consultants will work closely with you to develop a tailor-made marketing strategy that aligns with your business goals. We analyze market trends, competitor activity, and consumer behavior to ensure you have a solid plan in place to maximize your brand's potential.</p>
  </div>
</div>

      <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          srcSet="/Consultancy/C2.jpg"
          class="w-full aspect-square max-md:mt-10"
        />
      </div>
    </div>
  </div>
</div>
      <div className="flex justify-center items-center px-14 md:py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-16 mb-32 w-full max-w-[1301px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/Consultancy/C3.jpg"
                className="w-full aspect-square max-md:mt-10"
              />
            </div>
            <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
  <div class="flex flex-col grow px-7 py-10 md:py-20 w-full rounded-3xl shadow-2xl bg-gray-100 max-md:px-5 max-md:mt-8 max-md:max-w-full">
    <h2 class="md:text-3xl text-xl font-poppins font-semibold text-red-700 mb-4" data-aos="fade-left" data-aos-delay="500">Implementation</h2>
    <p class="md:text-lg text-base font-poppins tracking-wide text-gray-800 leading-relaxed" data-aos="fade-left" data-aos-delay="800">Once the strategy is in place, we roll up our sleeves and get to work. Our team is well-versed in executing effective marketing campaigns across various digital platforms and traditional channels. From social media management to search engine optimization, we have the skills to take your brand to new heights.</p>
  </div>
</div>

          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-14 md:py-20 w-full bg-black max-md:px-5 max-md:max-w-full">
        <div className="mt-32 mb-24 w-full max-w-[1301px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-full max-md:ml-0 max-md:w-full">
  <div class="flex flex-col grow px-5 py-10 md:py-16 w-full rounded-3xl shadow-2xl bg-gray-100 max-md:pr-5 max-md:mt-8 max-md:max-w-full">
    <h2 class="md:text-3xl text-xl font-poppins font-semibold text-red-700 mb-4" data-aos="fade-right" data-aos-delay="500">Brand Audit</h2>
    <p class="md:text-lg text-base font-poppins tracking-wide text-gray-800 leading-relaxed" data-aos="fade-right" data-aos-delay="800">Is your brand conveying the right message? Our brand audit service will analyze every aspect of your brand's identity, from your logo and visual assets to your messaging and tone of voice. We identify areas for improvement and provide actionable recommendations to strengthen your brand's presence in the marketplace.</p>
  </div>
</div>

            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/Consultancy/C4.jpg"
                className="w-full aspect-square max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-14 md:py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-16 mb-32 w-full max-w-[1301px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/Consultancy/C5.jpg"
                className="w-full aspect-square max-md:mt-10"
              />
            </div>
            <div class="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
  <div class="flex flex-col grow px-7 py-10 md:py-16 w-full rounded-3xl shadow-2xl bg-gray-100 max-md:px-5 max-md:mt-8 max-md:max-w-full">
    <h2 class="md:text-3xl text-xl font-poppins font-semibold text-red-700 mb-4" data-aos="fade-left" data-aos-delay="500">Brand Building</h2>
    <p class="md:text-lg text-base font-poppins tracking-wide text-gray-800 leading-relaxed" data-aos="fade-left  " data-aos-delay="800">Building a strong brand is essential in today's competitive landscape. We help you craft a unique brand identity that resonates with your target audience. Our team assists in brand positioning, messaging development, and creating a memorable brand experience that sets you apart from the competition.</p>
  </div>
</div>

          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-2xl tracking-wide text-white min-h-[672px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/Consultancy/C6.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative justify-center md:text-xl text-lg font-poppins pt-36 pr-12 pb-28 pl-16 mt-16 mb-10 max-w-full bg-red-700 bg-opacity-70 w-[1126px] max-md:px-5 max-md:pt-10 max-md:mt-10 max-md:max-w-full">
          At Nectronix Digital Solutions , we are passionate about driving
          results. We believe in the power of data-driven insights, creative
          thinking, and seamless execution. Partner with us and let us be the
          catalyst for your marketing success.
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default MarketingConsultancy;
