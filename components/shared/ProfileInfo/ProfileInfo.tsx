import {
  BackgroundImage,
  Container,
  MiniLinksContainer,
  ProfileDesc,
  ProfileImage,
  SocialMediaBox,
  SocialMediaBoxes,
  SocialMediaImage,
  SocialMediaText,
  Username,
  Wrap,
} from './ProfileInfo-styles'

import Image from 'next/image'
import { MiniSocialLinks } from '../MiniSocialLinks/MiniSocialLinks'
import { socialMediaList } from 'src/constants/socialMediaBox'

interface ProfileInfoProps {
  profileImage: string
  username: string
  bgURL: string
  socialMedias: {
    type: string
    name: string
  }[]
  miniSocialMedias: {
    link: string
    type: string
  }[]
}

export const ProfileInfo = ({
  profileImage,
  username,
  socialMedias,
  bgURL,
  miniSocialMedias,
}: ProfileInfoProps) => {
  return (
    <Container>
      {bgURL && (
        <BackgroundImage>
          <Image layout="responsive" src={bgURL} width={'800'} height="200" />
        </BackgroundImage>
      )}
      <Wrap bgURL={bgURL}>
        <ProfileImage>
          <Image src={profileImage} height="200" width="200" />
        </ProfileImage>
        <Username>{username}</Username>
        <ProfileDesc>Twitch Streamer</ProfileDesc>
        <SocialMediaBoxes>
          {socialMedias.map((link) => (
            <SocialMediaBox>
              <SocialMediaImage
                src={socialMediaList[link.type]}
                height="18"
                width="18"
              />
              <SocialMediaText>{link.name}</SocialMediaText>
            </SocialMediaBox>
          ))}
        </SocialMediaBoxes>
        <MiniLinksContainer>
          {miniSocialMedias.map((link) => (
            <MiniSocialLinks link={link.link} type={link.type} />
          ))}
        </MiniLinksContainer>
      </Wrap>
    </Container>
  )
}
