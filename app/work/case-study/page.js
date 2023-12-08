"use client";
import React from "react";
import AnimatedDiv from "@/components/AnimatedDiv";
import Image from "next/image";

export const page = () => {
  return (
    <div className="w-full flex-auto">
      <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
          <AnimatedDiv>
            <h2>
              <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                Our work
              </span>
              <span className="sr-only"> - </span>
              <span className="mb-6 block max-w-7xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Skip the bank, borrow from those you trust
              </span>
            </h2>
            <div className="max-w-3xl mx-auto text-xl text-neutral-600 ">
              <p>
                FamilyFund is a crowdfunding platform for friends and family.
                Allowing users to take personal loans from their network without
                a traditional financial institution.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </section>
      <section className="max-sm:pt-10 pb-20 max-sm:pb-10 border-t border-neutral-200 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                <p className="font-semibold mb-1">Client</p>
                <p>FamilyFund</p>
              </div>
              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                <p className="font-semibold mb-1">Year</p>
                <span>2023</span>
              </div>
              <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                <p className="font-semibold mb-1">Service</p>
                <span>Web development, CMS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-y border-neutral-200 bg-neutral-100">
          <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
            <Image
              height={3117}
              width={3648}
              al=""
              src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.3cc9a6af.jpg&w=828&q=90"
            />
          </div>
        </div>
      </section>
      <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 border-2 border-red-100">
          <div className="mx-auto max-w-2xl lg:max-w-none">page</div>
        </div>
      </section>
    </div>
  );
};

export default page;
