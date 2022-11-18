import { useState } from 'react'
import { NavBar, PostCard, Loader } from '../../components';
import { Cntr, Row } from '../../components/sharedstyles';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';

const CategoryDetails = ({ posts, category }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  if (router.isFallback) {
    return (
      <>
      <NavBar toggle={toggle} />
      <Cntr>
        <Loader />
    </Cntr>
    </>
    )
  }  return (
    <>
      <NavBar toggle={toggle} />
      <Cntr>
        <h2>{category.name}</h2>
        <Row>
          {posts.map((post, index, title ) => (
            <PostCard key={index} post={post.node} title={post.node.title} />
          ))}    
        </Row>
    </Cntr>
    </>
  )
}

export default CategoryDetails

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const categories = await getCategories();

  return {
    props: { 
      posts,
      category: categories.find((({ slug }) => slug === params.slug )) },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

