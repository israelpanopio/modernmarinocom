import { useState }  from 'react'
import {} from '../components/sharedstyles'
import { AboutSection, CategorySection, HomeHeader, NavBarHome, MerchSection } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
        <HomeHeader />
        <NavBarHome toggle={toggle} />
        <AboutSection />
        <CategorySection
          title="Our Guides"
        />
        <MerchSection />
        <CategorySection
          title="Meet the Seafarers"
        />
        <MerchSection />
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}