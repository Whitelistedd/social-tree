import { GlobalStyle } from '../src/GlobalStyle'
import React from 'react'

interface PropTypes {
  children: React.ReactNode
}

const BasicLayout = ({ children }: PropTypes) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default BasicLayout
