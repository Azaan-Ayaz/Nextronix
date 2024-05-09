import React from  'react'
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdSettings } from 'react-icons/md';
import Header from '../Layout/header';
import Footer from '../Layout/Footer';
const Privacy = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-blue-600 font-poppins mb-4">Privacy Policy for Nectronix Digital</h1>
      <p className="mb-6">At Nectronix Digital, we are committed to protecting our clients and users' privacy and security. This privacy policy outlines the types of personal information we may collect, how we use and protect that information, and your rights about your data.</p>

      <h2 className="text-xl font-semibold mb-2 font-poppins">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><FiUser className="inline-block mr-2 font-poppins" /> Name</li>
        <li><FiMail className="inline-block mr-2 font-poppins" /> Contact information (email address, phone number)</li>
        <li><FiUser className="inline-block mr-2 font-poppins" /> Company and job title</li>
        <li><MdSettings className="inline-block mr-2 font-poppins" /> Demographic information (age, gender)</li>
        <li><RiLockPasswordLine className="inline-block font-poppins mr-2" /> Website usage data (IP address, browser information, pages visited)</li>
      </ul>

      <h2 className="text-xl font-semibold font-poppins mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><HiOutlineLocationMarker className="inline-block font-poppins mr-2" /> To communicate with you and respond to your inquiries</li>
        <li><FiMail className="inline-block mr-2 font-poppins" /> To provide you with the services and products requested</li>
        <li><FiUser className="inline-block mr-2 font-poppins" /> To personalize your experience on our website and improve our services</li>
        <li><MdSettings className="font-poppins inline-block mr-2" /> To send you marketing communications if you have opted in to receive them</li>
        <li><FiPhone className="font-poppins inline-block mr-2" /> To comply with legal obligations and enforce our terms and conditions</li>
      </ul>

      {/* Add other sections similarly */}

      <h2 className="text-xl font-poppins font-semibold mb-2">Contact Information</h2>
      <p>If you have any questions or concerns regarding this privacy policy, please contact us at <a href="mailto:info@techsolsoltechnologies.com" className="font-poppins text-blue-500">info@techsolsoltechnologies.com</a>.</p>

      <p className="mt-8 font-poppins">Using our website signifies your acceptance of this privacy policy. It is recommended to review this policy regularly to stay informed about our practices.</p>
    </div>
    <Footer/>
    </>
  )
}

export default Privacy