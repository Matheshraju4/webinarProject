import React from "react";
import { FaChartLine, FaRocket, FaUsers, FaHandsHelping } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center gap-6 text-white py-10">
      <h1 className="text-2xl md:text-3xl font-bold">
        Benefits You Are Going to Gain
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <FaChartLine size={40} className="" />
          <h2 className="text-xl font-semibold">Growth</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaRocket size={40} />
          <h2 className="text-xl font-semibold">Innovation</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaUsers size={40} />
          <h2 className="text-xl font-semibold">Community</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <FaHandsHelping size={40} />
          <h2 className="text-xl font-semibold">Support</h2>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
