// razorpay.d.ts
interface RazorpayOptions {
  key: string;
  amount: string;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  callback_url: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

interface Razorpay {
  open(): void;
}

interface Window {
  Razorpay: new (options: RazorpayOptions) => Razorpay;
}
