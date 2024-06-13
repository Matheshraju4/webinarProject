"use client";

import {
  daysCounter,
  hoursCounter,
  minutesCounter,
  secondsCounter,
} from "@/lib/atom";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const Timer = ({ Timing }: { Timing: string }) => {
  const [days, setdays] = useRecoilState(daysCounter);
  const [hours, sethours] = useRecoilState(hoursCounter);
  const [minutes, setminutes] = useRecoilState(minutesCounter);
  const [seconds, setseconds] = useRecoilState(secondsCounter);

  // count-down timer
  let dest = new Date(Timing || "June 25, 2024 10:00:00").getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let diff = dest - now;

    // Check if the countdown has reached zero or negative
    if (diff <= 0) {
      clearInterval(x); // Stop the countdown
      return; // Exit the function
    }

    let day = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((diff % (1000 * 60)) / 1000);

    setdays(day);
    sethours(hour);
    setminutes(minute);
    setseconds(second);
  }, 1000);

  return (
    <>
      <div className="flex items-start justify-center gap-4 count-down-main">
        <div className="timer w-16">
          <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
            <h3 className="countdown-element days font-Cormorant font-semibold text-2xl md:text-xl text-white text-center">
              {days}
            </h3>
          </div>
          <p className="text-md md:text-xl font-Cormorant font-medium text-gray-900 mt-1 text-center w-full">
            days
          </p>
        </div>
        <h3 className="font-manrope font-semibold text-2xl md:text-xl text-gray-900">
          :
        </h3>
        <div className="timer w-16">
          <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
            <h3 className="countdown-element hours font-Cormorant font-semibold text-2xl md:text-xl text-white text-center">
              {hours}
            </h3>
          </div>
          <p className="text-md md:text-xl font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">
            hours
          </p>
        </div>
        <h3 className="font-manrope font-semibold text-2xl md:text-xl text-gray-900">
          :
        </h3>
        <div className="timer w-16">
          <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
            <h3 className="countdown-element minutes font-Cormorant font-semibold text-2xl md:text-xl text-white text-center">
              {minutes}
            </h3>
          </div>
          <p className="text-md md:text-xl font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">
            minutes
          </p>
        </div>
        <h3 className="font-manrope font-semibold text-2xl md:text-xl text-gray-900">
          :
        </h3>
        <div className="timer w-16">
          <div className="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
            <h3 className="countdown-element seconds font-Cormorant font-semibold text-2xl md:text-xl text-white text-center animate-countinsecond">
              {seconds < 10 ? `0${seconds}` : seconds}
            </h3>
          </div>
          <p className="text-md md:text-xl font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">
            seconds
          </p>
        </div>
      </div>
    </>
  );
};

export default Timer;
