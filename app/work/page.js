"use client";
import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex-auto">
      <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedDiv style={{ opacity: 1, transform: "none" }}>
            <h2>
              <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                Our work
              </span>
              <span className="sr-only"> - </span>
              <span className="mb-6 block max-w-7xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Proven solutions for real-world problems.
              </span>
            </h2>
            <div className=" max-w-3xl text-xl text-neutral-600">
              <p>
                We believe in efficiency and maximizing our resources to provide
                the best value to our clients. The primary way we do that is by
                re-using the same five projects we’ve been developing for the
                past decade.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </section>
      <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10 mx-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-neutral-950 mb-10">
            Case studies
          </h1>
          <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
          <div> marius</div>
        </div>
      </section>
    </div>
  );
};

export default page;
