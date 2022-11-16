import { useState } from 'react'
import { Button, BtnWrapper, ArrowForward, ArrowRight, Row, PageItem } from '../components/sharedstyles'
import { PostCard } from '../components'
import { getPosts } from '../services';

const CategoryDetail = ({ posts }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }

  console.log(getPosts)

  return (
    <>
        <h2>Category Details</h2>
        <Row>
        {/* {posts.map((post, index) => (
            <PostCard key={post.node.title} post={post.node} />
          ))} */}
        </Row>
        
      <BtnWrapper>
        <Button href="/post/seaman-survival-guide-1" onMouseEnter={onHover} onMouseLeave={onHover}>
            Seaman Survival 1  {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
        <Button href="/post/seaman-survival-guide-2" onMouseEnter={onHover} onMouseLeave={onHover}>
            Seaman Survival 2  {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </BtnWrapper>
    </>
  )
}

export default CategoryDetail

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}