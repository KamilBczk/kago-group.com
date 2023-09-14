import { request, gql } from "graphql-request";
// abc
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFeaturedPosts = async (bool) => {
  try {
    const query = gql`
      query GetFeaturedPosts {
        posts(where: { featuredPost: ${bool} }, orderBy: createdAt_DESC) {
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

export const getPreviousAndNextPosts = async (createdAt) => {
  try {
    const nextPost = gql`
      query MyQuery {
        posts(where: {createdAt_gt: "${createdAt}"}, first: 1) {
          title
          slug
        }
      }
    `;
    const nextRes = await request(graphqlAPI, nextPost);

    const previousPost = gql`
      query MyQuery {
        posts(where: {createdAt_lt: "${createdAt}"}, first: 1, orderBy: publishedAt_DESC) {
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
