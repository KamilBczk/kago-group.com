"use server";
import BlogCard from "@/components/Blog/BlogCard";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import BackgroundImage from "./bg.jpg";
import { gql, request } from "graphql-request";
import { getFeaturedPosts, getPostByCategory } from "@/services/blog";
import BlogMinifiedCard from "@/components/Blog/BlogMinifiedCard";

export async function generateMetadata() {
  return {
    title: "Découvrez nos articles",
  };
}

export default async function Page() {
  const posts = await getFeaturedPosts();
  const webDesignPosts = await getPostByCategory("web-design");
  const websitePosts = await getPostByCategory("site-web");

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
          <div className="p-4 sm:p-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"></div>
        </div>
      </article>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Nos derniers articles
        </h2>
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
        <h2 className="text-2xl font-bold sm:text-3xl pt-8 sm:pt-12 lg:pt-16">
          Nos articles sur le web design
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webDesignPosts.map((post: any) => (
            <BlogMinifiedCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
              slug={post.slug}
              author={post.author.name}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold sm:text-3xl pt-8 sm:pt-12 lg:pt-16">
          Nos articles les sites web
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {websitePosts.map((post: any) => (
            <BlogMinifiedCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              createdAt={post.createdAt}
              slug={post.slug}
              author={post.author.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
