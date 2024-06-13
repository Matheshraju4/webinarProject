"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import Banner from "@/components/banner";
import HeaderComponent from "@/components/HeaderComponent";

import CardSection from "@/components/CardSection";
import VideoPlayer from "@/components/VideoPlayer";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Timer from "@/components/Timer";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Banner />
      <HeaderComponent />
      <VideoPlayer />
      <div className="flex justify-center items-center w-full ">
        <div className="md:w-full md:max-w-3xl px-2 py-2">
          <Button
            className="bg-red-600 text-white text-xl w-full text-center p-8 font-semibold hover:bg-red-700"
            onClick={() => {
              router.push("/getuserinfo");
            }}
          >
            I WANT CONSISTENT PROFIT
            <div className="bg-white rounded-sm ml-3 p-1">
              <ArrowRight color="#ff0000" />
            </div>
          </Button>
        </div>
      </div>
      <CardSection />
      <div className="relative ">
        <div className=" fixed bottom-0 left-0 right-0 flex md:flex-row flex-col justify-center items-center  p-2 bg-slate-300 mt-36 rounded-md mb-0 ">
          <h1 className=" text-xl md:text-3xl font-bold p-1 md:pr-10">
            Webinar will Start in{" "}
          </h1>
          <Timer Timing="June 25, 2024 10:00:00" />
        </div>
      </div>
    </>
  );
}
