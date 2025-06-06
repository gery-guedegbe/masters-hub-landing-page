import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import gradient_background from "@assets/images/Backgroudn Gradient.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mediumDesktop:w-[90vw] ultraDesktop:w-[70vw] ultraLargDesktop:w-[60vw] mx-auto flex min-h-screen max-w-[1600px] flex-col">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white">
          <Image
            src={gradient_background}
            alt="Gradient Background"
            className="h-full w-full object-cover"
          />
        </div>

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
