import { useState }  from 'react'
import { NavBar } from '../components';

export default function About() {  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <NavBar toggle={toggle} />
    <h2>about</h2>
    </>
  )
}
