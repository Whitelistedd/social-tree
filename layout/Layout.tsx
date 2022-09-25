import {Footer, Navbar} from 'components/shared'

import React from 'react'

interface PropTypes {
  children: React.ReactNode
}

const BasicLayout = ({ children }: PropTypes) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default BasicLayout
