"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getRazorpay, verifyRazorpay } from "@/lib/razorpay";

let openRazorpay = async () => {
  const order_id = await getRazorpay();
  const options = {
    key: "rzp_live_k64ecgk5XIPVgp",
    amount: "1",
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: order_id,
    handler: async function (response: any) {
      const payment_id = response.razorpay_payment_id;
      const signature = response.razorpay_signature;
      const Success = await verifyRazorpay(order_id, payment_id, signature);
      console.log("Success", Success);
    },
    callback_url: "http://localhost:3000/checkout",
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9000090000",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};
const PaymentButton = () => {
  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="md:w-full md:max-w-3xl px-2 py-2">
        <Button
          className="bg-red-600 text-white text-xl w-full text-center p-8 font-semibold hover:bg-red-700"
          onClick={() => openRazorpay()}
        >
          I WANT CONSISTENT PROFIT
          <div className="bg-white rounded-sm ml-3 p-1">
            <ArrowRight color="#ff0000" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default PaymentButton;
