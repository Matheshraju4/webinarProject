import React from "react";
import { FaGift, FaStar, FaMedal } from "react-icons/fa";

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      icon: <FaGift size={40} className="text-indigo-500" />,
      title: "Bonus 1",
      description: "Exclusive access to premium content.",
    },
    {
      icon: <FaStar size={40} className="text-indigo-500" />,
      title: "Bonus 2",
      description: "Personalized coaching sessions.",
    },
    {
      icon: <FaMedal size={40} className="text-indigo-500" />,
      title: "Bonus 3",
      description: "Certificate of completion.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Special Bonuses
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Sign up now and receive these exclusive bonuses!
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center">
                {bonus.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {bonus.title}
              </h3>
              <p className="mt-2 text-gray-600">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
