import { Container, Icon, IconContainer } from './MiniSocialLinks-styles'

import Image from 'next/image'
import { miniSocialMediaLinks } from 'src/constants/miniSocialMediaLinks'

interface MiniSocialLinks {
  link: string
  type: string
}

export const MiniSocialLinks = ({ link, type }: MiniSocialLinks) => {
  return (
    <Container href={link}>
      <IconContainer>
        <Icon src={miniSocialMediaLinks[type]} height="50" width="50" />
      </IconContainer>
    </Container>
  )
}
