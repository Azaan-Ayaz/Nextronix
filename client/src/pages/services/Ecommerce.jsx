import React, { useEffect } from "react";
import Header from "../../Layout/header";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Ecommerce = () => {
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
      <div className="relative z-40">
        <Header />
      </div>
      <div className="flex flex-col ">
      <div className="flex  flex-col bg-black items-end md:px-16 max-md:px-6 md:pt-12 pb-20 max-md:pl-5">
  <div className="max-md:max-w-full">
    <div className="flex justify-between max-md:flex-col max-md:gap-0">
      <div className="flex flex-col md:w-[38%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-36 tracking-wide  max-md:mt-10 max-md:max-w-full">
          <div className="md:text-3xl font-semibold text-white text-center md:text-left max-md:max-w-full">
            <span className="md:text-6xl text-3xl md:leading-[45px] text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-red-800 to-red-600"data-aos="fade-left" data-aos-delay="1000">
              Is your brand missing out on the Online Presence?
            </span>
            <br />
            <br />
            <div className="max-md:text-lg font-normal font font-poppins">
            Are your competitors going ahead due to their online presence &
            their e-commerce website?
            </div>
          </div>
          
        </div> 
      </div>
      <div className="flex flex-col md:w-1/3 justify-center">
        <img
          loading="lazy"
          src="/ecommerce/i2.jpg"
          className="md:w-auto w-full h-auto max-h-1/4 max-md:mt-6"
          alt="Main Illustration"
        />
      </div>
    </div>
  </div>
</div>
          <div className="bg-black">
<div className="md:mt-6 font-poppins md:text-3xl md:text-center font-semibold text-white max-md:mt-10 max-md:max-w-full max-md:text-2xl max-md:text-center max-md:leading-[36px]">
            Don’t worry Nectronix Digital Solutions have you covered.
          </div>
          <div className="justify-center md:mx-10 md:mb-3 text-lg font-poppins md:text-xl px-7 py-5 mt-8  tracking-wider md:leading-10 text-center text-white bg-gradient-to-tr from-red-900 via-red-800 to-red-600 shadow-2xl rounded-[15px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            We offer state of art technology solutions to their valued
            customers. Our team of professionals is ready to give you a head
            start in winning all your business races.
          </div>
          </div>
<div className="flex justify-center items-center px-8 md:py-12 bg-gray-100 max-md:px-5">
  <div className="grid gap-8 max-w-6xl lg:grid-cols-2">
    <div className="flex flex-col justify-center md:order-2">
      <div className="text-2xl md:text-start text-center font-semibold text-transparent bg-clip-text bg-gradient-to-l from-red-900 via-red-800 to-red-600 leading-[60px] md:text-3xl lg:text-5xl"
      data-aos="fade-up">
        Do You Know?
      </div>
      <div className="md:mt-8 mt-3 text-xl font-medium text-black leading-8">
        <p>
          One of the most effective ways to expand your business is through
          e-commerce websites. We assist you in acquiring new customers and
          enhancing your brand's visibility.
        </p>
      </div>
    </div>
    <div className="flex justify-center md:order-1">
      <img
        loading="lazy"
        src="/ecommerce/E7.png"
        className="w-full h-auto max-h-96 max-md:mt-6"
        alt="E-commerce Illustration"
      />
    </div>
  </div>
</div>

        <div className="flex justify-center items-center px-16 py-20 w-full bg-red-600 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-14 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden relative flex-col justify-center px-0.5 w-full rounded-[39px] text-white min-h-[493px] max-md:max-w-full"data-aos="fade-up" data-aos-delay="500">
              <img
                loading="lazy"
                srcSet="/ecommerce/E2.png"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col px-9 py-12 bg-black bg-opacity-80 rounded-[39px] max-md:px-5 max-md:max-w-full">
                <div className="self-center text-4xl font-bold leading-10 text-center max-md:max-w-full">
                  Website Development & Management
                </div>
                <div className="mt-10 text-xl font-normal leading-8 max-md:max-w-full">
                  Nectronix Digital Solutions Technology team of web developers is
                  customer-centric and creates website solutions that deliver
                  tangible business outcomes. They help brands navigate the
                  ever-changing digital landscape. We offer website development in
                  4 main concepts
                  <br />
                  1)      Shopify,
                  <br />
                  2)      Magento,
                  <br />
                  3)      WordPress,
                  <br />
                  4)      Custom Built.
                  <br />
                  <br />
                  Shopify, Magento, and WooCommerce are CRMs that are specialized
                  solutions for e-commerce stores. We tend to develop and deliver
                  customer and brand-centric websites. CRMs have advantages over
                  custom-built websites, due to their mobility as well as
                  inventory management and e-commerce-ready backend.
                </div>
              </div>
            </div>
            <div className="px-px mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">


                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full" data-aos="fade-left" >
                  <div className="flex overflow-hidden relative flex-col grow bg-black bg-opacity-80 rounded-[39px] max-md:mt-5">
                    <img
                      loading="lazy"
                      srcSet="/ecommerce/CRM.jpg"
                      className="object-cover absolute  inset-0 opacity-15 size-full"
                      alt="Payment Gateway Integrations"
                    />
                    <div className="flex flex-col justify-center px-5 py-16 text-white">
                      <h3 className="self-center text-4xl font-bold leading-10 text-center">
                        Search Engine Optimization
                      </h3>
                      <p className="mt-12 text-xl font-normal text-white leading-8 max-md:mt-10">
                        To bring success to your e-commerce store, Search Engine Optimization
                        or SEO is a main asset. Techsol Solutions has a team of SEO specialists
                        who believe in delivering top-ranked results to your e-commerce website.

                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full" data-aos="fade-left" data-aos-delay="500">
                  <div className="flex overflow-hidden relative flex-col grow bg-black bg-opacity-80 rounded-[39px] max-md:mt-5">
                    <img
                      loading="lazy"
                      srcSet="/ecommerce/E6.png"
                      className="object-cover absolute inset-0 opacity-15 size-full"
                      alt="Payment Gateway Integrations"
                    />
                    <div className="flex flex-col justify-center px-5 py-16 text-white">
                      <h3 className="self-center text-4xl font-bold leading-10 text-center">
                        Payment Gateway Integrations
                      </h3>
                      <p className="mt-12 text-xl font-normal text-white leading-8 max-md:mt-10">
                        Payment gateways are a merchant service that processes credit card
                        payments for an e-commerce store. They can be thought of as the
                        metaphorical cash register in an electronic transaction. We help you
                        collect online payments via bank payment gateway integrations to your
                        online store.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full" data-aos="fade-left" data-aos-delay="700">
                  <div className="flex overflow-hidden relative flex-col grow bg-black bg-opacity-80 rounded-[39px] max-md:mt-5">
                    <img
                      loading="lazy"
                      srcSet="/ecommerce/CRM.jpg"
                      className="object-cover absolute inset-0 opacity-15 size-full"
                      alt="Payment Gateway Integrations"
                    />
                    <div className="flex flex-col justify-center px-5 py-16 text-white">
                      <h3 className="self-center text-4xl font-bold leading-10 text-center">
                        Inventory Management via CRM
                      </h3>
                      <p className="mt-12 text-xl font-normal text-white leading-8 max-md:mt-10">
                        We offer inventory management solutions via CRMs inventory management
                        systems. We also offer inventory management solutions for your
                        traditional brick & mortar stores.

                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className="mt-20 max-md:mt-10 max-md:max-w-full" data-aos="fade-left" data-aos-delay="700">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex overflow-hidden relative flex-col grow bg-black bg-opacity-80 rounded-[39px] max-md:mt-5">
                    <img
                      loading="lazy"
                      srcSet="/ecommerce/EDM.jpg"
                      className="object-cover opacity-15 absolute inset-0 size-full"
                      alt="E-commerce Digital Marketing"
                    />
                    <div className="flex flex-col justify-center px-7 py-16 text-white">
                      <h3 className="self-center text-4xl font-bold leading-10 text-center max-md:max-w-full">
                        E-commerce Digital Marketing
                      </h3>
                      <p className="mt-20 text-xl font-normal leading-8 max-md:mt-10 max-md:max-w-full">
                        Techsol Solutions is a full-service digital marketing agency offering
                        Social Media Management and Marketing, Strategizing, implementation, etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full" data-aos="fade-left" data-aos-delay="900">
                  <div className="flex overflow-hidden relative flex-col grow bg-black bg-opacity-80 rounded-[39px] max-md:px-5 max-md:mt-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/ecommerce/PM.jpg"
                      className="object-cover absolute opacity-15 inset-0 size-full"
                      alt="Performance Marketing"
                    />
                    <div className="flex flex-col justify-center px-7 py-16 text-white">
                      <h3 className="self-center text-4xl font-bold leading-10 text-center">
                        Performance Marketing
                      </h3>
                      <p className="mt-20 text-xl font-normal text-white leading-8 max-md:mt-10 max-md:max-w-full">
                        Combining paid advertising with brand marketing, performance marketing
                        refers to an advertising program in which we tend to get the desired
                        actions, such as lead generation, sales, bookings, or downloads,
                        completed. We offer top-notch performance marketing; our campaign
                        managers have the highest rate of results as per Google’s brand audit.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>      <Footer />
    </>
  );
};

export default Ecommerce;
