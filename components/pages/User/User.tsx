import { Container, LinksContainer, Wrap } from './user-styles'

import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'components/shared/Link/Link'
import { MiniSocialLinks } from 'components/shared/MiniSocialLinks/MiniSocialLinks'
import { ProfileInfo } from 'components/shared/ProfileInfo/ProfileInfo'
import { socialMediaLinksList } from 'src/constants/socialMediaLinks'
import { socialMediaList } from 'src/constants/socialMediaBox'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const User = () => {
  const router = useRouter()
  const username = router.query.user

  const [socialMedias, setSocialMedias] = useState([
    { type: 'discord', name: '.Volxen#1007' },
    { type: 'email', name: 'random@gmail.com' },
  ])

  const [miniSocialMedias, setMiniSocialMedias] = useState([
    { type: 'youtube', link: 'https://youtube.com/' },
    { type: 'tiktok', link: 'https://tiktok.com/' },
  ])

  const [links, setLinks] = useState([
    {
      type: 'discord',
      link: 'https://discord.com/invite/kunaimp',
      title: 'Marketplace',
      subTitle: '.gg kunai',
    },
    {
      type: 'discord',
      link: 'https://discord.com/invite/kunaimp',
      title: 'Marketplace',
      subTitle: '.gg kunai',
    },
    {
      type: 'discord',
      link: 'https://discord.com/invite/kunaimp',
      title: 'Marketplace',
      subTitle: '.gg kunai',
    },
  ])

  return (
    <Container halfBg={true}>
      <Head>
        <title>Kunai (@user) · stree.to</title>
      </Head>
      <Wrap>
        <ProfileInfo
          miniSocialMedias={miniSocialMedias}
          bgURL="https://cdx.solo.to/user/bg/62a21d5c2732c5_70224388.jpg"
          username={username ? `${username}` : ''}
          socialMedias={socialMedias}
          profileImage={
            'https://cdx.solo.to/user/a/6303f3dc8425b3_64291258.jpg'
          }
        />
        <LinksContainer>
          {links.map((link, index) => (
            <Link key={`link-${index}`} linkInfo={link} />
          ))}
        </LinksContainer>
      </Wrap>
    </Container>
  )
}
