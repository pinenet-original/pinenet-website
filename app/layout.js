"use client";
import React, { createContext, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const PageContext = createContext({});

export default function RootLayout({ children }) {
  const [showNavigation, setShowNavigation] = useState(false);
  const toggleManager = () => {
    setShowNavigation((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
