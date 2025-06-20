"use server";
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
  ]
  return sitemapResult;
}
