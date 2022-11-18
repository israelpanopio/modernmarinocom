import { useState }  from 'react'
import { AboutSection, CategorySection, HomeHeader, NavBarHome, MerchSection, PostCard } from '../components';
import { getSection } from '../services';

export default function Home({ sections }) {
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
      <NavBarHome toggle={toggle} />
      <AboutSection />
      <CategorySection
        name={"guide"}
        title={guide.title}
        background={guide.background.url}
        category1={guide.category1}
        description1={guide.description1}
        profilePhoto1={guide.profilePhoto1.url}
        category2={guide.category2}
        description2={guide.description2}
        profilePhoto2={guide.profilePhoto2.url}
      />   
      <MerchSection />
      <CategorySection
        name={"seafarer"}
        title={seafarer.title}
        background={seafarer.background.url}
        category1={seafarer.category1}
        description1={seafarer.description1}
        profilePhoto1={seafarer.profilePhoto1.url}
        category2={seafarer.category2}
        description2={seafarer.description2}
        profilePhoto2={seafarer.profilePhoto2.url}
      />   
      <MerchSection />
    </>
  )
}

export async function getStaticProps() {
  const data = await getSection();

  return {
    props: { sections: data }
  }
}
