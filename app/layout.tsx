import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Standpoint GH News — Ghana's Voice. Your Standpoint.",
  description:
    "Ghana's premier digital news platform delivering accurate, timely, and impartial news on politics, business, sports, entertainment, technology and more.",
  keywords: [
    "Ghana news",
    "Accra news",
    "African news",
    "Ghana politics",
    "Ghana sports",
    "Ghana business",
    "Standpoint GH",
  ],
  openGraph: {
    title: "Standpoint GH News",
    description: "Ghana's Voice. Your Standpoint.",
    type: "website",
    locale: "en_GH",
    siteName: "Standpoint GH News",
  },
  twitter: {
    card: "summary_large_image",
    title: "Standpoint GH News",
    description: "Ghana's Voice. Your Standpoint.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
