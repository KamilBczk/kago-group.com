import axios from "axios";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFeaturedPosts = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const response = await axios.get(`${apiUrl}kago-group/posts/latest/6`);
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
  }
};

export const getPostBySlug = async (slug) => {
  const apiUrl = process.env.API_URL;
  try {
    const response = await axios.get(
      `${apiUrl}kago-group/posts/post/slug/${slug}`
    );
    return response.data.post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
  }
};

export const getPreviousAndNextPosts = async (slug) => {
  const apiUrl = process.env.API_URL;
  let prevPost = null;
  let nextPost = null;

  try {
    const prevPostResponse = await axios.get(
      `${apiUrl}kago-group/posts/post/slug/${slug}/previous`
    );
    prevPost = prevPostResponse.data.post;
  } catch (error) {
    if (error.response && error.response.status !== 404) {
      console.error("Error fetching previous post by slug:", error);
    }
  }

  try {
    const nextPostResponse = await axios.get(
      `${apiUrl}kago-group/posts/post/slug/${slug}/next`
    );
    nextPost = nextPostResponse.data.post;
  } catch (error) {
    if (error.response && error.response.status !== 404) {
      console.error("Error fetching next post by slug:", error);
    }
  }

  return { prevPost, nextPost };
};

export const getPostByCategory = async (category) => {
  const apiUrl = process.env.API_URL;
  try {
    const response = await axios.post(`${apiUrl}kago-group/posts/latest/6`, {
      category: category,
    });
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
  }
};

export const getAllFeaturedPostsForSitemap = async () => {
  try {
    const query = gql`
      query GetFeaturedPosts {
        posts(
          where: { featuredPost: true }
          orderBy: createdAt_DESC
          first: 10000
        ) {
          slug
          updatedAt
        }
      }
    `;
    const results = await request(graphqlAPI, query);
    return results.posts;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
};

export const logConsole = (slug) => {
  const now = new Date();
  const utcPlusOne = new Date(now.getTime() + 1 * 60 * 60 * 1000); // Ajoute 1 heure à l'heure actuelle
  const day = utcPlusOne.getUTCDate().toString().padStart(2, "0");
  const month = (utcPlusOne.getUTCMonth() + 1).toString().padStart(2, "0"); // getMonth() renvoie 0-11
  const year = utcPlusOne.getUTCFullYear();
  const hour = utcPlusOne.getUTCHours().toString().padStart(2, "0");
  const minutes = utcPlusOne.getUTCMinutes().toString().padStart(2, "0");
  const formattedDate = `${day}/${month}/${year} - ${hour}:${minutes}`;
  console.log(`${formattedDate} - ${slug}`);
};
