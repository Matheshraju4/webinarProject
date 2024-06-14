import React from "react";

const Banner = ({ BannerContent }: { BannerContent: string }) => {
  return (
    <div className=" bg-yellow-500 text-black font-extrabold text-xl rounded-md p-4 px-8 text-center md:text-3xl m-2">
      {BannerContent}
    </div>
  );
};

export default Banner;
