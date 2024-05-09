import React from 'react';
// import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Header from '../Layout/header';

const TermAndServices = () => {
  return (
    <>
      <Header />
      <div className=" lg:px-0">
        <div className="flex mb-3 md:pl-16 bg-gray-100 py-10 shadow-xl flex-col lg:flex-row  items-center justify-between">
          <div className="text-3xl lg:text-7xl md:w-1/3 font-semibold text-center lg:text-left mb-8 lg:mb-0">
            TERMS OF SERVICE
          </div>
          <div className="pb-3 w-full lg:w-2/5 flex justify-center lg:justify-end lg:mr-5">
            <img className="w-full " src="term4.png" alt="Terms" />
          </div>
        </div>
        <div className="text-lg mx-16 text-gray-800 leading-relaxed">
          <ul className="list-decimal  list-inside">
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">ACCEPTANCE OF TERMS</span>
              <br />
              <div className='font-medium tracking-tight font-poppins'>
              Welcome to Nectronix Digital! By accessing or using our services, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please read these Terms carefully before using our website or services. If you disagree with these Terms, you may not access or use our website or services.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">DESCRIPTION OF SERVICES</span>
              <br />
              <div className='font-medium font-poppins tracking-tight'>
              Nectronix Digital provides clients with software development, e-commerce, business process outsourcing, IT, and marketing solutions. Our services include but are not limited to website design, mobile app development, digital marketing, e-commerce solutions, and consulting. We strive to deliver high-quality services tailored to meet our clients' specific needs.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">CLIENT RESPONSIBILITIES</span>
              <br />
              <div className='font-medium font-poppins tracking-tight'>
              Clients are responsible for providing accurate information and materials required for the successful completion of the project. This includes providing clear project requirements, timely feedback, and necessary access to systems and resources. Failure to fulfill these responsibilities may result in project delays or additional costs.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">INTELLECTUAL PROPERTY</span>
              <br />
              <div className='font-medium tracking-tight'>
              Nectronix Digital respects the intellectual property rights of others. All software, designs, code, graphics, and other materials developed by Nectronix Digital remain the intellectual property of Nectronix Digital unless otherwise agreed upon in writing. Clients are granted a non-exclusive license to use the delivered work for their intended purpose.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">CONFIDENTIALITY</span>
              <br />
              <div className='font-medium font-poppins tracking-tight'>
              We understand the importance of maintaining the confidentiality of our client's sensitive information. Nectronix Digital agrees to keep all client information confidential, including business strategies, trade secrets, and project details. We will not disclose or use any confidential information for purposes other than completing the agreed-upon services, except as required by law.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">PAYMENT TERMS</span>
              <br />
              <div className='font-medium font-poppins tracking-tight'>
              Nectronix Digital operates on a project-based or monthly pricing model. The scope and cost of each project will be discussed and agreed upon in advance. Unless otherwise specified, a deposit is required before the start of the project. Final payment is due upon completion and delivery of the project. The project proposal and agreement will outline payment terms and methods.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">LIMITATION OF LIABILITY</span>
              <br />
              <div className='font-poppins font-medium tracking-tight'>
              Nectronix Digital will make every effort to provide accurate and reliable services. However, we do not guarantee our services' performance, reliability, or accuracy, nor do we assume any liability for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to the use or inability to use our services.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">TERMINATION</span>
              <br />
              <div className='font-medium font-poppins tracking-tight'>
              Either party may terminate the agreement with written notice if there is a material breach of the terms and conditions. Upon termination, Nectronix Digital will retain ownership of all intellectual property rights for the work completed, and the client will be responsible for any outstanding fees.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">GOVERNING LAW AND JURISDICTION</span>
              <br />
              <div className='font-medium font-poppins tracking-tight'>
              These Terms of Service shall be governed by and construed by the laws of Jurisdiction. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Jurisdiction.
              </div>
            </li>
            <li className="mb-6">
              <span className="font-semibold font-poppins text-2xl tracking-tight text-blue-600">CONTACT INFORMATION</span>
              <br />
              <div className='font-poppins font-semibold'>
              If you have any questions or concerns regarding these Terms of Service, please contact us at [Contact us button].
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermAndServices;
