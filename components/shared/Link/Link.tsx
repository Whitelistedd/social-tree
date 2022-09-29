import {
  BGLinkImage,
  ImageContainer,
  LinkBox,
  LinkDetails,
  LinkImage,
  RightArrow,
  SubTitle,
  Title,
} from './Link-styles'

import { Arrow } from 'public/assets/images/arrow'
import ArrowIMG from 'public/assets/images/arrow.svg'
import Image from 'next/image'
import { socialMediaLinksList } from 'src/constants/socialMediaLinks'

export interface LinkProps {
  linkInfo: {
    type: string
    link: string
    title: string
    subTitle: string
  }
  className?: string
}

export const Link = ({ linkInfo, className }: LinkProps) => {
  return (
    <LinkBox className={className}>
      <ImageContainer>
        <BGLinkImage
          src={socialMediaLinksList[linkInfo.type]}
          height="60"
          width="60"
        />
        <BGLinkImage
          src={socialMediaLinksList[linkInfo.type]}
          height="60"
          width="60"
        />
        <LinkImage
          src={socialMediaLinksList[linkInfo.type]}
          height="60"
          width="60"
        />
      </ImageContainer>
      <LinkDetails>
        <Title>{linkInfo.title}</Title>
        <SubTitle>{linkInfo.subTitle}</SubTitle>
      </LinkDetails>
      <RightArrow color="white" width="20" height="20" />
    </LinkBox>
  )
}
