import React from "react";
import moment from "moment";

export default function BlogCard({
  title,
  excerpt,
  createdAt,
  slug,
  featuredImage,
}: any) {
  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt="Office"
        src={featuredImage}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">
            {moment(createdAt).format("DD.MM.YYYY")}
          </time>

          <a href={`/blog/post/${slug}`}>
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}
