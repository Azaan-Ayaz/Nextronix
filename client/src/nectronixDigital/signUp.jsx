import React, { useState } from 'react';
import Header from '../Layout/header';
import Footer2 from '../Layout/Footer2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/create-nexUser', {
        name,
        email,
        password,
        phone,
        city,
        country,
      });
      if (res.data.success) {
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto md:mb-10 mt-20">
        <div className="flex flex-col md:px-36 md:flex-row justify-center items-center md:justify-between">
          <div className="w-full md:w-1/2 lg:w-2/4 px-4">
            <img src="up.png" alt="SignUp" className="w-full" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mt-8 md:mt-0">
            <div className="text-blue-600 text-center font-semibold font-poppins text-3xl mb-6">Get in Touch</div>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-poppins">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-600"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-poppins">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-600"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-poppins mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-600"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1 font-poppins">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-600"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block mb-1 font-poppins">City</label>
                <input
                  type="text"
                  id="city"
                  required
                  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-600"
                  placeholder="Your City Name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block mb-1 font-poppins">Country</label>
                <input
                  type="text"
                  id="country"
                  required
                  className="border border-gray-400 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-600"
                  placeholder="Your Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-600 font-poppins text-white rounded-md py-2 px-6 hover:bg-blue-700 transition duration-300">SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default SignUp;
