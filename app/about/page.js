"use client";
import React from "react";
import { FadeIn } from "@/utils/animations";
import Image from "next/image";
import TellUs from "@/components/TellUs";
import MoreCaseOffer from "@/components/MoreCaseOffer";

const page = () => {
  return (
    <div className="w-full flex-auto">
      <section className="pb-12 xl:pb-24  max-sm:pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-114 md:pt-26">
          <div className="mx-auto max-w-full lg:max-w-none">
            <FadeIn transitionDelay={0} animationSpeed={0.5}>
              <span className="block font-display text-base font-semibold text-neutral-950 mb-6">
                About us
              </span>
              <span className="mb-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                Our strength is collaboration
              </span>
              <div className="mb-24 max-w-3xl text-xl text-neutral-600 flex gap-3 flex-col">
                <p className="mb-10">
                  We believe that our strength lies in our collaborative
                  approach, which puts our clients at the center of everything
                  we do.
                </p>
                <div className="max-w-2xl space-y-6 text-base">
                  <p>
                    Studio was started by three friends who noticed that
                    developer studios were charging clients double what an
                    in-house team would cost. Since the beginning, we have been
                    committed to doing things differently by charging triple
                    instead.
                  </p>
                  <p>
                    At Studio, we’re more than just colleagues — we’re a family.
                    This means we pay very little and expect people to work
                    late. We want our employees to bring their whole selves to
                    work. In return, we just ask that they keep themselves there
                    until at least 6:30pm.
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="!max-w-none">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
                <FadeIn transitionDelay={0} animationSpeed={0.5}>
                  <div className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <span className="text-sm text-neutral-600">title</span>
                    <span className="text-3xl font-semibold text-neutral-950 sm:text-4xl">
                      24%
                    </span>
                  </div>
                </FadeIn>
                <FadeIn transitionDelay={0.1} animationSpeed={0.5}>
                  <div className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <span className="text-sm text-neutral-600">title</span>
                    <span className="text-3xl font-semibold text-neutral-950 sm:text-4xl">
                      24%
                    </span>
                  </div>
                </FadeIn>
                <FadeIn transitionDelay={0.2} animationSpeed={0.5}>
                  <div className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <span className="text-sm text-neutral-600">title</span>
                    <span className="text-3xl font-semibold text-neutral-950 sm:text-4xl">
                      24%
                    </span>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 pb-28 max-md:pt-4 max-sm:pb-6">
        <div className="rounded-[50px] bg-neutral-950 py-20  sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="mb-6 block font-display text-base font-semibold text-white">
                Our culture
              </h2>
              <p className="mb-6 block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-white">
                Balance your passion with your passion for life.
              </p>
              <p className=" text-xl text-neutral-300">
                {" "}
                We are a group of like-minded people who share the same core
                values.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                  <FadeIn transitionDelay={0} animationSpeed={0.5}>
                    <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <strong className="font-semibold text-white">
                        Loyalty.
                      </strong>{" "}
                      Our team has been with us since the beginning because none
                      of them are allowed to have LinkedIn profiles.
                    </div>
                  </FadeIn>
                </li>
                <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                  <FadeIn transitionDelay={0.1} animationSpeed={0.5}>
                    <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <strong className="font-semibold text-white">
                        Trust.
                      </strong>{" "}
                      We don’t care when our team works just as long as they are
                      working every waking second.
                    </div>
                  </FadeIn>
                </li>
                <li className="text-base text-neutral-300 before:bg-white after:bg-white/10">
                  <FadeIn transitionDelay={0.2} animationSpeed={0.5}>
                    <div className="pl-8 relative before:absolute after:absolute before:bg-white after:bg-white/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <strong className="font-semibold text-white">
                        Compassion.
                      </strong>
                      You never know what someone is going through at home and
                      we make sure to never find out.
                    </div>
                  </FadeIn>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 pb-28 max-md:pt-4 max-sm:pb-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
          <div className="mb-16 grid grid-cols-3 gap-x-8 gap-y-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 xl:gap-8">
            <FadeIn transitionDelay={0} animationSpeed={0.5}>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Leadership
              </h2>
            </FadeIn>
            <div className="lg:col-span-3">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                <li>
                  <FadeIn transitionDelay={0.2} animationSpeed={0.5}>
                    <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                      <Image
                        className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                        height={3117}
                        width={3648}
                        alt="project image"
                        src="https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/220181824_115716997448229_6940621430399599376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=pvGF5_1rY6kAX8nBF4u&_nc_ht=scontent.fvno5-1.fna&oh=00_AfAo4a1reW32HqMq4wdMbzOuBD3Y7gV-IHC8ya04FGj5YQ&oe=65909354"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                        <p className="font-display text-base/6 font-semibold tracking-wide text-white mb-2">
                          Dima Panasiuk
                        </p>
                        <p className=" text-sm text-white">Founder / CEO</p>
                      </div>
                    </div>
                  </FadeIn>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-3 gap-x-8 gap-y-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 xl:gap-8">
            <FadeIn transitionDelay={0} animationSpeed={0.5}>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Team
              </h2>
            </FadeIn>
            <div className="lg:col-span-3">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                <li>
                  <FadeIn transitionDelay={0.2} animationSpeed={0.5}>
                    <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                      <Image
                        className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                        height={3117}
                        width={3648}
                        alt="project image"
                        src="https://scontent.fvno5-1.fna.fbcdn.net/v/t39.30808-6/220181824_115716997448229_6940621430399599376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=pvGF5_1rY6kAX8nBF4u&_nc_ht=scontent.fvno5-1.fna&oh=00_AfAo4a1reW32HqMq4wdMbzOuBD3Y7gV-IHC8ya04FGj5YQ&oe=65909354"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                        <p className="font-display text-base/6 font-semibold tracking-wide text-white mb-2">
                          Dima Panasiuk
                        </p>
                        <p className=" text-sm text-white">Senior Developer</p>
                      </div>
                    </div>
                  </FadeIn>
                </li>
                <li>
                  <FadeIn transitionDelay={0.4} animationSpeed={0.5}>
                    <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                      <Image
                        className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                        height={3117}
                        width={3648}
                        alt="project image"
                        src="https://scontent.fvno5-1.fna.fbcdn.net/v/t31.18172-8/288653_253126238049909_4313524_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=b9145c&_nc_ohc=AFYYtQisj6sAX_BfdF4&_nc_ht=scontent.fvno5-1.fna&oh=00_AfDAkdN90W13qoVccHpwx-dt4bqc_msGovEE3mGsyWb08Q&oe=65A377E8"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                        <p className="font-display text-base/6 font-semibold tracking-wide text-white mb-2">
                          Marius Dainys
                        </p>
                        <p className=" text-sm text-white">
                          Front-end Developer
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </li>
                <li>
                  <FadeIn transitionDelay={0.6} animationSpeed={0.5}>
                    <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                      <Image
                        className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                        height={3117}
                        width={3648}
                        alt="project image"
                        src="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI="
                      />
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                        <p className="font-display text-base/6 font-semibold tracking-wide text-white mb-2">
                          Goga Vino
                        </p>
                        <p className=" text-sm text-white">
                          Content Specialist
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-24 sm:pt-32 lg:pt-40 bg-gray-100 pb-12 ">
        <MoreCaseOffer />
      </section>
      <section className="max-sm:pt-20 pt-40 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
};

export default page;
