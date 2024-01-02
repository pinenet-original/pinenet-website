"use client";

import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import BlogPreview from "@/components/BlogPreview";
import TellUs from "@/components/TellUs";
import { futureOfWeb, dailyTask } from "@/data/blogData";

const page = () => {
  return (
    <div className="w-full flex-auto">
      <section className="pb-8 xl:pb-14  max-sm:pb-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-114 md:pt-26">
            <div className="mx-auto max-w-full lg:max-w-none">
              <AnimatedDiv>
                <div>
                  <span className="block font-display text-base font-semibold text-neutral-950 mb-6">
                    Blog
                  </span>
                  <span className="mb-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                    The latest articles and news
                  </span>
                </div>
                <div className="mb-6 max-w-3xl text-xl text-neutral-600">
                  <p>
                    Stay up-to-date with the latest industry news as our
                    marketing teams finds new ways to re-purpose old CSS tricks
                    articles.
                  </p>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10 mx-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <BlogPreview blogData={futureOfWeb} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
          <BlogPreview blogData={dailyTask} />
        </div>
      </section>
      <section className="max-sm:pt-20 pt-30 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
};

export default page;
