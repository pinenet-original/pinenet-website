import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import Image from "next/image";

export const StorieRender = ({ storiesData }) => {
  return (
    <>
      {storiesData.map((story, index) => (
        <React.Fragment key={index}>
          <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10 text-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
              <AnimatedDiv>
                <h2>
                  <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                    {story.title}
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="mb-6 block max-w-7xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                    {story.subtitle}
                  </span>
                </h2>
                <div className="max-w-3xl mx-auto text-xl text-neutral-600 ">
                  <p>{story.description}</p>
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
                    <p>{story.client}</p>
                  </div>
                  <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                    <p className="font-semibold mb-1">Year</p>
                    <span>{story.year}</span>
                  </div>
                  <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                    <p className="font-semibold mb-1">Service</p>
                    <span>{story.service}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <Image
                  height={3117}
                  width={3648}
                  alt="project image"
                  src={story.projectImage}
                />
              </div>
            </div>
          </section>
          <section className="pt-20 max-sm:pt-10 pb-20 max-sm:pb-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Overview</h2>
                    {story.overview.map((overview, index) => {
                      return (
                        <p key={index} className="text-xl mb-6">
                          {overview}
                        </p>
                      );
                    })}

                    <h2 className="text-2xl font-bold mb-6">What we did</h2>
                  </div>
                  <ul role="list" className="my-6 flex flex-wrap gap-4 mb-32">
                    {story.whatWeDid.map((whatWeDid, index) => {
                      return (
                        <li
                          key={index}
                          className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600"
                        >
                          {whatWeDid}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16 mb-32">
                    <div className="col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2">
                      <p>{story.testimonial.text}</p>
                    </div>
                    <div className="col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl">
                      <Image
                        sizes="(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem"
                        className="h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"
                        height={900}
                        width={900}
                        alt="team member photo"
                        src={story.testimonial.photo}
                      />
                    </div>
                    <div className="text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base">
                      <span className="font-semibold">
                        {story.testimonial.name}
                      </span>
                      <span className="hidden font-semibold sm:inline">, </span>
                      <br className="sm:hidden" />
                      <span className="sm:font-semibold">
                        {story.testimonial.position}
                      </span>
                    </div>
                  </div>
                  <div className="!max-w-none">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
                      {story.superPowers.map((superPowers, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col-reverse pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
                          >
                            <span className="text-sm text-neutral-600">
                              {superPowers.title}
                            </span>
                            <span className="text-3xl font-semibold text-neutral-950 sm:text-4xl">
                              {superPowers.number}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      ))}
    </>
  );
};
