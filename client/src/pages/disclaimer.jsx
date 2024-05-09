import React from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/header';

const Disclaimer = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-24 mb-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">
            Disclaimer:
          </h2>
          <p className="text-lg text-black font-poppins">
            Welcome to the website of Techsol Solutions. We would like to inform
            you that the information provided on this website is intended for
            general purposes only. We strive to ensure that the information
            provided is up-to-date and accurate, but we cannot guarantee that it
            is always complete, reliable, suitable, or available for any
            particular purpose. Therefore, we advise you to use your discretion
            and judgment when using any information provided on this website as
            it is strictly at your own risk.
          </p>
          <p className="text-lg text-black font-poppins mt-4">
            Please note that we will not be held liable for any loss or damage,
            including but not limited to indirect or consequential loss or
            damage, arising from the use of this website. This includes loss of
            data or profits that may result from the use of the information
            provided on this website.
          </p>
          <p className="text-lg text-black font-poppins mt-4">
            Furthermore, we would like you to be aware that this website may
            contain links to other websites that are not under the control of
            Techsol Solutions. We do not have any control over the nature,
            content, and availability of these sites. Therefore, we cannot be
            held responsible for any information or content that may be found on
            these other websites. We advise you to exercise caution when accessing
            any other websites linked to this website and to read their privacy
            policies and terms of use.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
