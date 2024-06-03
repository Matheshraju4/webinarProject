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
    </>
  );
}
