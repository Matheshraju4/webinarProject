import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeltaArt", // Ensure these are strings
  description: "Webinar project", // Ensure these are strings
};
// Import the metadata
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { RecoilRoot } from "recoil";
import Recoil from "./recoil";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gray-200",
          fontSans.variable
        )}
      >
        <Recoil>
          {children}
          <Toaster />
        </Recoil>
      </body>
    </html>
  );
}
