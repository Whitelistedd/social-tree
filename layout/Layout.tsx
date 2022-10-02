import { Container, Wrap } from './BasicLayout-styles'
import { Footer, Navbar } from 'components/shared'

import React from 'react'

interface PropTypes {
  children: React.ReactNode
}

const BasicLayout = ({ children }: PropTypes) => {
  return (
    <Container>
      <Wrap>
        <Navbar />
        {children}
        <Footer />
      </Wrap>
    </Container>
  )
}

export default BasicLayout
