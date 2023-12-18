"use client";

import React from "react";
import { gogaStoriesData } from "@/data/storiesData";
import { recomendedStories } from "@/utils/helpers";
import { StorieRender } from "@/components/StorieRender";
import MoreCaseOffer from "@/components/MoreCaseOffer";
import TellUs from "@/components/TellUs";

export const Goga = () => {
  return (
    <div className="w-full flex-auto">
      <StorieRender storiesData={gogaStoriesData} />
      <section className="relative pt-24 sm:pt-32 lg:pt-40 bg-gray-100 pb-12 ">
        <MoreCaseOffer recomendedStories={recomendedStories} />
      </section>
      <section className="max-sm:pt-20 pt-40 max-sm:pb-20 pb-40">
        <TellUs />
      </section>
    </div>
  );
};

export default Goga;
