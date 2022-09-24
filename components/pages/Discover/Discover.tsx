import {
  Container,
  Description,
  Details,
  StyledImage,
  Title,
  Wrap,
} from './Discover-styles'

import Discover1SRC from 'public/assets/images/Discover1.webp'
import Image from 'next/image'

export const Discover = () => {
  return (
    <Container>
      <Wrap>
        <Details>
          <Title>The easiest place to update and share your content</Title>
          <Description>
            Help your followers discover everything you’re sharing all over the
            internet, in one simple place. They’ll thank you for it!
          </Description>
        </Details>
        <StyledImage>
          <Image
            src={Discover1SRC}
            layout="responsive"
            width="500"
            height="500"
          />
        </StyledImage>
      </Wrap>
    </Container>
  )
}
