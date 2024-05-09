import React, { useEffect } from 'react';
import { AiOutlineContacts } from 'react-icons/ai';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { FaRegHandshake, FaRegLightbulb, FaRegUser, FaTools } from 'react-icons/fa';
import Header from '../../Layout/header';
import Footer from '../../Layout/Footer';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ManagedServiceBPO = () => {
  const navigate = useNavigate();

  const eventHandle = () => {
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
      <Header />
      <div>
      <div className="flex justify-center items-center px-16 py-20 font-medium bg-gradient-to-tl from-black via-black to-red-950 max-md:px-5">
      <div className="flex flex-col items-center mt-1.5 w-full max-w-[1623px] max-md:max-w-full">
        <div className="flex gap-5 self-stretch text-6xl text-white max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
          <div className="flex-auto my-auto  max-md:max-w-full max-md:text-[28px]"data-aos="fade-right" data-aos-duration="4000">
            &quot;Efficiency <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700'> Redefined:</span> Elevate Your Operations with <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-700'>Our BPO
            Services.</span>&quot;
          </div>
          <img
            loading="lazy"
            srcSet="/BPO/B1.png"
            className="w-full aspect-square max-md:max-w-full"
          />
        </div>
        <div className="justify-center items-end pt-10 mt-10 pr-20 bg-gradient-to-b from-red-600 to-red-950 shadow-2xl rounded-xl pb-10 pl-16 max-md:text-2xl text-4xl max-md:leading-8 leading-7 text-white max-md:pr-8 max-md:pl-5 max-md:max-w-full">
      Don’t Worry Nectronix Digital Is Here For You
    </div>
        <div className="flex gap-5 justify-between mt-24 w-full max-w-[1392px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col px-7 py-9 max-md:px-5 max-md:max-w-full bg-gradient-to-t from-gray-500 via-gray-300 to-gray-100 rounded-lg shadow-2xl">
            <div className="text-3xl leading-7 text-red-700 max-md:max-w-full max-md:text-center" data-aos="fade-right" data-aos-duration="4000">
              Service Level Agreements
            </div>
            <div className="mt-7 text-2xl max-md:text-lg tracking-tight md:leading-7 text-normal font-poppins max-md:max-w-full max-md:text-center" data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
              With our comprehensive SLA services, we offer tailored solutions
              designed to ensure clarity, accountability, and quality standards
              in service provision. From drafting and negotiating SLAs to
              monitoring compliance and resolving disputes, our expert team is
              dedicated to optimizing your business operations.
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="/BPO/B3.png"
            className="shrink-0 max-md:ml-5 max-w-full aspect-square w-[291px]"
          />
        </div>
        <div className="flex gap-5 justify-between mt-28 w-full max-w-[1392px] max-md:flex-col-reverse max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/BPO/B2.png"
            className="shrink-0 max-md:ml-5 max-w-full aspect-square w-[291px]"
          />
          <div className="flex flex-col px-7 py-9 max-md:px-5 max-md:max-w-full bg-gradient-to-t from-gray-500 via-gray-300 to-gray-100 rounded-lg shadow-2xl">
            <div className="text-3xl leading-8 text-red-700 max-md:max-w-full max-md:text-center" data-aos="fade-left" data-aos-duration="4000">
              Procurement policy and SOP
            </div>
            <div className="mt-7 text-2xl max-md:text-lg tracking-tight md:leading-7 text-normal font-poppins max-md:max-w-full max-md:text-center" data-aos="fade-left" data-aos-duration="4000" data-aos-delay="500">
              From developing effective procurement strategies to implementing
              standardized procedures, we ensure compliance, efficiency, and
              best practices in procurement processes. Trust us to streamline
              your procurement operations and enhance transparency,
              accountability, and cost-effectiveness across your organization.
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-28 w-full max-w-[1392px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col px-7 pt-8 pb-16 max-md:px-5 max-md:max-w-full bg-gradient-to-t from-gray-500 via-gray-300 to-gray-100 rounded-lg shadow-2xl">
            <div className="text-3xl leading-7 text-red-700 max-md:max-w-full max-md:text-center" data-aos="fade-right" data-aos-duration="4000">
              Vendor Selection & Management
            </div>
            <div className="mt-7 text-2xl max-md:text-lg tracking-tight md:leading-7 text-normal font-poppins max-md:max-w-full max-md:text-center" data-aos="fade-right" data-aos-delay="500" data-aos-duration="4000">
              From identifying suitable vendors to negotiating contracts and
              managing relationships, we facilitate every aspect of vendor
              engagement. With our expertise, businesses can optimize vendor
              selection, mitigate risks, and enhance overall operational
              efficiency.
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="/BPO/B4.png"
            className="shrink-0 max-w-full max-md:ml-5 aspect-square w-[291px]"
          />
        </div>
        <div className="flex gap-5 justify-between mt-28 w-full max-w-[1392px] max-md:flex-col-reverse max-md:justify-center max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/BPO/B5.png"
            className="shrink-0 max-w-full max-md:ml-5 aspect-square w-[291px]"
          />
          <div className="flex flex-col px-7 pt-7 pb-16 max-md:px-5 max-md:max-w-full bg-gradient-to-t from-gray-500 via-gray-300 to-gray-100 rounded-lg shadow-2xl">
            <div className="text-3xl leading-7 text-red-700 max-md:max-w-full max-md:text-center"  data-aos="fade-left" data-aos-duration="4000">
              Solution Sizing/ Proposing & Product Selection
            </div>
            <div className="mt-7 text-2xl max-md:text-lg tracking-tight md:leading-7 text-normal font-poppins max-md:max-w-full max-md:text-center"  data-aos="fade-left" data-aos-duration="4000" data-aos-delay="500">
              Discover tailored solutions with our expert services in solution
              sizing, proposing, and product selection. Let us streamline your
              decision-making process and find the ideal solutions for your
              needs. Trust our expertise to guide you towards success.
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-28 w-full max-w-[1392px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full ">
          <div className="flex flex-col px-7 pt-8 pb-16 max-md:px-5 max-md:max-w-full bg-gradient-to-t from-gray-500 via-gray-300 to-gray-100 rounded-lg shadow-2xl">
            <div className="text-3xl leading-7 text-red-700 max-md:max-w-full max-md:text-center"  data-aos="fade-right" data-aos-duration="4000">
              Hiring IT Staff
            </div>
            <div className="mt-7 text-2xl max-md:text-lg tracking-tight md:leading-7 max-md:text-center text-normal font-poppins max-md:max-w-full"  data-aos="fade-right" data-aos-duration="4000" data-aos-delay="500">
              From skilled developers to experienced project managers, we offer
              a diverse pool of talented IT professionals ready to enhance your
              team. With a focus on quality, reliability, and expertise, we
              streamline the hiring process, ensuring you find the perfect match
              for your IT requirements.
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="/BPO/B7.png"
            className="shrink-0 max-w-full max-md:ml-5 aspect-square w-[291px]"
          />
        </div>
        <div className="flex gap-5 justify-between mt-28 w-full max-w-[1392px] max-md:flex-col-reverse max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/BPO/B6.png "
            className="shrink-0 max-w-full max-md:ml-5 aspect-square w-[291px]"
          />
          <div className="flex flex-col px-7 py-9 rounded-lg shadow-2xl bg-gradient-to-t from-gray-500 via-gray-300 to-gray-100 max-md:px-5 max-md:max-w-full">
            <div className="text-3xl  leading-7 text-red-700 max-md:max-w-full max-md:text-center" data-aos="fade-left" data-aos-duration="4000">
              IT Support Outsourcing
            </div>
            <div className="mt-7 text-2xl max-md:text-lg tracking-tight md:leading-7 max-md:text-center text-normal font-poppins max-md:max-w-full" data-aos="fade-left" data-aos-duration="4000" data-aos-delay="500">
              With our expert team and tailored solutions, we handle all your IT
              needs, from troubleshooting to system maintenance, allowing you to
              focus on core business activities. Trust us for reliable,
              cost-effective, and scalable IT support outsourcing solutions
              tailored to your specific requirements.
            </div>
          </div>
        </div>
        <div className="justify-center py-8 max-md:text-center pr-28 pl-28 mt-36 max-md:text-2xl text-4xl bg-gradient-to-b from-red-600 to-red-950 shadow-2xl rounded-xl leading-7 text-white max-md:pr-8 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          A VIBRANT, FRIENDLY SPACE TO WORK & MEET
        </div>
        <div className="mt-9 max-md:text-lg text-2xl leading-9 font-normal font-poppins text-center text-white max-md:max-w-full">
          Partner With Nectronix Digital for exceptional Managed Services
          Solutions that empower your business to thrive. Contact Us Now to
          learn more about How we can support your unique needs.
        </div>
      </div>
    </div>
      </div>
      <Footer />
    </>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col rounded-lg bg-white shadow-lg p-8">
    {icon}
    <div className="text-xl semifont-bold mb-4 text-blue-600">{title}</div>
    <div className="text-lg text-black">{description}</div>
  </div>
);

export default ManagedServiceBPO;
