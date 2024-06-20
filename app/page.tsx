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
import CardTick from "@/components/CardWithTick";
import BenefitsSection from "@/components/Benefits";
import Testimonial from "@/components/Testimontial";
import BonusSection from "@/components/BonusesSection";
import SocialProof from "@/components/SocialProof";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import BonusesSection2 from "@/components/BonusesSection2.0";
import Footer from "@/components/Footer";
import Register from "@/components/Register";
const sampleItems = [
  {
    quote: "This is an amazing product! Highly recommend it.",
    name: "John Doe",
    title: "CEO, Company A",
  },
  {
    quote: "Excellent service and support. Five stars!",
    name: "Jane Smith",
    title: "CTO, Company B",
  },
  {
    quote: "A game-changer in the industry. Outstanding experience.",
    name: "Emily Johnson",
    title: "CFO, Company C",
  },
  {
    quote: "Top-notch quality and customer care.",
    name: "Michael Brown",
    title: "COO, Company D",
  },
];
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
      <Register />
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
        <div className="md:w-full md:max-w-4xl px-2 py-2">
          <Button
            className="bg-orange-600 text-white text-xl w-full text-center p-6 font-semibold hover:bg-orange-700"
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
      <div className="bg-black mt-10">
        <CardSection />
        <ButtonReuse />
        <div className="bg-white">
          <CardTick />
          <ButtonReuse />
        </div>

        <BenefitsSection />

        <Testimonial />
        <ButtonReuse />
        <InfiniteMovingCards
          items={sampleItems}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="custom-class "
        />
        <BonusesSection2 />

        <Footer />
        <Timer Timing="June 25, 2024 10:00:00" />
      </div>
    </>
  );
}
function ButtonReuse() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full h-auto">
      <div className="md:w-full md:max-w-4xl px-2 py-2">
        <Button
          className="bg-orange-600 text-white text-xl w-full text-center p-6 pt-9 pb-9 font-semibold hover:bg-orange-700"
          onClick={() => {
            router.push("/getuserinfo");
          }}
        >
          <div className="flex flex-col ">
            <div>I WANT CONSISTENT PROFIT</div>
            <div>
              <span className="line-through font-light">5000</span> {"->"} 1000
            </div>
          </div>
          <div className="bg-white rounded-sm ml-3 p-1">
            <ArrowRight color="#ff0000" />
          </div>
        </Button>
      </div>
    </div>
  );
}
