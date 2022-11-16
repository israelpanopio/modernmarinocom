import React from 'react'
import { Footer } from './'
import { HeadContent } from '../components';

const Layout = ({ children }) => {
  return (
    <>
      <HeadContent />
      {children}
      <Footer />
    </>
  )
}

export default Layout