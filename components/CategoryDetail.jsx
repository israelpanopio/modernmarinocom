import { useState } from 'react'
import { Button, BtnWrapper, ArrowForward, ArrowRight } from '../components/sharedstyles'

const CategoryDetail = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }

  return (
    <>
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