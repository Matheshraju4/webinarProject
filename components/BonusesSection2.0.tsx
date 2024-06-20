import React from "react";
import {
  Award,
  Trophy,
  Medal,
  Crown,
  CandlestickChart,
  DiamondPercent,
} from "lucide-react";

const BonusesSection2 = () => {
  return (
    <div className="bg-white flex flex-col p-8 space-y-8 rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        See What Bonuses You Get
      </h1>
      <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-row items-center text-left space-x-4 border-b border-gray-200 pb-4 lg:border-none lg:pb-0">
          <Award color="#96bf48" absoluteStrokeWidth className="w-12 h-12" />
          <p className="text-gray-700">
            Recognizing your outstanding performance and dedication.
          </p>
        </div>
        <div className="flex flex-row items-center text-left space-x-4 border-b border-gray-200 pb-4 lg:border-none lg:pb-0">
          <Trophy color="#96bf48" absoluteStrokeWidth className="w-12 h-12" />
          <p className="text-gray-700">
            Awarded to the top performer of the month.
          </p>
        </div>
        <div className="flex flex-row items-center text-left space-x-4 border-b border-gray-200 pb-4 lg:border-none lg:pb-0">
          <Medal color="#96bf48" absoluteStrokeWidth className="w-12 h-12" />
          <p className="text-gray-700">
            For demonstrating excellence in all tasks.
          </p>
        </div>
        <div className="flex flex-row items-center text-left space-x-4 border-b border-gray-200 pb-4 lg:border-none lg:pb-0">
          <Crown color="#96bf48" absoluteStrokeWidth className="w-12 h-12" />
          <p className="text-gray-700">
            Reserved for the best of the best in our team.
          </p>
        </div>
        <div className="flex flex-row items-center text-left space-x-4 border-b border-gray-200 pb-4 lg:border-none lg:pb-0">
          <CandlestickChart
            color="#96bf48"
            absoluteStrokeWidth
            className="w-12 h-12"
          />
          <p className="text-gray-700">
            Award for exceptional trading skills and strategies.
          </p>
        </div>
        <div className="flex flex-row items-center text-left space-x-4 lg:border-none lg:pb-0">
          <DiamondPercent
            color="#96bf48"
            absoluteStrokeWidth
            className="w-12 h-12"
          />
          <p className="text-gray-700">
            Achieving the highest status for exceptional contributions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonusesSection2;
