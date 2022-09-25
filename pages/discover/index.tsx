
import type { NextPage } from 'next'
import { Discover } from 'components/pages/Discover/Discover'
import LayoutWrapper from 'layout/Layout'
import React from 'react'

const discoverPage: NextPage = () => {
  return (
    <LayoutWrapper>
      <Discover />
    </LayoutWrapper>

  )
}

export default discoverPage
