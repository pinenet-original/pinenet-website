import React from "react";
import AnimatedDiv from "./AnimatedDiv";

const TellUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 pb-40">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <AnimatedDiv style={{ opacity: 1, transform: "none" }}>
          <div className="-mx-6 rounded-[40px] bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                  Tell us about your project
                </h2>
                <div className="mt-6 flex">
                  <a
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                    href="/contact"
                  >
                    <span className="relative top-px">Say Hej</span>
                  </a>
                </div>
                <div className="mt-10 border-t border-white/10 pt-10">
                  <h3 className="font-display text-base font-semibold text-white">
                    Our offices
                  </h3>
                  <ul
                    role="list"
                    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                  >
                    <li>
                      <address className="text-sm not-italic text-neutral-300">
                        <strong className="text-white">Copenhagen</strong>
                        <br />
                        1 Carlsberg Gate
                        <br />
                        1260, København, Denmark
                      </address>
                    </li>
                    <li>
                      <address className="text-sm not-italic text-neutral-300">
                        <strong className="text-white">Copenhagen</strong>
                        <br />
                        1 Carlsberg Gate
                        <br />
                        1260, København, Denmark
                      </address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default TellUs;
