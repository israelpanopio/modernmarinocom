import { useState } from 'react'
import { Button, BtnWrapper, ArrowForward, ArrowRight } from '../components/sharedstyles'
import { NavBar } from '../components';

const CategoryDetail = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <NavBar toggle={toggle} />
          <BtnWrapper>
        <Button href="/post/seaman-survival-guide-1" onMouseEnter={onHover} onMouseLeave={onHover}>
            About Us  {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </BtnWrapper>
    </>
  )
}

export default CategoryDetail