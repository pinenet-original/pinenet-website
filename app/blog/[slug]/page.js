"use client";

import React from "react";
import { FadeIn } from "@/utils/animations";
import { combinedBlogData, recomendedBlog } from "@/data/blogData";
import Image from "next/image";
import MoreBlogOffer from "@/components/MoreBlogOffer";
import TellUs from "@/components/TellUs";

const page = ({ params }) => {
  const filteredBlogData = combinedBlogData.filter(
    (blog) => blog.id === params.slug
  )[0];

  return (
    <div className="w-full flex-auto pb-24">
      <section className="mx-auto max-w-7xl lg:max-w-none pt-24 ">
        <FadeIn transitionDelay={0} animationSpeed={0.5}>
          <div className="mx-auto flex max-w-7xl flex-col text-center mb-34 sm:mb-32">
            <h1 className="whitespace-pre-wrap pt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {filteredBlogData.title}
            </h1>
            <p className="order-first text-sm text-neutral-950">
              {filteredBlogData.date}
            </p>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {filteredBlogData.author}, {filteredBlogData.position}
            </p>
          </div>
        </FadeIn>
        <div className="[&>*]:mx-auto [&>*]:max-w-4xl  lg:mb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ul>
              {filteredBlogData.articles.map((article, index) => {
                return (
                  <li key={index} className="text-neutral-950 mb-24 last:mb-0">
                    <FadeIn transitionDelay={0} animationSpeed={0.5}>
                      <h2 className="text-2xl font-semibold mb-4">
                        {article.title}
                      </h2>
                      <p className="text-xl text-neutral-600 whitespace-pre-wrap">
                        {article.description}
                      </p>
                    </FadeIn>
                    <FadeIn transitionDelay={0} animationSpeed={0.5}>
                      <div className="group isolate my-10 overflow-hidden rounded-3xl bg-neutral-100 max-sm:-mx-6">
                        <div className="group relative">
                          <Image
                            width={2400}
                            height={1600}
                            alt=""
                            className="aspect-[16/10] w-full object-cover"
                            src={`${article.img}`}
                          />
                        </div>
                      </div>
                    </FadeIn>
                    <FadeIn transitionDelay={0} animationSpeed={0.5}>
                      <p className="whitespace-pre-wrap text-xl text-neutral-600 ">
                        {article.subDescription}
                      </p>
                    </FadeIn>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className=" pt-24 sm:pt-32 lg:pt-40 bg-gray-100 pb-24">
        <MoreBlogOffer recomendedBlog={recomendedBlog} />
      </section>
      <section className="max-sm:pt-20 pt-40 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
};

export default page;
