import { GlobalStyle } from '../src/GlobalStyle'
import Navbar from 'components/shared/Navbar/Navbar'
import React from 'react'

interface PropTypes {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: PropTypes) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  )
}

export default LayoutWrapper
