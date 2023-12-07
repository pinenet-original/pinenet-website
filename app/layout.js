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
          <div
            className="relative flex flex-auto  bg-white pt-14"
            style={{
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
              transform: "none",
              transformOrigin: "50% 50% 0px",
              position: "absolute",
              top: showNavigation ? "780px" : "20px",
              left: "0",
              width: "100%",
              transitionDuration: "500ms",
            }}
          >
            <div
              className="relative isolate flex w-full flex-col pt-9"
              style={{
                transform: "none",
                transformOrigin: "50% 50% 0px",
                width: "100%",
              }}
            >
              {children}
            </div>
          </div>
          <Footer />
        </PageContext.Provider>
      </body>
    </html>
  );
}
