import React from "react";

const HeaderComponent = () => {
  return (
    <div className="flex flex-col justify-center mx-4 ">
      <h1 className=" text-2xl md:text-4xl font-extrabold text-blue-700 p-2 text-center m-1 ">
        Launch Your <span className="text-black">First or Next</span>
      </h1>
      <h2 className=" text-xl md:text-3xl font-extrabold text-blue-700 text-center m-2 p-0">
        "HIGH CONVERTING FUNNEL"{" "}
        <span className="text-black text-center">
          To Get Clients Every Single Day... On Complete Automation In 2024
        </span>
      </h2>

      <h3 className="text-md md:text-2xl font-extrabold text-center text-black">
        (Like 9128+ previous participants In The Next 3 Hours Using Free AI
        Tools That Brings Customers For Your Business Every Single Day) (even if
        you are building for the first time with help of free tools)
      </h3>
      <div className="flex justify-center items-center w-full">
        <div className="border-4 border-yellow-500 p-2 px-6 text-center md:text-xl font-extrabold mt-3 md:w-full md:max-w-2xl">
          Workshop is on 6th June 2024 at 7 PM
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
