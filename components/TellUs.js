import React from "react";
import { FadeIn } from "../utils/animations";
import Link from "next/link";

const TellUs = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <FadeIn transitionDelay={0} animationSpeed={0.5}>
          <div className="-mx-6 rounded-[40px] bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl">
              <div className="max-w-xl">
                <h2 className="mb-6 font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                  Tell us about your project
                </h2>
                <div className="mb-10 flex">
                  <Link
                    className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                    href="/contact"
                  >
                    <span className="relative top-px">Say Hej</span>
                  </Link>
                </div>
                <div className=" border-t border-white/10 pt-10">
                  <h3 className="mb-6 font-display text-base font-semibold text-white">
                    Our offices
                  </h3>
                  <ul
                    role="list"
                    className=" grid grid-cols-1 gap-8 sm:grid-cols-2"
                  >
                    <li>
                      <address className="text-sm not-italic text-neutral-300">
                        <strong className="text-white">Lithuania</strong>
                        <br />
                        16 Veteranu
                        <br />
                        1313, Visaginas, Lithuania
                      </address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default TellUs;
