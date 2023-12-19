import React, { useContext } from "react";
import { PageContext } from "@/app/layout";
import Link from "next/link";
import { Logo } from "./logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

const Navigation = ({ toggleManager }) => {
  const { showNavigation } = useContext(PageContext);
  return (
    <header
      className="absolute top-0 left-0 overflow-hiden bg-neutral-950 pt-2 mx-auto"
      style={{
        width: "100%",
      }}
    >
      <div
        className="bg-neutral-800 text-white"
        style={{
          transform: "none",
          transformOrigin: "50% 50% 0px",
        }}
      >
        <div className=" bg-neutral-950 pb-16 pt-14 w-full ">
          <div className=" mx-auto max-w-7xl px-6 lg:px-8 ">
            <div className=" mx-auto max-w-full w-full lg:max-w-none ">
              <div className=" flex items-center justify-between ">
                <Link
                  href="/"
                  className={`${
                    showNavigation
                      ? "text-black duration-[900ms]"
                      : "text-white"
                  } z-50`}
                >
                  <Logo opened={showNavigation} />
                </Link>
                <div className=" flex items-center gap-x-8 ">
                  <Link
                    href="/"
                    className={`inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                      showNavigation
                        ? "bg-neutral-100  hover:bg-neutral-800 duration-500"
                        : "bg-neutral-950  hover:bg-neutral-800 duration-[900ms]"
                    }  ${showNavigation ? "text-black" : "text-white"} z-50`}
                  >
                    Contact
                  </Link>
                  <button
                    type="button"
                    aria-expanded="true"
                    aria-controls=":R5a:"
                    className=" group -m-2.5 rounded-full p-2.5 transition z-50 hover:bg-neutral-950/10"
                    aria-label="Toglle Navigation"
                    onClick={() => toggleManager()}
                  >
                    {showNavigation ? (
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className=" h-6 w-6 
                           fill-white duration-200"
                      >
                        <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
                        <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700 transition duration-[900ms]"
                      >
                        <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
          <div className="even:mt-px sm:bg-neutral-950 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
              <div className="mx-auto max-w-2xl lg:max-w-none ">
                <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer ">
                  <Link
                    onClick={() => toggleManager()}
                    href="/work"
                    className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                  >
                    Work
                    <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                  </Link>
                  <Link
                    onClick={() => toggleManager()}
                    href="/work"
                    className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                  >
                    Play
                    <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="even:mt-px sm:bg-neutral-950 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <Link
                    onClick={() => toggleManager()}
                    href="/work"
                    className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                  >
                    Sleep
                    <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                  </Link>
                  <Link
                    onClick={() => toggleManager()}
                    href="/work"
                    className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                  >
                    Eat
                    <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                <div>
                  <h2 className="font-display text-base font-semibold text-white">
                    Our Office
                  </h2>
                  <ul
                    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    role="list"
                  >
                    <li>
                      <address className="text-sm not-italic text-neutral-300">
                        <strong className="text-white">Lithuania</strong>
                        <br />
                        'Visaginas'
                        <br />
                        'Streets and number'
                      </address>
                    </li>
                  </ul>
                </div>
                <div className="sm:border-l sm:border-transparent sm:pl-16 ">
                  <h2 className="font-display text-base font-semibold text-white">
                    Follow us
                  </h2>
                  <ul className="flex gap-x-10 text-white  mt-6 max-lg:flex-row max-sm:flex-row">
                    <li>
                      <Link href="/">
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <TelegramIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
