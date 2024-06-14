"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { getRazorpay, verifyRazorpay } from "@/lib/razorpay";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RecoilRoot, useRecoilState } from "recoil";
import { order_id } from "@/lib/atom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "username must be at least 2 characters.",
  }),
  email: z.string().min(3).email({ message: "Please provide a valid email." }),
  contact: z.string().min(10).max(10, {
    message: "Please provide a valid contact number.",
  }),
});

function ProfileForm() {
  const [orderId, setOrderId] = useRecoilState(order_id);
  const router = useRouter();
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

  let openRazorpay = async (
    username: string,
    email: string,
    contact: string
  ) => {
    const order_id = await getRazorpay(username, email, contact);
    if (order_id) {
      const options = {
        key: "rzp_live_k64ecgk5XIPVgp",
        amount: "1",
        currency: "INR",
        name: "Delta Art",
        description: "Webinar project",
        image:
          "https://www.google.com/imgres?q=nextjs%20image%20icon%20url&imgurl=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fnext-js-icon-2048x2048-5dqjgeku.png&imgrefurl=https%3A%2F%2Ficonduck.com%2Ficons%2F11295%2Fnext-js&docid=3LREy_izk5fyWM&tbnid=BHwjLUdxlfD00M&vet=12ahUKEwib49Wqhb-GAxW1SGwGHeLaACAQM3oECBYQAA..i&w=2048&h=2048&hcb=2&ved=2ahUKEwib49Wqhb-GAxW1SGwGHeLaACAQM3oECBYQAA",
        order_id: order_id,
        handler: async function (response: any) {
          const payment_id = response.razorpay_payment_id;
          const signature = response.razorpay_signature;

          const Success = await verifyRazorpay(order_id, payment_id, signature);
          if (Success.success) {
            console.log("Success", Success);
            toast.success("Payment Successful");
            setOrderId(order_id);
            localStorage.setItem("order_id", order_id);

            router.push("/checkout");
          } else {
            console.log("Failed", Success);
          }
        },
        callback_url: "http://localhost:3000/checkout",
        prefill: {
          name: username,
          email: email,
          contact: contact,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#1d4ed8",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      toast.error("Something went wrong");
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      contact: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await openRazorpay(
      values.username,
      values.email,
      values.contact
    );
    console.log("response", res);
  }
  // ...}

  return (
    <Form {...form}>
      <div className="flex flex-col justify-center items-center w-full min-h-screen p-4 bg-gradient-to-r from-white to-blue-200 ">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Enter Valid Information
        </h1>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-blue   md:w-1/2 w-full  p-5 border-2 border-slate-800 rounded-lg bg-white"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Matheshraju"
                    {...field}
                    className="border-slate-600 text-slate-500 focus:text-black focus:border-black focus:border-2"
                  />
                </FormControl>
                <FormDescription>
                  <FormMessage />
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="matheshraju@gmail.com"
                    {...field}
                    className="border-slate-600 text-slate-500 focus:text-black focus:border-black focus:border-2"
                  />
                </FormControl>
                <FormDescription>
                  <FormMessage />
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-semibold">
                  Whatsapp Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="8825785551"
                    {...field}
                    className="border-slate-600 text-slate-500 focus:text-black focus:border-black focus:border-2"
                  />
                </FormControl>
                <FormDescription>
                  <FormMessage />
                </FormDescription>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-2xl p-6"
          >
            Submit & Pay
          </Button>
        </form>
      </div>
    </Form>
  );
}

const Page = () => {
  return <ProfileForm />;
};

export default Page;
