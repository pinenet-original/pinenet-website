"use client";
import React from "react";
import Image from "next/image";
import AnimatedDiv from "@/components/AnimatedDiv";
import TellUs from "@/components/TellUs";
import CompaniesList from "@/components/CompaniesList";
import Card from "@/components/Card";
import {
  dimaStoriesData,
  mariusStoriesData,
  gogaStoriesData,
} from "@/data/storiesData";
import ImageClip from "@/components/ImageClip";

export default function Home() {
  const ImageLink =
    "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&w=750&q=75";

  return (
    <div className="w-full flex-auto">
      <section className="pb-28 xl:pb-36  max-sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-114 md:pt-56">
          <div className="mx-auto max-w-full lg:max-w-none">
            <AnimatedDiv>
              <div
                className="max-w-3xl"
                style={{ opacity: 1, transform: "none" }}
              >
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  Award-winning development studio based in Lithuania.
                </h1>
                <p className="mt-6 text-xl text-neutral-600">
                  We are a development studio working at the intersection of
                  design and technology. It’s a really busy intersection though
                  — a lot of our staff have been involved in hit and runs.
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>
      <section className="pt-28 pb-28 max-md:pt-4 max-sm:pb-8">
        <CompaniesList />
      </section>
      <section className="pt-28 pb-5 sm:pt-8 max-sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-full lg:max-w-none">
            <div className="max-w-2xl mb-8">
              <AnimatedDiv style={{ opacity: 1, transform: "none" }} delay={0}>
                <h2>
                  <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                    Harnessing technology for a brighter future
                  </span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600">
                  <p>
                    We believe technology is the answer to the world’s greatest
                    challenges. It’s also the cause, so we find ourselves in bit
                    of a catch 22 situation.
                  </p>
                </div>
              </AnimatedDiv>
            </div>
            <div className="grid max-sm:grid-cols-1 gap-8 grid-cols-3">
              <Card storiesData={dimaStoriesData} />
              <Card storiesData={mariusStoriesData} />
              <Card storiesData={gogaStoriesData} />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-20 max-sm:pb-10">
        <div className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 px-6 lg:px-8">
          <AnimatedDiv style={{ opacity: 1, transform: "none" }}>
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
      <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-full lg:max-w-none">
            <AnimatedDiv style={{ opacity: 1, transform: "none" }}>
              <div className="max-w-3xl">
                <h2>
                  <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                    Services
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                    We help you identify, explore and respond to new
                    opportunities.
                  </span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600">
                  <p>
                    As long as those opportunities involve giving us money to
                    re-purpose old projects — we can come up with an endless
                    number of those.
                  </p>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
        <div className="pt-16 flex max-lg:flex-col max-lg:items-center lg:gap-6 max-w-7xl mx-auto">
          <ImageClip ImageLink={ImageLink} />
          <div className="px-5 max-w-[520px]">
            <ul
              role="list"
              className="text-base text-neutral-600 max-lg:mt-16 sm:px-4"
            >
              <li className="group mt-10 first:mt-0">
                <AnimatedDiv style={{ opacity: 1, transform: "none" }}>
                  <div className="pt-10 group-first:pt-0 ">
                    <strong className="font-semibold text-neutral-950">
                      Web development.{" "}
                    </strong>
                    We specialise in crafting beautiful, high quality marketing
                    pages. The rest of the website will be a shell that uses
                    lorem ipsum everywhere.
                  </div>
                </AnimatedDiv>
              </li>
              <li className="group mt-10 first:mt-0">
                <AnimatedDiv
                  style={{ opacity: 1, transform: "none" }}
                  delay={0.2}
                >
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">
                      Application development.{" "}
                    </strong>
                    We have a team of skilled developers who are experts in the
                    latest app frameworks, like Angular 1 and Google Web
                    Toolkit.
                  </div>
                </AnimatedDiv>
              </li>
              <li className="group mt-10 first:mt-0">
                <AnimatedDiv
                  style={{ opacity: 1, transform: "none" }}
                  delay={0.3}
                >
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">
                      E-commerce.{" "}
                    </strong>
                    We are at the forefront of modern e-commerce development.
                    Which mainly means adding your logo to the Shopify store
                    template we’ve used for the past six years.
                  </div>
                </AnimatedDiv>
              </li>
              <li className="group mt-10 first:mt-0">
                <AnimatedDiv
                  style={{ opacity: 1, transform: "none" }}
                  delay={0.4}
                >
                  <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                    <strong className="font-semibold text-neutral-950">
                      Custom content management.{" "}
                    </strong>
                    At Studio we understand the importance of having a robust
                    and customised CMS. That’s why we run all of our client
                    projects out of a single, enormous Joomla instance.
                  </div>
                </AnimatedDiv>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-sm:pt-20 pt-40 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
}
