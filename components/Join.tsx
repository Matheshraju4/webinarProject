import React from "react";

const Join = () => {
  return (
    <div className="max-w-2xl  p-3 pl-5 pr-5 bg-white shadow-xl flex flex-col  items-left gap-2 rounded-md">
      <div className="flex flex-row justify-between gap-2">
        <h1 className="text-lg font-medium">Join This WhatsApp Group </h1>
        <button className="bg-orange-400 text-black font-semibold text-md max-w-28 p-1 pl-2 pr-2 rounded-md">
          Join Now
        </button>
      </div>

      <a
        href="https://wa.me/917009313300"
        className="text-sm text-blue-500 underline"
      >
        https://wa.me/917009313300
      </a>
    </div>
  );
};

export default Join;
