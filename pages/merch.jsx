import { useState }  from 'react'
import { MerchSection, NavBar, Togglebar } from '../components'

const Merch = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (<>
    <Togglebar isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle} />
    <MerchSection />
    </>)
}

export default Merch