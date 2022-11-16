import { useState } from 'react'
import { NavBar, CategoryDetail, HeadContent } from '../../components';
import { Cntr } from '../../components/sharedstyles';


const CategoryDetails = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <HeadContent />
    <NavBar toggle={toggle} />
    <Cntr>
      <CategoryDetail />
    </Cntr>
    </>
    
  )
}

export default CategoryDetails


