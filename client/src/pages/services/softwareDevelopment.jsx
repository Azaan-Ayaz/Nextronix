import React, { useEffect } from 'react';
import Header from '../../Layout/header';
import Footer from '../../Layout/Footer';
import { FaDesktop, FaCogs, FaFileAlt, FaChartBar } from 'react-icons/fa'; // Importing Font Awesome icons
import AnimatedTextLoop from '../animation'; // Adjust the path according to your project structure
import "./digital Marketing/assets/software.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const SoftwareDevelopment = () => {

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
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-11 w-full bg-black max-md:px-5 max-md:max-w-full">
          <div className="w-full max-w-[1627px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-11 mt-28 w-full font-semibold text-white rounded-none max-md:mt-10 max-md:max-w-full">
                  <div class="relative">
                    <div className="glowing-light absolute inset-0 bg-white opacity-100 bg-clip-text transition-opacity duration-500"></div>
                    <div class="md:text-5xl text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text tracking-tighter capitalize md:leading-[50px] max-md:max-w-full max-md:text-3xl  relative z-10" data-aos="fade-right" data-aos-duration="800">
                      WANT A NEW CUSTOM SOFTWARE ?
                    </div>
                  </div>

                  <div className="mt-11 md:text-2xl tracking-tighter font-normal leading-6 capitalize max-md:mt-10 max-md:max-w-full">
                    Look no further than Nectronix Digital Solutions Technology
                    ... we've got you covered!
                  </div>
                  <div className="mt-8 md:text-2xl font-normal max-md:mt-10 max-md:max-w-full">
                    We are a top-notch provider of Software Development Services.
                    We specialize in developing various softwares, including ERPs,
                    CRM, CMS, Business Intelligence Software, and custom software.
                    Our team consists of highly skilled developers and designers
                    who are committed to delivering innovative solutions that
                    cater to the specific requirements of our clients.
                  </div>

                </div>
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/softwareDevelopment/pic1.png"
                  className="w-full aspect-[1.35] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-16 pt-9 pb-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-start mb-6 max-md:flex-wrap">
            <img
              loading="lazy"
              srcSet="/softwareDevelopment/cube1.png"
              className="shrink-0 w-20 aspect-[1.04]"
            />
            <div className="flex flex-col mt-6 text-blue-950" data-aos="fae-up" data-aos-duration="1000">
              <div className="text-3xl font-semibold leading-9" >
                Architect your Solution
              </div>
              <div className="mt-8 text-lg">
                Our team in on your operational, technological, and strategic
                challenges through an in-depth understanding of your business. We
                design a strategic roadmap to guide your result-oriented goals.
              </div>
            </div>
            <div className="flex justify-center items-center px-1.5 rounded-xl h-[82px] w-[82px]">
              <img
                loading="lazy"
                srcSet="/softwareDevelopment/cube2.png"
                className="shrink-0 w-[70px] aspect-[1.04] "
              />
            </div>
            <div className="flex flex-col mt-1.5 text-blue-950">
              <div className="text-3xl font-semibold leading-9">
                Engineer your Solution
              </div>
              <div className="mt-9 text-lg">
                We promptly put together your nearshore engineering dream team to
                fulfill your specific requirements. We create the most elegant
                solution for your difficulties by combining our deep tech
                expertise, Top 1% Tech Talent, and industry-specific experience.
              </div>
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap">
                <div className="flex justify-center items-center px-1.5 rounded-xl h-[81px] w-[81px]">
                  <img
                    loading="lazy"
                    srcSet="/softwareDevelopment/cube3.png"
                    className="aspect-[1.03] w-[70px]"
                  />
                </div>
                <div className="flex-auto self-start text-3xl font-semibold leading-9 text-blue-950">
                  ReEngineer your Business Process
                </div>
              </div>
              <div className="self-end mt-7 text-lg text-blue-950 w-[357px]">
                Bolster by our team, your digital transformation swiftly gains
                speed and evolves into a digital acceleration. This process places
                the foundation for a more efficient and strong business that can
                meet demands at scale.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-red-700 px-16 py-20 w-full shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center mb-4 w-full max-w-[1343px] max-md:max-w-full">
            <div className="text-3xl font-semibold text-center text-white">
              How to Start
            </div>
            <div className="mt-10 text-7xl font-semibold text-center leading-[58.1px] text-stone-200 max-md:max-w-full max-md:text-4xl">
              Easy Process
            </div>
            <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center justify-center mt-4 font-semibold text-white max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eae5e888849da29c3790ece4e4dcd4e45262a381528a4dd372c2ac6ff5402e7?"
                      className="w-[138px] h-[175px] object-cover"
                      alt="Illustration"
                    />
                    <div className="mt-6 text-3xl leading-9 text-center">
                      YOU ASK
                    </div>
                  </div>

                </div>
                <div className="md:flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center justify-center mt-4 font-semibold text-white">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d80cf2fd7785e28a892a436ac1d2cee275c7596ba74b42678322afcc83ab5efa?"
                      className="w-[117px] h-[148px] object-cover"
                      alt="Illustration"
                    />
                    <div className="mt-6 text-3xl leading-9 text-center">
                      WE PROCEED
                    </div>
                  </div>

                </div>
                <div className="md:flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center mt-3 font-semibold text-white max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9af1bdddd41b7bdf3136bf995d54e04e65cc069c44a1189e6263cdd8523d6d?"
                      className="w-[125px] h-[160px] object-cover"
                      alt="Illustration"
                    />
                    <div className="mt-6 text-3xl leading-9 text-center">
                      Discuss
                    </div>
                  </div>

                </div>
                <div className="flex flex-col mt-10 ml-5 w-[18%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-center mt-1.5 font-semibold text-white max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/655734b1828b1bc678ae02ca32ab70950667ffc7b74473d344a045bcd07df2fa?"
                      className="w-[108px] h-[112px] object-cover"
                      alt="Illustration"
                    />
                    <div className="flex items-center mt-6">

                      <div className="ml-4 text-3xl leading-9">
                        YOU GET
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-6 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
          <div className="mt-14 mb-2 w-full max-w-[1618px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-semibold max-md:max-w-full max-md:text-4xl" data-aos="fade-right" data-aos-delay="500">
                    ERP Software Development Services
                  </div>
                  <div className="md:mt-12 text-base  font-poppins tracking-tighter text-justify mt-4 max-md:max-w-full">
                    <p className="mb-6 md:text-[22px]"data-aos="fade-right" data-aos-delay="650">
                    Are you looking to streamline your business processes and
                    increase efficiency?
                    </p>
                    <p className="mb-6 md:text-[22px]"data-aos="fade-right" data-aos-delay="700">
                    Look no further than our ERP Software Development Services. We
                    specialize in developing customized ERP software solutions
                    that are tailored to meet the specific needs of your business.
                    </p>
                    <p className="mb-6 md:text-[22px]" data-aos="fade-right" data-aos-delay="950">
                    With our ERP software, you can automate key business
                    processes, such as inventory management, supply chain
                    management, financial management, and customer relationship
                    management. This will not only save you time and resources but
                    also enable you to make more informed decisions and improve
                    overall operational efficiency.
                    </p>
                    <p data-aos="fade-right" data-aos-delay="1100" className='md:text-[22px]'>
                    Our ERP software development services also include data
                    migration, system integration, training, and support. We will
                    ensure a smooth transition to the new system and provide
                    ongoing assistance to ensure your business continues to
                    operate smoothly.
                    </p>
                  </div>

                </div>
              </div>
              <div className="flex flex-col md:ml-72 ml-5 w-[25%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/softwareDevelopment/erp.png"
                  className="mt-2.5 w-full md:h-4/5 max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-4 py-12 bg-black sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col w-full max-w-[1620px]">
            
            <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row max-md:flex-col max-md:gap-0">
              
              <div className="w-full md:w-[57%] max-md:ml-0">
                <div className="text-lg font-poppins tracking-tighter text-justify text-white">
                <div className="self-end text-left text-4xl font-semibold text-white mb-6 md:mr-2.5" data-aos="fade-right" data-aos-delay="500">
              CRM Software Development Services
            </div>
            <div className='text-base font-poppins'>
                  <p className="mb-6 md:text-[22px]"data-aos="fade-right" data-aos-delay="650">
                    When it comes to CRM software development services, our team has
                    the expertise and experience to create customized solutions that
                    meet your business needs. We understand the importance of a
                    well-designed CRM system in managing customer relationships and
                    improving overall productivity. Our software development process
                    begins with a detailed analysis of your business requirements and
                    objectives.
                  </p>
                  <p className="mb-6 md:text-[22px]" data-aos="fade-right" data-aos-delay="700">
                    We work closely with you to identify key features and
                    functionalities that will enhance your CRM capabilities. Our team of
                    skilled developers then crafts a tailor-made software solution that
                    aligns with your specific needs. We prioritize user-friendly
                    interfaces and intuitive navigation to ensure a seamless user
                    experience.
                  </p>
                  <p className="mb-6 md:text-[22px]" data-aos="fade-right" data-aos-delay="950">
                    Our CRM software development services encompass a range of
                    functionalities, including lead management, sales automation,
                    customer service, and analytics. We also integrate third-party
                    applications and data sources to provide a comprehensive solution.
                  </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[25%] max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="/softwareDevelopment/crm.png"
                  className="w-full aspect-[1.01] max-md:mt-10"
                  alt="CRM Software"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-10 px-16 md:py-20 mt-1 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
          <div className="md:mt-10 mb-1.5 w-full max-w-[1621px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-semibold max-md:max-w-full max-md:text-4xl" data-aos="fade-right" data-aos-delay="500">
                    CMS Software Development Services
                  </div>
                  <div className="md:mt-12 tracking-tight text-justify font-poppins mt-3 max-md:max-w-full">
                    <p className='md:mb-6 mb-2 md:text-[22px]' data-aos="fade-right" data-aos-delay="650">
                      Are you looking to streamline your business processes and
                      increase efficiency?
                    </p>
                    <p className='md:mb-6 mb-2 md:text-[22px]'  data-aos="fade-right" data-aos-delay="700">
                      Look no further than our ERP Software Development Services. We
                      specialize in developing customized ERP software solutions
                      that are tailored to meet the specific needs of your business.
                    </p>
                    <p className='md:mb-6 mb-2 md:text-[22px]'  data-aos="fade-right" data-aos-delay="950">
                      With our ERP software, you can automate key business
                      processes, such as inventory management, supply chain
                      management, financial management, and customer relationship
                      management. This will not only save you time and resources but
                      also enable you to make more informed decisions and improve
                      overall operational efficiency.
                    </p>
                    <p data-aos="fade-right" data-aos-delay="1100" className='md:text-[22px]'>
                    Our ERP software development services also include data
                    migration, system integration, training, and support. We will
                    ensure a smooth transition to the new system and provide
                    ongoing assistance to ensure your business continues to
                    operate smoothly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  md:ml-96 w-[25%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/softwareDevelopment/cms.png"
                  className="self-stretch my-auto w-full aspect-[0.79] rounded drop-shadow-2xl  max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full text-white min-h-[1143px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/softwareDevelopment/bg1.png"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mb-2 w-full max-w-[1614px] max-md:max-w-full">
            <div className="self-center font-medium text-center max-md:max-w-full text-xl md:text-4xl">
              Our CMS software development services encompass
              <br />a range of functionalities, including
            </div>
            <div className="mt-12 md:text-2xl text-lg text-justify max-md:mt-10 max-md:max-w-full">
              1.       Content Creation and Editing: Our CMS solution enables you
              to effortlessly create and edit. With a user-friendly interface, you
              can easily update content, add multimedia elements, and apply
              formatting.
              <br /> <br />
              2.       Workflow Management: We provide robust workflow management
              modules to streamline content approval processes. Set up multiple
              user roles with varying permissions, ensuring that content goes
              through the appropriate review and approval channels within your
              organization.
              <br /> <br />
              3.       Version Control: Our CMS software includes version control
              capabilities, allowing you to track and manage changes made to your
              content. You can revert to previous versions, compare revisions, and
              maintain a clear audit trail of modifications.
              <br /> <br />
              4.       Customization and Theming: We understand the importance of
              a visually appealing website. Our CMS software development services
              provide options for customization and theming, allowing you to
              create a unique and visually captivating online presence for your
              brand.
              <br /> <br />
              5.       Integration Capabilities: Our CMS software seamlessly
              integrates with other systems and applications that are essential
              for your business operations. Whether it's integrating with CRM
              platforms, e-commerce solutions, or analytics tools, we ensure
              smooth data flow and enhanced functionality.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-20 w-full bg-black max-md:px-5 max-md:max-w-full">
          <div className="mt-14 mb-5 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="/softwareDevelopment/bd.png"
                  className="grow w-full aspect-[0.9] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-semibold max-md:max-w-full max-md:text-4xl" data-aos="fade-left" data-aos-delay="500">
                    Business Intelligence Software Development
                  </div>
                  <div className="mt-14 text-[22px] text-justify max-md:mt-10 max-md:max-w-full" data-aos="fade-left" data-aos-delay="700">
                    At Nectronix Digital Solution, we understand the importance of
                    utilizing cutting-edge technology to gain valuable insights
                    and make informed business decisions. That's why we specialize
                    in developing software solutions that allow businesses to
                    effectively manage and analyze their data, unlocking its true
                    potential.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center w-full font-semibold text-justify text-white  max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/softwareDevelopment/bg2.png"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative justify-center items-center px-16 py-20 w-full bg-black bg-opacity-15 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col  mb-4 w-full max-w-[1629px] max-md:max-w-full">
              <div className="md:text-4xl font-poppins max-md:max-w-full">
                Our business intelligence software development services cover a
                wide range of areas, including:
              </div>
              <div className="mt-20 md:text-xl font-poppins font-normal max-md:mt-10 max-md:max-w-full">
                1. Data Integration: We can help you bring together data from
                various sources, whether it's internal data from different
                departments or external data from APIs and third-party
                applications. Our integration solutions ensure seamless data flow
                and reliable data synchronization.
                <br /> <br />
                2. Data Analysis and Reporting: With our software solutions, you
                can easily analyze and visualize your data to gain critical
                insights. Our reporting capabilities help you track key
                performance indicators, identify trends, and make data-driven
                decisions.
                <br /> <br />
                3. Real-time Monitoring: Keep a finger on the pulse of your
                business with our real-time monitoring solutions. Our software can
                collect and process data in real-time, allowing you to react
                quickly to changing conditions and make informed decisions on the
                fly.
                <br /> <br />
                4. Predictive Analytics: Leverage the power of predictive
                analytics to forecast future trends and make proactive decisions.
                Our software incorporates advanced algorithms to analyze
                historical data and provide accurate predictions, helping you stay
                ahead of the competition.
                <br /> <br />
                5. Interactive Dashboards: Our interactive dashboards provide a
                user-friendly interface to view and analyze your data. Customize
                your dashboard to display the metrics and visualizations that are
                most relevant to your business, creating a personalized experience
                for each user.
                <br /> <br />
                6. Data Security: We prioritize the security of your data
                throughout the development process. Our software solutions
                implement robust security measures to protect sensitive
                information and ensure compliance with data privacy regulations.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-px w-full text-white bg-gradient-to-b from-red-700 via-red-600 to-red-500 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 py-20 shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col mt-7 w-full max-w-[1616px] max-md:max-w-full">
              <div className="md:text-xl font-poppins font-normal text-justify max-md:max-w-full">
                We consider delivering high-quality software that makes you
                satisfied a priority. We are committed to providing reliable and
                efficient solutions that surpass expectations. Regardless of your
                business size, our team has the expertise to help you achieve your
                software development goals. Our approach follows industry
                standards and utilizes the latest technology to create flexible
                and durable CRM software. Our solutions are tailored to meet your
                evolving business requirements, whether you are a small business
                or a large corporation. Let our Software Development Services
                elevate your business to new heights.
                <br />
                Contact us today to discuss your software development needs and
                discover how we can assist you in harnessing the power of
                technology for your business success.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
