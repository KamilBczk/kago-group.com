import BlogCard from "@/components/Blog/BlogCard";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import BackgroundImage from "./bg.jpg";
import { gql, request } from "graphql-request";
import { getFeaturedPosts } from "@/services/blog";

export default async function page() {
  const posts = await getFeaturedPosts();
  return (
    <>
      <Head>
        <title>Blog | Kago Group</title>
      </Head>
      <article className="relative overflow-hidden shadow transition">
        <Image
          alt="Office"
          src={BackgroundImage}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h1 className="mt-0.5 text-3xl text-white">Nos articles</h1>
          </div>
        </div>
      </article>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
              slug={post.slug}
              featuredImage={post.featuredImage.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}
