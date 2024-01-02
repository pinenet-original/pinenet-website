"use client";
import React, { createContext, useState } from "react";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });
const MonaSans = localFont({
  src: "../fonts/Mona/Mona-Sans.woff2",
  display: "swap",
});
export const PageContext = createContext({});

export default function RootLayout({ children }) {
  const [showNavigation, setShowNavigation] = useState(false);
  const toggleManager = () => {
    setShowNavigation((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <body className={MonaSans.className}>
        <SmoothScrolling>
          <PageContext.Provider
            value={{
              showNavigation,
            }}
          >
            <Navigation toggleManager={toggleManager} />
            <main
              className={`page-wrapper ${
                showNavigation
                  ? "top-[762px] max-sm:top-[1074px] max-sm:pb-[350px]"
                  : "top-[20px]"
              }`}
            >
              {children}
            </main>
            <Footer showNavigation={showNavigation} />
          </PageContext.Provider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
