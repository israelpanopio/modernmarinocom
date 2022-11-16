import { useState }  from 'react'
import { NavBar } from '../components';
import { Cntr } from '../components/sharedstyles';

export default function About() {  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <NavBar toggle={toggle} />
    <Cntr>
    <h2>about</h2>
    </Cntr>
    </>
  )
}
