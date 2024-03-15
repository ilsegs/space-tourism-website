import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import Navbar from "@/Components/Navbar";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--bellefair-font",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlowcondensed-font",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

export const metadata: Metadata = {
  title: "Space Tourism Website",
  description: "Developed by ilse.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} bg-primary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
