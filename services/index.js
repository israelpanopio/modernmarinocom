import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection(first: 999) {
                edges {
                    node {
                        createdAt
                        categories {
                            backgroundImage {
                                url
                            }
                            id
                            name
                            pageImage {
                                url
                            }
                        }
                        slug
                        title
                        
                        featureImage {
                            url
                        }
                    }
                }
            }
        }
      
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges
};

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug } ) {
                createdAt
                categories {
                    backgroundImage {
                        url
                    }
                    id
                    slug
                    name
                    pageImage {
                        url
                    }
                }
                slug
                title
                featureImage {
                    url
                }
                youtube
                content {
                    raw
                }
                content1 {
                    raw
                }
                content2 {
                    raw
                }
                content3 {
                    raw
                }
                content4 {
                    raw
                }
                content5 {
                    raw
                }
                content6 {
                    raw
                }
                content7 {
                    raw
                }
                content8 {
                    raw
                }
                content9 {
                    raw
                }
            }            
        }
      
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
            id
            name
            slug
            }
        }
      
    `
    const result = await request(graphqlAPI, query);

    return result.categories;
}

export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
            postsConnection(
                where: {categories_some: {slug: $slug}}
                orderBy: date_DESC
                first: 99
            ) {
            edges {
                cursor
                node {
                createdAt
                slug
                title
                featureImage {
                    url
                }
                categories {
                    name
                    slug
                }
                }
            }
            pageInfo {
              pageSize
            }
            }
        }    
    `
    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection;
};
  
export const getSection = async () => {
    const query = gql`
        query Section {
            sections {
                title
                background {
                    url
                }
                category1
                description1
                profilePhoto1 {
                    url
                }
                category2
                description2
                profilePhoto2 {
                    url
                }
                slug
            }
        }      
    `
    const result = await request(graphqlAPI, query);

    return result.sections;
};

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails(){
            posts(
                orderBy: date_DESC
                first: 4
            ) {
                title
                featureImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: {slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
                orderBy: date_DESC
                first: 4
            ) {
                title
                featureImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug, categories });

    return result.posts;
}

export const getLatestNews = async () => {
    const query = gql`
        query GetLatesNews {
            posts(
                where: {categories_every: {_search: "news"}}
                first: 4
                orderBy: date_DESC
              ) {
              title
              featureImage {
                url
              }
              createdAt
              slug
            }
          }
          
    `
    const result = await request(graphqlAPI, query);

    return result.posts;
}