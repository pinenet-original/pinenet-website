"use client";
import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";
import Link from "next/link";
import TellUs from "@/components/TellUs";
import CompaniesListData from "@/data/ComapniesListData";
import { dimaStoriesData } from "@/data/storiesData";
import { mariusStoriesData } from "@/data/storiesData";
import { gogaStoriesData } from "@/data/storiesData";

import PrieviewStoriesRender from "@/components/PreviewStoriesRender";

const Work = () => {
  return (
    <div className="w-full flex-auto">
      <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedDiv>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <AnimatedDiv>
            <h1 className="text-2xl font-semibold text-neutral-950 mb-10">
              Case studies
            </h1>
          </AnimatedDiv>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <PrieviewStoriesRender storiesData={dimaStoriesData} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <PrieviewStoriesRender storiesData={mariusStoriesData} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <PrieviewStoriesRender storiesData={gogaStoriesData} />
        </div>
      </section>
      <section className="pt-20 pb-20 max-sm:pb-10">
        <div className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 px-6 lg:px-8">
          <AnimatedDiv>
            <div className="mx-auto max-w-4xl">
              <blockquote className=" mb-10 relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                  The team at Studio went above and beyond with our onboarding,
                  even finding a way to access the user’s microphone without
                  triggering one of those annoying permission dialogs.
                </p>
              </blockquote>
              <div>
                <Image
                  alt="Phobia"
                  loading="lazy"
                  width="184"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="img/logo6.svg"
                />
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>
      <section className="max-sm:pt-20 pt-40 max-sm:pb-20 pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedDiv>
            <h2 className="mb-10 font-display text-2xl font-semibold text-neutral-950">
              You’re in good company
            </h2>
          </AnimatedDiv>
          <div className=" relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {CompaniesListData.map((logo, index) => (
              <li key={index} className="group">
                <div className="overflow-hidden">
                  <div className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <Image
                      alt={logo.alt}
                      loading="lazy"
                      width="184"
                      height="36"
                      decoding="async"
                      data-nimg="1"
                      src={logo.src}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="max-sm:pt-20 pt-40 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
};

export default Work;
