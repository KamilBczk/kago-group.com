"use server";

export default async function sitemap() {
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
