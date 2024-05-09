import React, { useEffect } from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppDevelopment = () => {
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
    <Header/>
    <div className="flex flex-col bg-white">
    <div className="overflow-hidden relative flex-col justify-center items-center px-6 md:px-16 pt-16 md:pt-80 pb-12 md:pb-52 w-full text-4xl md:text-6xl font-bold text-center text-white capitalize md:min-h-[745px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-3xl">
  <img
    loading="lazy"
    srcSet="/app-development/head.png"
    className="object-cover absolute inset-0 w-full h-full"
    alt="Unlock the Power of Mobile with Our Custom App"
  />
  <div className="relative z-10">
    <h1 className="mb-8 md:mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
      UNLOCK THE POWER OF MOBILE WITH OUR <br />
      CUSTOM APP
    </h1>
  </div>
</div>
      <div className="md:px-20 md:py-20 w-full bg-gray-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/app-development/second.png"
              className="md:w-10/12 aspect-[0.8] max-md:mt-10 md:h-[75%] max-md:max-w-6/12"
            />
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 font-semibold capitalize max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl text-red-700 max-md:max-w-full max-md:text-3xl max-md:font-normal font-poppins max-md:text-center" data-aos="fade-left" data-aos-delay="500">
                iS YOUR BUSINESS MISSING
                <br />
                OUT ON AN APP ?
              </div>
              <div className="md:mt-14 text-xl md:text-3xl text-slate-900 text-opacity-90 max-md:mt-6 max-md:max-w-full max-md:text-center" data-aos="fade-left" data-aos-delay="700">
                ARE YOU LOOKING TO ENHANCE <br />
                THE DIGITAL PRESENCE OF YOUR BUSINESS?
              </div>
              <div className="mt-11 md:text-2xl font-normal text-base font-poppins tracking-tighter text-justify text-neutral-700 max-md:mt-10 max-md:max-w-full"data-aos="fade-left" data-aos-delay="850">
                Look no further than{" "}
                <span className="font-bold text-neutral-700">
                  Nectronix Digital!
                </span>{" "}
                We specialize in top-notch app development services that cater
                to all your needs. Whether you need an app built with Flutter,
                Android Studio, or React Native, or require custom app
                development, our team of experts has got you covered. Businesses
                with mobile apps cater to a bigger audience and our able to gain
                a competitive edge over their competitors.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden relative flex flex-col justify-center items-center px-6 md:px-16 pt-12 md:pt-72 pb-8 md:pb-60 w-full text-3xl md:text-7xl font-semibold text-center text-white capitalize min-h-[771px] max-md:min-h-[400px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl">
  <img loading="lazy" src="/app-development/3th.png" class="object-cover absolute inset-0 w-full h-full" alt="Why choose Nectronix Digital for app development services?" />
  <div class="relative mb-16 z-10">
    <h1 class="mb-4 md:mb-6 lg:mb-8 xl:mb-10" data-aos="fade-zoom-out" data-aos-duration="6000" data-aos-delay="1000">
      WHY CHOOSE{" "}
      <span class="font-semibold font-poppins text-red-700" data-aos="fade-zoom-out" data-aos-delay="500">NECTRONIX DIGITAL</span>{" "}
      FOR <br class="md:hidden" />
      APP DEVELOPMENT SERVICES?
    </h1>
  </div>
</div>

      <div className="flex justify-center items-center px-16 md:py-20 w-full  max-md:px-5 max-md:max-w-full">
        <div className="md:mt-24 mb-20 w-full max-w-[1594px] max-md:my-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col md:mt-6 text-black capitalize max-md:mt-4 max-md:max-w-full">
                <div className="text-7xl font-semibold text-red-700 tracking-tighter text-justify leading-[105px] max-md:max-w-full max-md:text-4xl"data-aos="fade-right" >
                  Expertise In Flutter
                </div>
                <div className="mt-7 md:text-3xl text-xl font-normal max-md:max-w-full" data-aos="fade-right" data-aos-delay="300">
                  Our skilled developers are well-versed in Flutter, a popular
                  cross-platform framework. With Flutter, we can create visually
                  appealing and highly functional apps that work seamlessly
                  across various platforms.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app-development/4th.png"
                className="grow w-full rounded-xl aspect-[1.61] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 md:py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="mt-20 mb-11 w-full max-w-[1570px] max-md:my-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app-development/5th.png"
                className="w-full aspect-[1.52] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-2.5 text-white capitalize max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-semibold text-red-700 max-md:max-w-full max-md:text-4xl" data-aos="fade-left" >
                  Proficiency in Android Studio
                </div>
                <div className="mt-11 md:text-3xl font-normal text-xl max-md:mt-10 max-md:max-w-full"data-aos="fadeleft" data-aos-delay="300">
                  Our team has extensive experience with Android Studio, the
                  official integrated development environment (IDE) for Android
                  app development. We leverage the power of Android Studio to
                  build robust and user-friendly apps tailored to your
                  specifications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 md:py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-20 mb-20 w-full max-w-[1594px] max-md:my-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-black capitalize max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-semibold text-red-700 md:text-justify max-md:max-w-full max-md:text-4xl" data-aos="fade-right">
                  Mastering React Native
                </div>
                <div className="mt-9 md:text-3xl texct-xl font-normal max-md:max-w-full" data-aos="fade-right" data-aos-delay="300">
                  React Native is another powerful framework we excel in. Being
                  a preferred choice for many developers, React Native allows us
                  to develop efficient and scalable apps that run smoothly on
                  both iOS and Android platforms.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app-development/6th.png"
                className="grow w-full aspect-[1.61] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 md:py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="mt-24 mb-3.5 w-full max-w-[1555px] max-md:mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app-development/7th.png"
                className="self-stretch my-auto w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white capitalize max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-semibold text-red-700 max-md:max-w-full max-md:text-4xl"data-aos="fade-left">
                  Custom App Development
                </div>
                <div className="mt-7 md:text-3xl text-xl font-normal max-md:max-w-full" data-aos="fade-left" data-aos-delay="300">
                  At Nectronix Solutions, we understand that each business has
                  unique requirements. Our custom app development services
                  ensure that we craft tailor-made solutions that align with
                  your specific business objectives. From concept to execution,
                  we work collaboratively with you to bring your vision to life.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 md:py-20 w-full  max-md:px-5 max-md:max-w-full">
        <div className="mt-28 mb-16 w-full max-w-[1587px] max-md:my-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-5 text-black capitalize max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-semibold text-red-700 text-justify max-md:max-w-full max-md:text-4xl" data-aos="fade-right">
                  Seamless Integration
                </div>
                <div className="mt-10 md:text-3xl text-xl font-normal max-md:mt-10 max-md:max-w-full" data-aos="fade-right" data-aos-delay="300">
                  We ensure seamless integration of your app with existing
                  systems and third-party APIs. This allows for a seamless user
                  experience and ensures your app performs optimally.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app-development/8th.png"
                className="grow w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 md:py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="mt-40 mb-20 w-full max-w-[1596px] max-md:my-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app-development/11.png"
                className="grow w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-5 text-white capitalize max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-semibold text-red-700 max-md:max-w-full max-md:text-4xl"data-aos="fade-left">
                  User-Centric Design
                </div>
                <div className="mt-14 md:text-3xl text-xl font-normal max-md:mt-10 max-md:max-w-full" data-aos="fade-left" data-aos-delay="300">
                  We prioritize user experience and design stunning interfaces
                  that engage and delight users. Our intuitive designs ensure
                  smooth navigation and enhance usability, giving your app a
                  competitive edge.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 md:py-20 w-full  max-md:px-5 max-md:max-w-full">
        <div className="mt-20  w-full max-w-[1594px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-black capitalize max-md:mt-4 max-md:max-w-full">
                <div className="text-6xl font-semibold text-red-700 md:text-justify max-md:max-w-full max-md:text-4xl" data-aos="fade-right">
                  Quality Assurance and <br />
                  Testing
                </div>
                <div className="mt-7 md:text-3xl text-xl font-normal max-md:max-w-full" data-aos="fade-right" data-aos-delay="300">
                  Before deploying your app, we conduct rigorous quality
                  assurance and testing to ensure it meets the highest standards
                  of functionality, performance, and security. We are dedicated
                  to delivering reliable and bug-free apps to our clients.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/app-development/9th.png"
                className="grow mt-4 w-full  max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex overflow-hidden relative z-10 flex-col justify-center items-center px-8 py-12 w-full font-normal text-center text-white bg-gradient-to-b from-red-500 to-red-700 rounded-lg shadow-lg">
  <img loading="lazy" src="/app-development/10.png" class="object-cover absolute inset-0 w-full h-full rounded-lg" alt="App Development Excellence" />
  <div class="relative max-w-3xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-semibold mb-6 max-md:text-3xl">
      Partner with Nectronix Digital Solutions for <br class="md:hidden" />
      App Development Excellence
    </h2>
    <p class="text-lg md:text-xl text-white opacity-90 mb-8 max-md:text-lg">
      At Nectronix Digital Solutions, we are committed to delivering exceptional app development services. Our team of skilled professionals focuses on creating innovative solutions tailored to your business needs. Whether you are a small startup or a large enterprise, we have the expertise to turn your app ideas into reality.
    </p>
    <p class="text-lg md:text-xl text-white opacity-90 max-md:text-lg">
      Don't miss out on the opportunities that mobile applications can bring to your business! Contact Techsol Solutions today to discuss your app development requirements and take your business to new heights with our cutting-edge solutions.
    </p>
  </div>
</div>

    </div>

        <Footer />
    </>
  );
};

export default AppDevelopment;
