"use server";
import { MetadataRoute } from "next";
import { getAllFeaturedPostsForSitemap } from "../services/blog/index";

export default async function sitemap() {
  const posts = await getAllFeaturedPostsForSitemap();
  let sitemapResult = [
    {
      url: "https://kago-group.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kago-group.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
  posts.forEach((elem) => {
    let tmp = {
      url: "https://www.kago-group.com/blog/post/" + elem.slug,
      lastModified: elem.updatedAt,
      changeFrequency: "weekly",
      priority: 0.5,
    };
    sitemapResult.push(tmp);
  });
  console.log(posts);
  return sitemapResult;
}
