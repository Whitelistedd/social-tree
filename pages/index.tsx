import { Hero } from 'components/pages/Home/Hero/Hero'
import LayoutWrapper from 'layout/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <LayoutWrapper>
      <Hero />
    </LayoutWrapper>
  )
}

export default Home
