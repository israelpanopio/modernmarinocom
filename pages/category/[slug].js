import { useState } from 'react'
import { NavBar, CategoryDetail } from '../../components';
import { Cntr } from '../../components/sharedstyles';


const CategoryDetails = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <NavBar toggle={toggle} />
    <Cntr>
      <CategoryDetail />
    </Cntr>
    </>
    
  )
}

export default CategoryDetails


