import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Car Mechanic Service UAE | 24/7 Roadside Assistance",
  description: "Fast, reliable door-to-door and roadside car mechanic services across UAE. Certified mechanics arrive in 30-45 minutes. Book now or call for emergency assistance.",
  keywords: "car mechanic UAE, roadside assistance Dubai, mobile mechanic, car repair UAE, emergency mechanic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
