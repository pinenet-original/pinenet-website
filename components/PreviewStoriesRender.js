import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import Image from "next/image";
import Link from "next/link";

export const PreviewStorieRender = ({ storiesData }) => {
  return (
    <>
      {storiesData.map((preview, index) => (
        <AnimatedDiv key={index}>
          <div className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
              <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                <Image
                  alt="icon"
                  loading="lazy"
                  width="36"
                  height="36"
                  decoding="async"
                  data-nimg="1"
                  className="h-16 w-16 flex-none max-sm:mb-6 max-md:mb-0 xl:mb-6"
                  src={preview.icon}
                />
                <h3 className=" text-sm font-semibold text-neutral-950">
                  {preview.client}
                </h3>
              </div>
              <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                  {preview.service}
                </p>
                <p className="text-sm text-neutral-950 lg:mt-2">
                  <time dateTime="2023-01">{preview.month}</time>
                </p>
              </div>
            </div>
            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
              <p className="font-display text-4xl font-medium text-neutral-950 mb-6">
                <Link href={`/work/${preview.link}`}>{preview.subtitle}</Link>
              </p>
              <div className="space-y-6 text-base text-neutral-600 mb-8">
                {preview.previewText.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
              <div className="mb-12 flex">
                <Link
                  className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
                  aria-label="Read case study: FamilyFund"
                  href={`/work/${preview.link}`}
                >
                  <span className="relative top-px">Read case study</span>
                </Link>
              </div>
              <div className="pl-8  relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                <div className="text-sm">
                  <blockquote className=" mb-6 text-neutral-600 ">
                    <p>{preview.testimonial.text}</p>
                  </blockquote>
                  <span className=" font-semibold text-neutral-950">
                    {preview.testimonial.name}, {preview.testimonial.position}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      ))}
    </>
  );
};
export default PreviewStorieRender;
