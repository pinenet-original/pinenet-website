"use client";
import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";
import Link from "next/link";
import TellUs from "@/components/TellUs";
import CompaniesListData from "@/data/ComapniesListData";

const page = () => {
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
          <AnimatedDiv>
            <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                  <Image
                    alt=""
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-16 w-16 flex-none max-sm:mb-6 max-md:mb-0 xl:mb-6"
                    src="img/logomark-dark.4d2947be.svg"
                  />
                  <h3 className=" text-sm font-semibold text-neutral-950">
                    FamilyFund
                  </h3>
                </div>

                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                  <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                    Web development, CMS
                  </p>
                  <p className="text-sm text-neutral-950 lg:mt-2">
                    <time dateTime="2023-01">January 2023</time>
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                <p className="font-display text-4xl font-medium text-neutral-950 mb-6">
                  <Link href="/">
                    Skip the bank, borrow from those you trust
                  </Link>
                </p>
                <div className="space-y-6 text-base text-neutral-600 mb-8">
                  <p>
                    FamilyFund is a crowdfunding platform for friends and
                    family. Allowing users to take personal loans from their
                    network without a traditional financial institution.
                  </p>
                  <p>
                    We developed a custom CMS to power their blog with and
                    optimised their site to rank higher for the keywords “Gary
                    Vee” and “Tony Robbins”.
                  </p>
                </div>
                <div className="mb-12 flex">
                  <Link
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                    aria-label="Read case study: FamilyFund"
                    href="/"
                  >
                    <span className="relative top-px">Read case study</span>
                  </Link>
                </div>
                <div className="pl-8  relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <div className="text-sm">
                    <blockquote className=" mb-6 text-neutral-600 ">
                      <p>
                        Working with Studio, we felt more like a partner than a
                        customer. They really resonated with our mission to
                        change the way people convince their parents to cash out
                        their pensions.
                      </p>
                    </blockquote>
                    <span className=" font-semibold text-neutral-950">
                      Debra Fiscal, CEO of FamilyFund
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
        <AnimatedDiv>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
            <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                  <Image
                    alt=""
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-16 w-16 flex-none max-sm:mb-6 max-md:mb-0 xl:mb-6"
                    src="img/logomark-dark.4d2947be.svg"
                  />
                  <h3 className=" text-sm font-semibold text-neutral-950">
                    FamilyFund
                  </h3>
                </div>
                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                  <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                    Web development, CMS
                  </p>
                  <p className="text-sm text-neutral-950 lg:mt-2">
                    <time dateTime="2023-01">January 2023</time>
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                <p className="font-display text-4xl font-medium text-neutral-950 mb-6">
                  <a href="/">Skip the bank, borrow from those you trust</a>
                </p>
                <div className="space-y-6 text-base text-neutral-600 mb-8">
                  <p>
                    FamilyFund is a crowdfunding platform for friends and
                    family. Allowing users to take personal loans from their
                    network without a traditional financial institution.
                  </p>
                  <p>
                    We developed a custom CMS to power their blog with and
                    optimised their site to rank higher for the keywords “Gary
                    Vee” and “Tony Robbins”.
                  </p>
                </div>
                <div className="mb-12 flex">
                  <Link
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                    aria-label="Read case study: FamilyFund"
                    href="/"
                  >
                    <span className="relative top-px">Read case study</span>
                  </Link>
                </div>
                <div className="pl-8  relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <div className="text-sm">
                    <blockquote className=" mb-6 text-neutral-600 ">
                      <p>
                        Working with Studio, we felt more like a partner than a
                        customer. They really resonated with our mission to
                        change the way people convince their parents to cash out
                        their pensions.
                      </p>
                    </blockquote>
                    <span className=" font-semibold text-neutral-950">
                      Debra Fiscal, CEO of FamilyFund
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                  <Image
                    alt=""
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    className="h-16 w-16 flex-none max-sm:mb-6 max-md:mb-0 xl:mb-6"
                    src="img/logomark-dark.4d2947be.svg"
                  />
                  <h3 className=" text-sm font-semibold text-neutral-950">
                    FamilyFund
                  </h3>
                </div>
                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                  <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                    Web development, CMS
                  </p>
                  <p className="text-sm text-neutral-950 lg:mt-2">
                    <time dateTime="2023-01">January 2023</time>
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                <p className="font-display text-4xl font-medium text-neutral-950 mb-6">
                  <a href="/">Skip the bank, borrow from those you trust</a>
                </p>
                <div className="space-y-6 text-base text-neutral-600 mb-8">
                  <p>
                    FamilyFund is a crowdfunding platform for friends and
                    family. Allowing users to take personal loans from their
                    network without a traditional financial institution.
                  </p>
                  <p>
                    We developed a custom CMS to power their blog with and
                    optimised their site to rank higher for the keywords “Gary
                    Vee” and “Tony Robbins”.
                  </p>
                </div>
                <div className="mb-12 flex">
                  <Link
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                    aria-label="Read case study: FamilyFund"
                    href="/"
                  >
                    <span className="relative top-px">Read case study</span>
                  </Link>
                </div>
                <div className="pl-8  relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <div className="text-sm">
                    <blockquote className=" mb-6 text-neutral-600 [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                      <p>
                        Working with Studio, we felt more like a partner than a
                        customer. They really resonated with our mission to
                        change the way people convince their parents to cash out
                        their pensions.
                      </p>
                    </blockquote>
                    <span className=" font-semibold text-neutral-950">
                      Debra Fiscal, CEO of FamilyFund Marius
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
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

export default page;
