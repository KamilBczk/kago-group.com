import moment from "moment";
import React from "react";

export default function BlogMinifiedCard({
  title,
  excerpt,
  createdAt,
  slug,
  featuredImage,
  author,
}: any) {
  return (
    <a
      href={`/blog/post/${slug}`}
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-lg">
            {title}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">{author}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm/relaxed text-gray-500 line-clamp-2">{excerpt}</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col">
          <dt className="text-sm font-medium text-gray-600">Publié le</dt>
          <dd className="text-xs text-gray-500">
            {moment(createdAt).format("DD.MM.YYYY")}
          </dd>
        </div>
      </dl>
    </a>
  );
}
