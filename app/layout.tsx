import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arun Pranav A T - Developer Portfolio",
  description: "Explore the personal portfolio of Arun Pranav A T - showcasing projects, skills, and my journey in tech.",
  metadataBase: new URL("https://arunpranavat.vercel.app"),
  openGraph: {
    title: "Arun Pranav A T - Developer Portfolio",
    description: "Explore the personal portfolio of Arun Pranav A T - showcasing projects, skills, and my journey in tech.",
    url: "https://arunpranavat.vercel.app",
    siteName: "Arun Pranav A T",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Arun Pranav A T - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Pranav A T - Developer Portfolio",
    description: "Explore my personal site - built with Next.js & Tailwind CSS.",
    images: ["/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
