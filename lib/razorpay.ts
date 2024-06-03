"use server";

import Razorpay from "razorpay";

let instance = new Razorpay({
  key_id: process.env.KEY_ID!,
  key_secret: process.env.SECRET,
});

export async function getRazorpay() {
  const { id } = await instance.orders.create({
    amount: 100,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });
  return id;
}

export async function verifyRazorpay(
  order_id: string,
  payment_id: string,
  signature: string
) {
  const verifyString = order_id + "|" + payment_id;

  // verify signature
  try {
    const payment = await instance.payments.fetch(payment_id);
    if (payment.status === "captured") {
      // Payment is successful
      // Update your order status in the database
      console.log("order_id", order_id);
      console.log("payment_id", payment_id);
      console.log("signature", signature);
      return { success: true, message: "Payment successful" };
    } else {
      // Payment failed
      return { success: false, message: "Payment failed" };
    }
  } catch (error) {
    return { success: false, message: error };
  }
}
