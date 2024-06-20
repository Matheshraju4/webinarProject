import React from "react";

interface Props {
  Normalheading: string;
  coloredheading: string;
  qoutesheading: string;
  explainheading: string;
  description: string;
  date: string;
}
const HeaderComponent = (props: Props) => {
  return (
    <div className="flex flex-col justify-center mx-4 ">
      <h1 className=" text-xl md:text-4xl font-extrabold text-blue-700 p-2 text-center m-1 ">
        {props.Normalheading}
        <span className="text-black">{`${" "} ${props.coloredheading}`}</span>
      </h1>
      <h2 className=" text-lg md:text-3xl font-extrabold text-blue-700 text-center m-2 p-0">
        &quot;{props.qoutesheading}&quot;
        <span className="text-gray-800 text-center">
          {props.explainheading}
        </span>
      </h2>

      <h3 className="text-sm  md:text-2xl  text-center text-gray-600 font-semibold">
        {props.description}
      </h3>
      <div className="flex justify-center items-center w-full">
        <div className="bg-yellows shadow-md rounded-sm p-2 px-6 text-center text-black md:text-xl font-extrabold mt-3 md:w-full md:max-w-2xl">
          Workshop is on {props.date}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
