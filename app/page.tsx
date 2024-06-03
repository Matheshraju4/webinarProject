"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import Banner from "@/components/banner";
import HeaderComponent from "@/components/HeaderComponent";
import PaymentButton from "@/components/PaymentButton";
import CardSection from "@/components/CardSection";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <>
      <Banner />
      <HeaderComponent />
      <VideoPlayer />
      <PaymentButton />
      <CardSection />
    </>
  );
}
