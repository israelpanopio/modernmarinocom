import React, { useState, useEffect }  from 'react'
import { NavBar, PostCard, Loader, Togglebar } from '../../components';
import { Cntr, Row } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';

const CategoryDetails = ({ posts, category, pageSize }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const page = parseInt(router.query.page);
  const showItems = 8;
  const numberPages = (Math.ceil(pageSize / showItems));
  const [pagePosts, setPagePosts] = useState([]);

  useEffect(() => {
    setPagePosts(posts.slice((page * showItems -showItems ), (page * showItems)));
  }, [category, page]);


  const toggle = () => {
      setIsOpen(!isOpen)
  }

  if (router.isFallback) {
    return (
          <Loader />
    )
  }  return (
    <>
      <Togglebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Cntr>
        <h2>{category.name}</h2>
        <Row>
          {pagePosts.map((post, index ) => (
            <PostCard key={index} post={post.node} title={post.node.title} />
          ))}    
        </Row>
          <Page>  Page {page} of {numberPages} </Page>
          <Pages page={page}>
            {page == 1 ? '' : 
              <Link href={`/category/${category.slug}?page=${page - 1}`}>
                <FaAngleLeft/>Previous 
              </Link>
            }
            {page == numberPages ? '' : 
            <Link style={{margin: "auto 0 auto auto"}} href={`/category/${category.slug}?page=${page + 1}`}>
              Next <FaAngleRight/>
            </Link>
            }
          </Pages>
    </Cntr>
    </>
  )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const theCategories = await getCategories();

  return {
    props: { 
      posts: posts.edges,
      pageSize: posts.pageInfo.pageSize,
      category: theCategories.find((({ slug }) => slug === params.slug )) },
      revalidate: 1,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Pages = styled.div`
  color: black;
  display: grid;
  grid-template-columns: ${({ page }) => (page == 1 ? '1fr' : `1fr 1fr`)};
  font-size: 20px;
  line-height: 1.65em;
`

const Page = styled.div`
font-size: 20px;
line-height: 1.65em;
  text-align: center;
  margin: 20px auto auto auto
`