"use client";
import React, { useContext } from "react";
import { PageContext } from "./layout";
import Link from "next/link";
import Image from "next/image";
import AnimatedDiv from "@/components/AnimatedDiv";
import TellUs from "@/components/TellUs";
import CompaniesList from "@/components/CompaniesList";

export default function Home() {
  const { animationStyle } = useContext(PageContext);

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
              <AnimatedDiv style={{ opacity: 1, transform: "none" }}>
                <div className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3>
                      <Link href="/">
                        <span className="absolute inset-0 rounded-3xl"></span>
                        <Image
                          alt="FamilyFund"
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          className="h-16 w-16"
                          style={{ color: "transparent" }}
                          src="img/logomark-dark.4d2947be.svg"
                        ></Image>
                      </Link>
                    </h3>
                    <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                      <time dateTime="2023" className="font-semibold">
                        2023
                      </time>
                      <span className="text-neutral-300" aria-hidden="true">
                        /
                      </span>
                      <span>Case study</span>
                    </p>
                    <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                      Skip the bank, borrow from those you trust
                    </p>
                    <p className="mt-4 text-base text-neutral-600">
                      FamilyFund is a crowdfunding platform for friends and
                      family. Allowing users to take personal loans from their
                      network without a traditional financial institution.
                    </p>
                  </article>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                style={{ opacity: 1, transform: "none" }}
                delay={0.2}
              >
                <div className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3>
                      <Link href="/">
                        <span className="absolute inset-0 rounded-3xl"></span>
                        <Image
                          alt="FamilyFund"
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          className="h-16 w-16"
                          style={{ color: "transparent" }}
                          src="img/logomark-dark.4d2947be.svg"
                        ></Image>
                      </Link>
                    </h3>
                    <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                      <time dateTime="2023" className="font-semibold">
                        2023
                      </time>
                      <span className="text-neutral-300" aria-hidden="true">
                        /
                      </span>
                      <span>Case study</span>
                    </p>
                    <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                      Skip the bank, borrow from those you trust
                    </p>
                    <p className="mt-4 text-base text-neutral-600">
                      FamilyFund is a crowdfunding platform for friends and
                      family. Allowing users to take personal loans from their
                      network without a traditional financial institution.
                    </p>
                  </article>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                style={{ opacity: 1, transform: "none" }}
                delay={0.4}
              >
                <div className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3>
                      <Link href="/">
                        <span className="absolute inset-0 rounded-3xl"></span>
                        <Image
                          alt="FamilyFund"
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          className="h-16 w-16"
                          style={{ color: "transparent" }}
                          src="img/logomark-dark.4d2947be.svg"
                        ></Image>
                      </Link>
                    </h3>
                    <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                      <time dateTime="2023" className="font-semibold">
                        2023
                      </time>
                      <span className="text-neutral-300" aria-hidden="true">
                        /
                      </span>
                      <span>Case study</span>
                    </p>
                    <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                      Skip the bank, borrow from those you trust
                    </p>
                    <p className="mt-4 text-base text-neutral-600">
                      FamilyFund is a crowdfunding platform for friends and
                      family. Allowing users to take personal loans from their
                      network without a traditional financial institution.
                    </p>
                  </article>
                </div>
              </AnimatedDiv>
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
          <AnimatedDiv>
            <div className="w-[33.75rem] max-sm:w-[27rem] flex-none xl:w-[45rem] relative left-[-100px] max-xl:left-[-40px] max-sm:left-[0px]">
              <div className="justify-center lg:justify-end relative flex aspect-[719/680] w-full  grayscale">
                <svg viewBox="0 0 655 680" fill="none" className="h-full">
                  <g clipPath="url(#:S1:-clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width={655} height={680}>
                        <Image
                          alt=""
                          width={655}
                          height={850}
                          src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&w=750&q=75"
                        />
                      </foreignObject>
                    </g>
                    <use
                      strokeWidth="2"
                      className="stroke-neutral-950/10"
                    ></use>
                  </g>
                  <defs>
                    <clipPath id=":S1:-clip">
                      <path
                        id=":S1:-shape"
                        d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </AnimatedDiv>
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
