import React from "react";
import { FadeIn } from "@/utils/animations";
import Link from "next/link";

const BlogPreview = ({ blogData }) => {
  return (
    <FadeIn transitionDelay={0} animationSpeed={0.5}>
      <div className="pt-16 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"></div>
      <div className="relative lg:-mx-4 lg:flex lg:justify-end">
        <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
          <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-8">
            <Link href={`/blog/${blogData.id}`}>{blogData.title}</Link>
          </h2>
          <div className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
            <div className="absolute left-0 top-0 text-sm text-neutral-950 lg:static mb-6">
              <p>{blogData.date}</p>
            </div>
            <div className=" flex gap-x-4">
              <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                <img
                  className="h-12 w-12 object-cover grayscale"
                  src={blogData.authorImg}
                  alt={blogData.author}
                />
              </div>
              <div className="text-sm text-neutral-950">
                <p className="font-semibold mb-1">{blogData.author}</p>
                <p className="">{blogData.position}</p>
              </div>
            </div>
          </div>
          <p className="mb-8 max-w-2xl text-base text-neutral-600">
            {blogData.previewText}
          </p>
          <Link
            href={`/blog/${blogData.id}`}
            className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
          >
            Read More
          </Link>
        </div>
      </div>
    </FadeIn>
  );
};

export default BlogPreview;
