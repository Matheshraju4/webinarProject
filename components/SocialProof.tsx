import React from "react";

const socialProofs = [
  {
    imgUrl:
      "https://via.placeholder.com/150/0000FF/808080?text=$100K+Portfolio",
    name: "John Doe",
    change: "Increased net worth by $50,000",
  },
  {
    imgUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=200%25+Sales",
    name: "Jane Smith",
    change: "Sales increased by 200%",
  },
  {
    imgUrl: "https://via.placeholder.com/150/00FF00/000000?text=$1M+Revenue",
    name: "Mike Johnson",
    change: "Achieved $1M in revenue",
  },
];

const SocialProof: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Success Stories
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {socialProofs.map((proof, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={proof.imgUrl}
                alt={proof.change}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {proof.name}
              </h3>
              <p className="mt-2 text-gray-600">{proof.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
