import { useState }  from 'react'
import { AboutSection, CategorySection, HomeHeader, NavBarHome, MerchSection, Togglebar, NewsSection, RecentWidget } from '../components';
import { getLatestNews, getRecentPosts, getSection } from '../services';

export default function Home({ sections, posts, recents }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }
  
  const guide = sections.find(({slug}) => slug === "our-guide");
  const seafarer = sections.find(({slug}) => slug === "meet-the-seafarers");
  

  return (
    <>
      <HomeHeader />
      <Togglebar isOpen={isOpen} toggle={toggle} />
      <NavBarHome toggle={toggle} />
      <RecentWidget posts={recents}/>
      <AboutSection />
      <CategorySection
        name={"guide"}
        title={guide.title}
        background={guide.background.url}
        category1={guide.category1}
        description1={guide.description1}
        profilePhoto1={guide.profilePhoto1.url}
        link1={"guide"}
        category2={guide.category2}
        description2={guide.description2}
        profilePhoto2={guide.profilePhoto2.url}
        link2={"wiseaman"}
      />   
      <MerchSection />
      <CategorySection
        name={"seafarer"}
        title={seafarer.title}
        background={seafarer.background.url}
        category1={seafarer.category1}
        description1={seafarer.description1}
        profilePhoto1={seafarer.profilePhoto1.url}
        link1={"ranks"}
        category2={seafarer.category2}
        description2={seafarer.description2}
        profilePhoto2={seafarer.profilePhoto2.url}
        link2={"stories"}
      />   
      <NewsSection posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const data = await getSection();
  const posts = await getLatestNews();
  const recents = await getRecentPosts();

  return {
    props: { 
      posts, 
      recents,
      sections: data },
      revalidate: 1,
  }
}
