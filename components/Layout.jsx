import React from 'react'
import { Footer } from './'

const Layout = ({ children }) => {
  return (
    <>
        {children}
      <Footer />
    </>
  )
}

export default Layout