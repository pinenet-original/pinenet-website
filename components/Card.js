import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ storiesData }) => {
  return (
    <div className="flex">
      <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
        <h3>
          <Link href={`/work/${storiesData.link}`}>
            <span className="absolute inset-0 rounded-3xl"></span>
            <Image
              alt="FamilyFund"
              loading="lazy"
              width="36"
              height="36"
              decoding="async"
              data-nimg="1"
              className="h-16 w-16"
              style={{ color: "transparent" }}
              src="img/logomark-dark.4d2947be.svg"
            ></Image>
          </Link>
        </h3>
        <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
          <time dateTime="2023" className="font-semibold">
            {storiesData.year}
          </time>
          <span className="text-neutral-300" aria-hidden="true">
            /
          </span>
          <span>{storiesData.title}</span>
        </p>
        <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
          {storiesData.subtitle}
        </p>
        <p className="mt-4 text-base text-neutral-600">
          {storiesData.description}
        </p>
      </article>
    </div>
  );
};
export default Card;
