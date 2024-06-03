"use server";

import Razorpay from "razorpay";
import { createHmac } from "crypto";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

let instance = new Razorpay({
  key_id: process.env.KEY_ID!,
  key_secret: process.env.SECRET,
});

export async function getRazorpay(
  username: string,
  email: string,
  contact: string
) {
  const receipt = await create_order_id();
  if (receipt) {
    const { id } = await instance.orders.create({
      amount: 100,
      currency: "INR",
      receipt: receipt,
      notes: {
        key1: "value3",
        key2: "value2",
      },
    });
    const update_id = await prisma.user.update({
      where: { receipt: receipt },
      data: { order_Id: id, name: username, email: email, contact: contact },
    });
    const { order_Id } = update_id;
    if (order_Id === id) {
      return id;
    }
  } else return null;
}

export async function create_order_id() {
  const receipt = Date.now().toString() + Math.random().toString();
  const response = await prisma.user.create({
    data: {
      receipt: receipt,
    },
  });
  if (response) {
    const { receipt } = response;
    return receipt;
  } else {
    return "Something went wrong";
  }
}
export async function verifyRazorpay(
  order_id: string,
  payment_id: string,
  signature: string
) {
  const verifyString = order_id + "|" + payment_id;

  const expectedSignature = createHmac("sha256", process.env.SECRET!)
    .update(verifyString.toString())
    .digest("hex");
  console.log("expectedSignature", expectedSignature);
  if (signature === expectedSignature) {
    try {
      const payment = await instance.payments.fetch(payment_id);

      if (payment.status === "captured") {
        // Payment is successful
        // Update your order status in the database
        console.log("order_id", order_id);
        console.log("payment_id", payment_id);
        console.log("signature", signature);
        const updateDatabase = await prisma.user.update({
          where: { order_Id: order_id },
          data: { payment_Id: payment_id, signature: signature },
        });
        return { success: true, message: "Payment successful" };
      } else {
        // Payment failed
        return { success: false, message: "Payment failed" };
      }
    } catch (error) {
      return { success: false, message: error };
    }
  } else {
    return { success: false, message: "Invalid signature" };
  }

  // verify signature
}

export async function fetcheverythingusingOrderId(order_ID: string) {
  const response = await prisma.user.findUnique({
    where: { order_Id: order_ID },
  });
  if (response) {
    const { name, email, contact, payment_Id, order_Id } = response;

    return { name, email, contact, payment_Id, order_Id };
  } else {
    return null;
  }
}
