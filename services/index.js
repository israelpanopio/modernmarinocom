import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
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
                        exerpt
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
            post(where: { slug: $slug }) {
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
                exerpt
                featureImage {
                    url
                }
                content {
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


export const getCategoryDetails = async (slug) => {
    const query = gql`
        query GetCategoryDetails($slug: String!) {
            category(where: { slug: $slug }) {
                createdAt
                id
                name
                slug
                pageImage {
                  url
                }
                backgroundImage {
                  url
                }
                }
            }            
        }
      
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.categories;
};


export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
            postsConnection(where: {categories_some: {slug: $slug}}) {
            edges {
                cursor
                node {
                createdAt
                slug
                title
                exerpt
                featureImage {
                    url
                }
                categories {
                    name
                    slug
                }
                }
            }
            }
        }    
    `
    const result = await request(graphqlAPI, query, { slug });

    return result.postsConnection.edges;
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

