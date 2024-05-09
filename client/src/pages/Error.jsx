import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';



const Error = () => {

  const navigate = useNavigate()


  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="flex flex-col justify-center font-light text-white bg-gray-950">
      <div className="flex overflow-hidden relative flex-col items-center px-20 py-16 w-full min-h-[959px] max-md:px-5 max-md:max-w-full">
      
<img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/493d51ce697bd4fdfbd793df946c653391df24e6115bf5b925cf8aed952693f6?"
  className="object-cover absolute inset-0 size-full animate-ping"
  style={{ animationDuration: '3s' }} // Adjust the duration as needed
/>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58ffb4890fa30ad67f98b80feae3621871265571d027f09f8bfc0d359184ba24?"
          className="aspect-square w-[23px] animate-spin"
        />
        <div className="flex relative z-10 flex-col mt-24 ml-24 max-w-full w-[570px] max-md:mt-10">
          <img
            loading="lazy"
            srcSet="/error/error.png"
            className="w-full aspect-[1.47] fill-zinc-300 max-md:max-w-full"
          />
          <div className="flex flex-col items-center mt-8 ml-12 max-w-full w-[297px] max-md:ml-2.5">
            <div className="text-5xl font-medium max-md:text-4xl">OOPS!</div>
            <div className="mt-6 text-3xl uppercase">Page not found</div>
            <div className="flex gap-5 justify-between self-stretch mt-6 text-xl uppercase">
              <div className="justify-center px-6 py-3 rounded-md border border-white border-solid max-md:px-5">
                <button onClick={() => {navigate("/")}}>GO HOME</button>
              </div>
              <div className="justify-center px-7 py-3 rounded-md border border-white border-solid max-md:px-5">
                <button onClick={goBack}>GO BACK</button>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15afabdc8b9b02615f9effc150769266509fc0e688216a8bae64f0c9ee072a7a?"
          className="self-start mt-0 ml-32 w-16 aspect-[1.03] max-md:mt-0 max-md:ml-2.5 animate-spin"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b76f06d859501d5f7a60bb9376c27c92a004a6e518b0b7518a91c4d84e789f?"
          className="self-end mt-36 mr-24 aspect-[1.02] w-[66px] max-md:mt-10 max-md:mr-2.5 animate-spin"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d34507be5ce2927c1fe4d104e7a853930db7a60848eca182602ba2c6303c3de?"
          className="mt-16 aspect-square w-[19px] max-md:mt-10 animate-spin"
        />
      </div>
    </div>
  );
};

export default Error;
