import React from "react";
import Link from "next/link";
import AnimatedDiv from "./AnimatedDiv";
import { recomendedStories } from "@/data/storiesData";

const MoreCaseOffer = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <span className="block font-display tracking-tight [text-wrap:balance] text-2xl font-semibold text-neutral-950">
          More case studies
        </span>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {recomendedStories.map((story, index) => (
              <AnimatedDiv key={index}>
                <div className="relative flex flex-col items-start pl-8 before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                  <h3 className="mt-6 text-base font-semibold text-neutral-950">
                    {story.title}
                  </h3>
                  <time
                    dateTime="2022-10"
                    className="order-first text-sm text-neutral-600"
                  >
                    {story.month}
                  </time>
                  <p className="mt-2.5 text-base text-neutral-600">
                    {story.previewText[0]}
                  </p>
                  <Link
                    href={story.link}
                    className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                  >
                    Read more
                    <svg
                      viewBox="0 0 24 6"
                      aria-hidden="true"
                      className="w-6 flex-none fill-current"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreCaseOffer;
