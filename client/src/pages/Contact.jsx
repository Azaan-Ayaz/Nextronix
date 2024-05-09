import React, { useState } from 'react';
import Footer from '../Layout/Footer';
import Header from '../Layout/header';
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/create-contact", {
        name,
        email,
        phone,
        message
      });
      console.log("Form submitted:", { name, email, phone, message });
      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <div style={{backgroundImage:"url('/Contact/nebula.png')"}}>
      <div className="flex justify-center items-center px-16 md:py-20 py-10 bg-black bg-opacity-75 max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1092px] max-md:max-w-full">
        <div className="text-7xl font-extrabold tracking-tighter text-transparent bg-gradient-to-tl from-black via-red-700 to-red-900 bg-clip-text max-md:max-w-full max-md:text-4xl">
          Get in touch
        </div>
        <div className="mt-2 text-2xl font-medium font-poppins max-md:text-center tracking-tight text-white max-md:max-w-full">
          Reach out, and let's create a universe of possibilities together!
        </div>
        <div className="self-stretch p-5 mt-16 rounded-3xl  border-opacity-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 bg-white rounded-lg md:p-2 bg-opacity-10">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-10 text-base tracking-normal text-white text-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl font-semibold tracking-tight text-red-700 font-poppins max-md:max-w-full">
                  Let’s connect to+ Nectronix Digital Solution
                </div>
                <div className="mt-2 text-base font-poppins tracking-normal text-white max-md:max-w-full">
                  Let's align our constellations! Reach out and let the magic of
                  collaboration illuminate our skies.
                </div>
                <form onSubmit={handleSubmit} className="self-stretch p-5 rounded-3xl  max-md:max-w-full">
            <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="justify-center items-start px-3.5 py-3 mt-10 rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="justify-center items-start px-3.5 py-3 mt-3.5 whitespace-nowrap rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="justify-center items-start px-3.5 py-3 mt-3.5 rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="justify-center items-start px-3.5 py-3 mt-3.5 whitespace-nowrap rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
              />
              <button
                type="submit"
                className="flex justify-center items-center px-2.5 py-3 mt-3.5 font-medium text-white rounded-md max-md:px-5 max-md:max-w-full bg-gradient-to-tl from-red-900 via-red-600 to-white"
              >
                <div>Send it to the moon</div>
                <img
                  loading="lazy"
                  srcSet="/Contact/image2.png"
                  className="shrink-0 my-auto mix-blend-screen aspect-[2.17] w-[26px]"
                />
              </button>
            </div>
          </form>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-base tracking-normal max-md:mt-10 max-md:max-w-full">
                <div className="flex overflow-hidden md:mr-6 relative flex-col px-7 pt-20 pb-12 w-full min-h-[536px] max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="/Contact/Image.png"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative mt-80 font-poppins text-white max-md:mt-10 max-md:max-w-full">
                    “Two lunar months revealed Earth's fragile beauty against
                    vast silence, transforming my view of our place in the
                    universe.
                  </div>
                  <div className="relative mt-1.5 font-medium text-white max-md:max-w-full">
                    Irinel Traista
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
           <Footer />
    </>
  );
};

export default Contact;
