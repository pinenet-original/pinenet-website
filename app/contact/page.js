"use client";

import React from "react";
import { FadeIn } from "@/utils/animations";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const page = () => {
  return (
    <div className="w-full flex-auto">
      <section className="pb-12 xl:pb-2  max-sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-full lg:max-w-none">
            <FadeIn transitionDelay={0} animationSpeed={0.5}>
              <span className="block font-display text-base font-semibold text-neutral-950 mb-6">
                Contact us
              </span>
              <span className="mb-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Let’s work together
              </span>
              <div className="mb-16 max-w-3xl text-xl text-neutral-600 flex gap-3 flex-col">
                <p className="mb-10">We can’t wait to hear from you.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="pb-24 xl:pb-32  max-sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-full lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
              <div className="lg:order-last">
                <FadeIn transitionDelay={0.3} animationSpeed={0.5}>
                  <form>
                    <h2 className="font-display text-base font-semibold text-neutral-950 mb-6">
                      Work inquiries
                    </h2>
                    <div className="isolate -space-y-px rounded-2xl bg-white/50">
                      <div className="group relative z-0 transition-all focus-within:z-10">
                        <input
                          type="text"
                          placeholder=""
                          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                        />
                        <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                          Name
                        </label>
                      </div>
                      <div className="group relative z-0 transition-all focus-within:z-10">
                        <input
                          type="text"
                          placeholder=""
                          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                        />
                        <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                          Email
                        </label>
                      </div>
                      <div className="group relative z-0 transition-all focus-within:z-10">
                        <input
                          type="text"
                          placeholder=""
                          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                        />
                        <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                          Company
                        </label>
                      </div>
                      <div className="group relative z-0 transition-all focus-within:z-10">
                        <input
                          type="text"
                          placeholder=""
                          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                        />
                        <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                          Phone
                        </label>
                      </div>
                      <div className="group relative z-0 transition-all focus-within:z-10">
                        <input
                          type="text"
                          placeholder=""
                          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                        />
                        <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                          Message
                        </label>
                      </div>
                      <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                        <span className="text-base/6 text-neutral-500">
                          Budget
                        </span>
                        <div className="pt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                          <label className="flex gap-x-3">
                            <input
                              type="radio"
                              className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                              name="budget"
                              value="25"
                            />
                            <span className="text-base/6 text-neutral-950">
                              €25K – €50K
                            </span>
                          </label>
                          <label className="flex gap-x-3">
                            <input
                              type="radio"
                              className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                              name="budget"
                              value="25"
                            />
                            <span className="text-base/6 text-neutral-950">
                              €50K – €100K
                            </span>
                          </label>
                          <label className="flex gap-x-3">
                            <input
                              type="radio"
                              className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                              name="budget"
                              value="25"
                            />
                            <span className="text-base/6 text-neutral-950">
                              €100K – €150KK
                            </span>
                          </label>
                          <label className="flex gap-x-3">
                            <input
                              type="radio"
                              className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                              name="budget"
                              value="25"
                            />
                            <span className="text-base/6 text-neutral-950">
                              More than €150K
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="mt-10 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                      type="submit"
                    >
                      <span className="relative top-px">
                        Let’s work together
                      </span>
                    </button>
                  </form>
                </FadeIn>
              </div>
              <FadeIn transitionDelay={0.3} animationSpeed={0.5}>
                <h2 className="font-display text-base font-semibold text-neutral-950">
                  Our offices
                </h2>
                <p className="mt-6 text-base text-neutral-600 mb-10">
                  Prefer doing things in person? We don’t but we have to list
                  our addresses here for legal reasons.
                </p>
                <ul className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <li>
                    <address className="text-sm not-italic text-neutral-600">
                      <strong className="text-neutral-950">Lithuania</strong>
                      <p>Veteranu 16</p>1313, Visaginas, Lithuania
                    </address>
                  </li>
                </ul>
                <div className="pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
                <h2 className="mb-6 font-display text-base font-semibold text-neutral-950">
                  Email us
                </h2>
                <div className="mb-16 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                  <div>
                    <p className="font-semibold text-neutral-950">Press</p>
                    <span className="">
                      <Link
                        className="text-neutral-600 hover:text-neutral-950"
                        href="mailto:dmitrij.panasiuk@pinenet.io"
                      >
                        dmitrij.panasiuk@pinenet.io
                      </Link>
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-950">Careers</p>
                    <span className="">
                      <Link
                        className="text-neutral-600 hover:text-neutral-950"
                        href="mailto:dmitrij.panasiuk@pinenet.io"
                      >
                        dmitrij.panasiuk@pinenet.io
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
                <h2 className="font-display text-base font-semibold text-neutral-950">
                  Follow us
                </h2>
                <ul className="flex gap-x-10 text-neutral-950 mt-6">
                  <li>
                    <Link
                      href="/"
                      className="transition hover:text-neutral-700"
                    >
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="transition hover:text-neutral-700"
                    >
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="transition hover:text-neutral-700"
                    >
                      <TelegramIcon />
                    </Link>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
