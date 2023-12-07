"use client";
import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";

const page = () => {
  return (
    <main className="w-full flex-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-114 md:pt-56 mb-60">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div style={{ opacity: 1, transform: "none" }}>
            <h1>
              <span className="block font-display text-base font-semibold text-neutral-950">
                Our work - Marius
              </span>
              <span className="sr-only"> - </span>
              <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Proven solutions for real-world problems.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
