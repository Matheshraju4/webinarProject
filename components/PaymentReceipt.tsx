import { fetcheverythingusingOrderId } from "@/lib/razorpay";
import React, { useEffect, useState } from "react";

interface PaymentReceiptProps {
  name: string | null;
  email: string | null;
  contact: string | null;
  payment_Id: string | null;
  order_Id: string | null;
}
const PaymentReceipt = ({ order_id }: { order_id: string }) => {
  const [data, setData] = useState<PaymentReceiptProps | null>();
  useEffect(() => {
    async function fetch() {
      const response = await fetcheverythingusingOrderId(order_id);
      if (response) setData(response);
    }
    fetch();
  }, []);
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border">
      <div className="px-4 py-5 sm:px-6 bg-green-500">
        <h3 className="text-lg leading-6  text-white font-semibold">
          Payment Successfull
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-100">
          Checkout the details given below
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.name}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.email}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              WhatsApp Number
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.contact}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Payment ID</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.payment_Id}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Order ID</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data?.order_Id}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PaymentReceipt;
