import React, { useEffect } from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebDevelopment = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
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
      <Header style={{ zIndex: 4000 }} />
      <div className="bg-gradient-to-tl from-black via-black to-red-950">
      <div className="pb-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-row w-[71%] max-md:ml-0 max-md:w-full">
            <div className="overflow-hidden grow px-20 pb-8 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
                  <div className="flex z-10 flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    {/* <div className="flex gap-4 items-start self-start max-md:flex-wrap">
                      <div className="flex flex-col items-center self-start pb-7">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91410cfbdcfdb9abe6f43acf19d3c633b84f5bb51a1783e507368642992ac9f4?"
                          className="self-start w-2.5 aspect-[0.63] max"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b3d0a9c46a90b825ce67a71cae2b7ade6970137cc6789ccc07c392dfee98a1f?"
                          className="mt-5 aspect-[1.32] w-[21px]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/631b36adb89d2b781e058de24824e7fd264b1dbabd6f01098c6bd32d5a1443df?"
                          className="mt-5 aspect-[1.32] w-[21px]"
                        />
                      </div>


                    </div> */}
                    <div className="flex-auto self-end mt-32 text-9xl font-semibold tracking-tighter text-red-700 leading-[.5px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                        <span className="text-8xl max-md:text-4xl text-transparent bg-clip-text bg-white"
                          data-aos="fade-left" data-aos-delay="1000" data-aos-duration="4000" data-aos-anchor-bottom >Nectronix Digital Solutions</span> {""}

                      </div>
                    <div className="md:mt-40 md:text-6xl font-semibold tracking-tighter text-white  max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                      {" "}
                      Your One-Stop Solution for Web Development Services
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 md:w-[18%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="/web-development/Image1.png"
                    className="grow shrink-0 max-w-full mix-blend-luminosity aspect-[0.31] h-72 w-40 md:w-[307px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/web-development/Image2.png"
              className="w-full mix-blend-luminosity aspect-[0.65] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center px-16 py-20  max-md:px-5">
        <div className="w-full max-w-[1707px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/web-development/BG1.png"
                className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/web-development/BG2.png"
                className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/web-development/BG3.png"
                className="grow w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div> */}



      <div class="flex justify-center items-center px-8 md:py-20 max-md:mb-10  max-md:px-5">
        <div class="flex  justify-between md:mx-44 gap-10 md:gap-32 w-full max-w-[1647px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full" data-aos="fade-left" data-aos-duration="4000">

          {/* <!-- Image Section --> */}
          <div class="flex items-center w-full max-md:w-full">
            <img loading="lazy" src="/web-development/wp.png" alt="Shopify Development" class="w-full rounded-lg aspect-w-16 aspect-h-9 max-md:mt-10 max-md:max-w-full" />
          </div>

          {/* <!-- Content Section --> */}
          <div class="flex flex-col justify-center max-md:max-w-full">
            <div class="flex flex-col text-sm font-medium uppercase text-zinc-600 w-[147px] max-md:ml-2.5">
              <div class="h-1 bg-red-700 rounded-full"></div>
              <div class="mt-2.5">About The Agency</div>
            </div>
            <div class="md:mt-2 text-3xl font-semibold font-poppins text-white max-md:max-w-full max-md:text-xl">
              Wordpress Development
            </div>
            <div class="mt-1.5 md:text-xl font-normal font-poppins text-stone-200 max-md:max-w-full">
              At Nectronix Digital, we specialize in WordPress development.
              Whether you need a simple blogging website or a complex
              e-commerce platform, our experts can create a stunning and
              user-friendly website that aligns with your business goals. We
              use the latest plugins and themes to ensure your website is
              responsive, secure, and tailored to your specific requirements.

            </div>
          </div>

        </div>
      </div>


      <div className="flex justify-between  items-center px-16 md:py-20  max-md:px-5">
        <div className="mt-2 w-full max-w-[1643px] max-md:max-w-full" data-aos="fade-right" data-aos-duration="4000">
          <div className="flex md:gap-32 max-md:flex-col-reverse max-md:gap-0 md:ml-48">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col ml-9 max-w-full text-sm font-medium uppercase text-zinc-600 w-[149px] max-md:ml-2.5">
                  <div className="shrink-0  h-1 bg-red-700 rounded-full" />
                  <div className="mt-2">About The Agency</div>
                </div>
                <div className="md:mt-2 text-3xl font-semibold font-poppins text-white max-md:mt-1 max-md:max-w-full max-md:text-xl">
                  <span className="font-semibold">Custom Development</span>{" "}
                </div>
                <div className="mt-1.5 md:text-xl md:text-start text-justify tracking-tight font-poppins font-normal text-stone-200 max-md:max-w-full">
                  We understand that every business is unique, and so are its requirements. Our custom development services are designed to provide you with a fully customized solution that meets your specific needs. Our experienced team of developers can create custom modules, plugins, and functionalities that align with your business objectives. We ensure that your website is optimized for performance and provides a seamless user experience.

                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-4/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/web-development/cd.png"
                className="flex items-center w-full max-md:w-full"
              />
            </div>
          </div>
        </div>
      </div>




      <div class="flex justify-center items-center px-8 py-20  max-md:px-5">
        <div class="flex  justify-between md:mx-44 max-md:gap-10 gap-32 w-full max-w-[1647px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full" data-aos="fade-left" data-aos-duration="4000">

          {/* <!-- Image Section --> */}
          <div class="flex items-center w-full max-md:w-full">
            <img loading="lazy" src="/web-development/sd.png" alt="Shopify Development" class="w-full rounded-lg aspect-w-16 aspect-h-9 max-md:mt-10 max-md:max-w-full" />
          </div>

          {/* <!-- Content Section --> */}
          <div class="flex flex-col justify-center max-md:max-w-full">
            <div class="flex flex-col text-sm font-medium uppercase text-zinc-600 w-[147px] max-md:ml-2.5">
              <div class="h-1 bg-red-700 rounded-full"></div>
              <div class="mt-2.5">About The Agency</div>
            </div>
            <div class="mt-8 text-3xl font-semibold font-poppins text-white max-md:max-w-full max-md:text-xl">
              Shopify Development
            </div>
            <div class="mt-1.5 md:text-xl font-normal font-poppins text-stone-200 max-md:max-w-full">
              Looking to start an e-commerce business? Our Shopify development services are tailored to help you create a successful online store. From setting up your store to customizing its design and functionality, we handle it all. Our experts use Shopify's robust platform to create a visually appealing and user-friendly store that drives conversions and enhances customer experience.
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-between  items-center px-16 py-20  max-md:px-5">
        <div className="mt-2 w-full max-w-[1643px] max-md:max-w-full" data-aos="fade-right" data-aos-duration="4000">
          <div className="flex gap-32 max-md:gap-10 max-md:flex-col-reverse  md:ml-48">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col ml-9 max-w-full text-sm font-medium uppercase text-zinc-600 w-[149px] max-md:ml-2.5">
                  <div className="shrink-0  h-1 bg-red-700 rounded-full" />
                  <div className="mt-2">About The Agency</div>
                </div>
                <div className="md:mt-2 text-3xl font-semibold font-poppins text-white max-md:mt-1 max-md:max-w-full max-md:text-xl">
                  <span className="font-bold">PHP Laravel Development</span>{" "}
                </div>
                <div className="mt-1.5 md:text-xl md:text-start text-justify tracking-tight font-poppins font-normal text-stone-200 max-md:max-w-full">
                  If you require a dynamic and scalable web application, our PHP
                  Laravel development services are the perfect fit for you.
                  Laravel is a popular PHP framework known for its elegant syntax
                  and powerful features. Our developers leverage the capabilities
                  of Laravel to create robust and secure web applications that are
                  not only efficient but also easy to maintain and upgrade.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-4/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/web-development/php.png"
                className="flex items-center w-full max-md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-20 text-7xl font-semibold text-center text-white  max-md:text-4xl">
        <div className="flex flex-col px-0.5 pt-1.5 mt-24 w-full shadow-sm bg-black bg-opacity-60 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <div className="overflow-hidden relative flex-col justify-center items-center px-16 pt-72 pb-56 mix-blend-luminosity md:min-h-[695px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl"
            style={{ backgroundImage: "url('/web-development/IMAGE.png')" }}>
            Why Choose Nectronix Digital?
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16   max-md:px-5">
        <div className="flex flex-col items-center  max-w-full w-[1280px] max-md:mt-10" data-aos="fade-up" data-aos-duration="4000">
          <div className="shrink-0 w-2 h-1.5 bg-red-700 rounded-full" />
          <div className="mt-3 text-sm font-medium text-center uppercase text-zinc-600">
            What We’re Offering
          </div>
          <div className="mt-3.5 md:text-5xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
            <span className="text-red-700">Services</span> We’re Providing
            <br />
            To Our Customers
          </div>
          <div className="self-stretch mt-7 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center text-base font-normal text-white max-md:mt-10">
                  <div className="flex flex-col px-12 py-8 bg-stone-950 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7146e8ce9a5d462a7f639a5084d14dfb9f6c075f2e7b2ec18fdd69818f10ae18?"
                      className="w-24 aspect-[1.33]"
                    />
                    <div className="mt-6">
                      Professional and experienced team of developers
                    </div>
                    <div className="shrink-0 mt-9 h-px border border-solid bg-zinc-600 border-zinc-600" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center text-base font-bold text-white max-md:mt-10">
                  <div className="flex flex-col px-12 py-8 bg-stone-950 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3832feb3b286781709f270bb06cf1cf1d764d3db7298ee3cb8c93267ab9a5f67?"
                      className="w-24 aspect-[1.32]"
                    />
                    <div className="mt-6 text-normal">
                      Tailor-made solutions <br />
                      to meet your unique needs.
                    </div>
                    <div className="shrink-0 mt-10 h-px border border-solid bg-zinc-600 border-zinc-600" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center text-base font-bold text-white max-md:mt-10">
                  <div className="flex flex-col px-12 py-8 bg-stone-950 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb507e0839396403c82a5270e85c1e98e93a1533c42340bdb1b63812c2276f1a?"
                      className="w-24 aspect-[1.32]"
                    />
                    <div className="mt-6">
                      Transparent communication and project management
                    </div>
                    <div className="shrink-0 mt-9 h-px border border-solid bg-zinc-600 border-zinc-600" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center text-base font-bold text-white max-md:mt-10">
                  <div className="flex flex-col px-12 py-8 bg-stone-950 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/61505a8eed0b01f1469881c8e48038bbfe8e0a3b444f5bd010d4891bf10ce73b?"
                      className="w-24 aspect-[1.32]"
                    />
                    <div className="mt-6">
                      Continuous support <br />
                      and maintenance services
                    </div>
                    <div className="shrink-0 mt-10 h-px border border-solid bg-zinc-600 border-zinc-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 text-2xl font-light text-center text-white leading-[30px] max-md:px-5">
        <div className="flex flex-col  max-w-full w-[1279px] max-md:mt-10">
          <div className="max-md:max-w-full">
            Partner with Nectronix Digital today and take your web development
            project to new heights.
            <br /> <br />
            Contact us for a Now free consultation and let us help you bring your
            ideas to life.
          </div>
          <div className="flex justify-center">
            <button onClick={handleSubmit} className="bg-red-700 text-white text-lg md:mt-6 p-2 rounded-xl font-poppins mt-1">Contact Us</button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
