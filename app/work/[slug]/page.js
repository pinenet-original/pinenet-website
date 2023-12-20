"use client";

import React from "react";
import { combinedStoriesData, recomendedStories } from "@/data/storiesData";
import { StorieRender } from "@/components/StorieRender";
import TellUs from "@/components/TellUs";
import MoreCaseOffer from "@/components/MoreCaseOffer";

export const page = ({ params }) => {
  const filteredStoriesData = combinedStoriesData.filter(
    (story) => story.id === params.slug
  )[0];

  return (
    <div className="w-full flex-auto">
      <StorieRender storiesData={filteredStoriesData} />
      <section className="relative pt-24 sm:pt-32 lg:pt-40 bg-gray-100 pb-12 ">
        <MoreCaseOffer recomendedStories={recomendedStories} />
      </section>
      <section className="max-sm:pt-20 pt-40 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
};

export default page;
