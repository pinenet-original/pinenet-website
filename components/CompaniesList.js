import React from "react";
import CompaniesListData from "../data/ComapniesListData";
import AnimatedDiv from "./AnimatedDiv";
import Image from "next/image";

const CompaniesList = () => {
  return (
    <div className="pt-24 rounded-[50px] bg-neutral-950 py-20 sm:pt-32 sm:py-32 lg:pt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-full lg:max-w-none">
          <AnimatedDiv delay={0} style={{ opacity: 1, transform: "none" }}>
            <div className="flex items-center gap-x-8">
              <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                We’ve worked with hundreds of amazing people
              </h2>
              <div className="h-px flex-auto bg-neutral-800"></div>
            </div>
          </AnimatedDiv>
          <ul
            role="list"
            className="mt-10 grid max-sm:grid-cols-2 gap-x-8 gap-y-10 grid-cols-4"
          >
            {CompaniesListData.map((image, index) => (
              <li key={index}>
                <AnimatedDiv
                  style={{ opacity: 1, transform: "none" }}
                  delay={index * 0.1}
                >
                  <Image
                    alt={image.alt}
                    loading="lazy"
                    width="184"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={image.src}
                  />
                </AnimatedDiv>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
