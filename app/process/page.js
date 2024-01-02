"use client";

import React from "react";
import { FadeIn } from "@/utils/animations";
import ImageClip from "@/components/ImageClip";
import TellUs from "@/components/TellUs";

const page = () => {
  const ImageLink =
    "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&w=750&q=75";
  const ImageLink2 =
    "https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhiteboard.2d6ee65a.jpg&w=750&q=75";

  return (
    <div className="w-full flex-auto">
      <section className="pb-8 xl:pb-14  max-sm:pb-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-114 md:pt-26">
            <div className="mx-auto max-w-full lg:max-w-none">
              <FadeIn transitionDelay={0} animationSpeed={0.5}>
                <div>
                  <span className="block font-display text-base font-semibold text-neutral-950 mb-6">
                    Our process
                  </span>
                  <span className="mb-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                    How we work
                  </span>
                </div>
                <div className="mb-6 max-w-3xl text-xl text-neutral-600">
                  <p>
                    We believe in efficiency and maximizing our resources to
                    provide the best value to our clients. The primary way we do
                    that is by re-using the same five projects we’ve been
                    developing for the past decade.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 pb-12 max-sm:pb-8">
        <div className="mx-auto max-w-7xl lg:max-w-none">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="mb-24 flex max-lg:flex-col max-lg:items-center lg:gap-8 max-w-7xl mx-auto">
              <div>
                <ImageClip ImageLink={ImageLink2} />
              </div>
              <div className="px-5 lg:w-[40rem]">
                <FadeIn transitionDelay={0} animationSpeed={0.5}>
                  <div className="pt-10 group-first:pt-0">
                    <div className="font-display mb-2 text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950">
                      01
                    </div>
                    <h1 className="mb-4 font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
                      Discover
                    </h1>
                    <div className="space-y-6 text-base text-neutral-600 mb-12">
                      <p>
                        We work closely with our clients to understand their{" "}
                        <strong className="font-semibold text-neutral-950">
                          needs{" "}
                        </strong>
                        and goals, embedding ourselves in their every day
                        operations to understand what makes their business tick.
                      </p>
                      <p>
                        Our team of private investigators shadow the company
                        director’s for several weeks while our account managers
                        focus on going through their trash. Our senior security
                        experts then perform social engineering hacks to gain
                        access to their{" "}
                        <strong className="font-semibold text-neutral-950">
                          business
                        </strong>{" "}
                        accounts — handing that information over to our forensic
                        accounting team.
                      </p>
                      <p>
                        Once the full audit is complete, we report back with a
                        comprehensive{" "}
                        <strong className="font-semibold text-neutral-950">
                          plan
                        </strong>{" "}
                        and, more importantly, a budget.
                      </p>
                    </div>
                    <h3 className="mb-4 font-display text-base font-semibold text-neutral-950">
                      Included in this phase
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-4">
                      <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                        In-depth questionnaires
                      </li>
                      <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                        Feasibility studies
                      </li>
                      <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                        Blood samples
                      </li>
                      <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                        Employee surveys
                      </li>
                      <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                        Proofs-of-concept
                      </li>
                      <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                        Forensic audit
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="mb-24 flex max-lg:flex-col max-lg:items-center lg:gap-8 max-w-7xl mx-auto">
              <div className="order-2 max-lg-order-1">
                <ImageClip ImageLink={ImageLink} />
              </div>
              <div className="px-5 order-1 max-lg:order-2">
                <FadeIn transitionDelay={0} animationSpeed={0.5}>
                  <div className="pt-10 group-first:pt-0">
                    <div className="font-display mb-2 text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950">
                      02
                    </div>
                    <h1 className="mb-4 font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
                      Build
                    </h1>
                    <div className="space-y-6 text-base text-neutral-600 mb-12">
                      <p>
                        Based off of the discovery phase, we develop a
                        comprehensive roadmap for each product and start working
                        towards delivery. The roadmap is an intricately tangled
                        mess of technical nonsense designed to drag the project
                        out as long as possible.
                      </p>
                      <p>
                        Each client is assigned a key account manager to keep
                        lines of communication open and obscure the actual
                        progress of the project. They act as a buffer between
                        the client’s incessant nagging and the development team
                        who are hard at work scouring open source projects for
                        code to re-purpose.
                      </p>
                      <p>
                        Our account managers are trained to only reply to client
                        emails after 9pm, several days after the initial email.
                        This reinforces the general aura that we are very busy
                        and dissuades clients from asking for changes.
                      </p>
                    </div>
                    <div className="pl-8  relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                      <div className="text-sm">
                        <blockquote className=" mb-6 text-neutral-600 ">
                          <p>
                            Studio were so regular with their progress updates
                            we almost began to think they were automated!
                          </p>
                        </blockquote>
                        <span className=" font-semibold text-neutral-950">
                          Debra Fiscal, CEO of Unseal
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="flex max-lg:flex-col max-lg:items-center lg:gap-6 max-w-7xl mx-auto">
              <div className="order-1 max-lg-order-2 items-center flex">
                <ImageClip ImageLink={ImageLink} />
              </div>
              <div className="px-5 order-2 max-lg:order-1">
                <FadeIn transitionDelay={0} animationSpeed={0.5}>
                  <div className="pt-10 group-first:pt-0">
                    <div className="font-display mb-2 text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950">
                      03
                    </div>
                    <h1 className="mb-4 font-display text-3xl font-medium text-neutral-950 sm:text-4xl">
                      Deliver
                    </h1>
                    <div className="space-y-6 text-base text-neutral-600 mb-12">
                      <p>
                        About halfway through the Build phase, we push each
                        project out by 6 weeks due to a change in{" "}
                        <strong className="font-semibold text-neutral-950">
                          requirements
                        </strong>
                        . This allows us to increase the budget a final time
                        before launch.
                      </p>
                      <p>
                        Despite largely using pre-built components, most of the{" "}
                        <strong className="font-semibold text-neutral-950">
                          progress
                        </strong>{" "}
                        on each project takes place in the final 24 hours. The
                        development time allocated to each client is actually
                        spent making augmented reality demos that go viral on
                        Twitter.
                      </p>
                      <p>
                        We ensure that the main pages of the site are{" "}
                        <strong className="font-semibold text-neutral-950">
                          fully functional
                        </strong>{" "}
                        at launch — the auxiliary pages will, of course, be
                        lorem ipusm shells which get updated as part of our
                        exorbitant{" "}
                        <strong className="font-semibold text-neutral-950">
                          maintenance
                        </strong>{" "}
                        retainer.
                      </p>
                    </div>
                    <div className="max-w-[520px]">
                      <h3 className="mb-12 font-display text-base font-semibold text-neutral-950">
                        Included in this phase
                      </h3>
                      <ul role="list" className="text-sm text-neutral-600 mt-8">
                        <li className="group mt-10 first:mt-0">
                          <FadeIn transitionDelay={0} animationSpeed={0.5}>
                            <div className="pt-10 group-first:pt-0 ">
                              <strong className="font-semibold text-neutral-950">
                                Web development.{" "}
                              </strong>
                              We specialise in crafting beautiful, high quality
                              marketing pages. The rest of the website will be a
                              shell that uses lorem ipsum everywhere.
                            </div>
                          </FadeIn>
                        </li>
                        <li className="group mt-10 first:mt-0">
                          <FadeIn transitionDelay={0.2} animationSpeed={0.5}>
                            <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                              <strong className="font-semibold text-neutral-950">
                                Application development.{" "}
                              </strong>
                              We have a team of skilled developers who are
                              experts in the latest app frameworks, like Angular
                              1 and Google Web Toolkit.
                            </div>
                          </FadeIn>
                        </li>
                        <li className="group mt-10 first:mt-0">
                          <FadeIn transitionDelay={0.3} animationSpeed={0.5}>
                            <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                              <strong className="font-semibold text-neutral-950">
                                E-commerce.{" "}
                              </strong>
                              We are at the forefront of modern e-commerce
                              development. Which mainly means adding your logo
                              to the Shopify store template we’ve used for the
                              past six years.
                            </div>
                          </FadeIn>
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-sm:pt-16 pt-12 max-sm:pb-20 pb-10">
        <div className="relative isolate bg-neutral-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn transitionDelay={0} animationSpeed={0.5}>
              <div className="mx-auto max-w-2xl lg:max-w-none mb-24">
                <div className="max-w-2xl">
                  <div className="mb-6">
                    <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                      Our values
                    </span>
                    <span className="sr-only"> - </span>
                    <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                      Balancing reliability and innovation
                    </span>
                  </div>
                  <div className="text-xl text-neutral-600">
                    <p>
                      We strive to stay at the forefront of emerging trends and
                      technologies, while completely ignoring them and forking
                      that old Rails project we feel comfortable using. We stand
                      by our core values to justify that decision.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <ul
              role="list"
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <FadeIn transitionDelay={0} animationSpeed={0.5}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Meticulous.
                    </strong>{" "}
                    The first part of any partnership is getting our designer to
                    put your logo in our template. The second step is getting
                    them to do the colors.
                  </div>
                </FadeIn>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <FadeIn transitionDelay={0.1} animationSpeed={0.5}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Efficient.
                    </strong>{" "}
                    We pride ourselves on never missing a deadline which is easy
                    because most of the work was done years ago.
                  </div>
                </FadeIn>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <FadeIn transitionDelay={0.2} animationSpeed={0.5}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Adaptable.
                    </strong>{" "}
                    Every business has unique needs and our greatest challenge
                    is shoe-horning those needs into something we already built.
                  </div>
                </FadeIn>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <FadeIn transitionDelay={0.3} animationSpeed={0.5}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Honest.
                    </strong>{" "}
                    We are transparent about all of our processes, banking on
                    the simple fact our clients never actually read anything.
                  </div>
                </FadeIn>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <FadeIn transitionDelay={0.4} animationSpeed={0.5}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Loyal.
                    </strong>{" "}
                    We foster long-term relationships with our clients that go
                    beyond just delivering a product, allowing us to invoice
                    them for decades.
                  </div>
                </FadeIn>
              </li>
              <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                <FadeIn transitionDelay={0.5} animationSpeed={0.5}>
                  <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                    <strong className="font-semibold text-neutral-950">
                      Innovative.
                    </strong>{" "}
                    The technological landscape is always evolving and so are
                    we. We are constantly on the lookout for new open source
                    projects to clone.
                  </div>
                </FadeIn>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-sm:pt-20 pt-10 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
};

export default page;
