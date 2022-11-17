import { useState }  from 'react'
import { Button, BtnWrapper, ArrowForward, ArrowRight } from '../components/sharedstyles'
import { AboutSection, CategorySection, HomeHeader, NavBarHome, MerchSection, PostCard } from '../components';
import { getPosts } from '../services';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
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

