import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFeaturedPosts = async () => {
  try {
    const query = gql`
      query GetFeaturedPosts {
        posts(
          where: { featuredPost: true }
          orderBy: createdAt_DESC
          first: 6
        ) {
          id
          createdAt
          title
          excerpt
          slug
          featuredImage {
            url
          }
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

export const getPostById = async (slug) => {
  try {
    const query = gql`
      query MyQuery {
        posts(where: { slug: "${slug}" }) {
          id
          title
          createdAt
          excerpt
          slug
          updatedAt
          content {
            html
          }
          coverImage {
            url
          }
          author {
            name
            photo {
              url
            }
          }
        }
      }
    `;
    const results = await request(graphqlAPI, query);
    return results.posts[0];
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
};

export const getSeoPostById = async (slug) => {
  try {
    const query = gql`
      query MyQuery {
        posts(where: { slug: "${slug}" }) {
          id
          title
          excerpt
        }
      }
    `;
    const results = await request(graphqlAPI, query);
    return results.posts[0];
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
};

export const getPreviousAndNextPosts = async (createdAt) => {
  try {
    const nextPost = gql`
      query MyQuery {
        posts(where: {createdAt_gt: "${createdAt}", featuredPost: true}, first: 1) {
          title
          slug
        }
      }
    `;
    const nextRes = await request(graphqlAPI, nextPost);

    const previousPost = gql`
      query MyQuery {
        posts(where: {createdAt_lt: "${createdAt}", featuredPost: true}, first: 1, orderBy: createdAt_DESC) {
          title
          slug
        }
      }
    `;
    const prevRes = await request(graphqlAPI, previousPost);

    const toReturn = {
      next: {
        title: nextRes.posts.length === 0 ? null : nextRes.posts[0].title,
        slug: nextRes.posts.length === 0 ? null : nextRes.posts[0].slug,
      },
      prev: {
        title: prevRes.posts.length === 0 ? null : prevRes.posts[0].title,
        slug: prevRes.posts.length === 0 ? null : prevRes.posts[0].slug,
      },
    };
    return toReturn;
  } catch (error) {
    console.error("Error fetching next & prev posts:", error);
    return [];
  }
};

export const getPostByCategory = async (slug) => {
  try {
    const query = gql`
      query MyQuery {
        posts(
          where: {categories_every: {slug: "${slug}"}, featuredPost: true}
          orderBy: createdAt_DESC
          first: 6
        ) {
          id
          title
          slug
          excerpt
          createdAt
          author {
            name
          }
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
