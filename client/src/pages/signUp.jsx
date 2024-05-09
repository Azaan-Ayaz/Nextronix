import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Input, Button, Img } from "../components";
import SginUpFlowDividers from "../components/SginUpFlowDividers";

export default function SginupflowPage() {
  return (
    <>
      <Helmet>
        <title>SignUp page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="md:flex md:flex-row justify-between items-center w-full p-5 bg-white-A700">
        <div className="md:h-[979px] md:w-[50%] md:relative">
          <Img
            src="images/img_rectangle_4.png"
            alt="image"
            className="justify-center md:flex-row flex-col h-[979px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[30px]"
          />
          <div className="md:flex hidden md:flex-col items-start justify-start w-[81%] top-[4%] right-0 left-0 m-auto absolute">
            <Img src="images/img_fictional_company.svg" alt="fictional_one" className="h-[47px]" />
            <Heading size="lg" as="h1" className="mt-[415px] text-white tracking-[-1.20px]">
              Enhance your design process with Nectronix Digital.
            </Heading>
            <Text size="s" as="p" className="w-[75%] mt-8 text-white !text-gray-300_99 opacity-0.7">
              Our versatile tool provides an extensive array of components, igniting creativity and enhancing efficiency
              to streamline workflows for designers.
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:w-[33%] md:mr-[111px] md:gap-[31px]">
          <a href="#">
            <Heading size="md" as="h2" className="!text-blue-600 tracking-[-1.44px] text-center">
              Create an account
            </Heading>
          </a>
          <div className="flex flex-col items-center justify-start w-full gap-8">
                        <SginUpFlowDividers className="flex flex-row justify-center w-full" />
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                <Text as="p">Name</Text>
                <input type="text" placeholder="What should we call you?" className="w-full" />
                {/* <Input name="name"  /> */}
              </div>
              <div className="flex flex-col items-start justify-start w-full ">
                <Text as="p">Email</Text>
                <input type="email" name="email" placeholder="you@domain.com" className="w-full justify-start" />
                {/* <Input type="email"  /> */}
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                <Text as="p">Password</Text>
                <input type="password" name="password" placeholder="••••••••" className="w-full" />
                {/* <Input type="password"  /> */}
              </div>
              <Text as="p" className="!text-gray-400">
                Must be at least 8 characters
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[26px]">
              <a
                href="#"
                className="flex justify-center items-center w-[454px] h-[55px] px-[35px] py-[17px] outline-blue-700 outline-t-[1] outline-l-[1] outline-b-[2] outline-r-[1] outline bg-blue-600 rounded-lg"
              >
                <Heading size="s" as="h2" className="md:text-center text-white">
                  Create account
                </Heading>
              </a>
              <div className="flex flex-row justify-start w-[80%] gap-1">
                <div className="flex flex-row justify-start w-[76%]">
                  <Text as="p" className="mt-0.5 !text-black-900 font-poppins !font-normal">
                    Already an member?
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[43%]">
                  <a href="#" className="mt-0.5">
                    <Heading as="h3" className="text-blue-700 text-center">
                      Log in
                    </Heading>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
