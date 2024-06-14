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
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    async function geturl() {
      try {
        const response = await axios.get("/api/getcontent");
        console.log("url", response.data);
      } catch (error) {
        console.error("Error fetching the URL:", error);
      }
    }
    geturl();
  }, []);

  const router = useRouter();

  return (
    <>
      <Banner BannerContent="Super Charge your Webinar" />
      <HeaderComponent
        Normalheading="Launch Your"
        coloredheading="First or Next"
        qoutesheading="HIGH CONVERTING FUNNEL"
        explainheading="To Get Clients Every Single Day... On Complete Automation In 2024"
        description="    Like 9128+ previous participants In The Next 3 Hours Using Free AI Tools
        That Brings Customers For Your Business Every Single Day even if you are
        building for the first time with help of free tools"
        date="6th June 2024 at 7 PM"
      />
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
      <Timer Timing="June 25, 2024 10:00:00" />
    </>
  );
}
