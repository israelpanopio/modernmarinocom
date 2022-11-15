import { useState } from 'react'
import { NavBar, CategoryDetail, HeadContent, Footer } from '../../components';
import { Cntr } from '../../components/sharedstyles';


const CategoryDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <HeadContent />
    <NavBar toggle={toggle} />
    <Cntr>
      <h2>Category Details</h2>
      <CategoryDetail />
    </Cntr>
    <Footer />
    </>
    
  )
}

export default CategoryDetails

