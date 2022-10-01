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
    { type: 'discord', name: 'Discord' },
    { type: 'email', name: 'Email' },
  ])

  const [miniSocialMedias, setMiniSocialMedias] = useState([
    { type: 'youtube', link: 'https://youtube.com/' },
    { type: 'tiktok', link: 'https://tiktok.com/' },
    { type: 'instagram', link: 'https://tiktok.com/' },
    { type: 'telegram', link: 'https://tiktok.com/' },
    { type: 'twitter', link: 'https://tiktok.com/' },
  ])

  const [links, setLinks] = useState([
    {
      type: 'twitch',
      link: 'https://discord.com/invite/kunaimp',
      title: 'Twitch',
      subTitle: 'Twitch.tv',
    },
    {
      type: 'snapchat',
      link: 'https://discord.com/invite/kunaimp',
      title: 'Snapchat',
      subTitle: 'Snapchat.com',
    },
    {
      type: 'twitter',
      link: 'https://discord.com/invite/kunaimp',
      title: 'Twitter',
      subTitle: 'Twitter.com',
    },
    {
      type: 'youtube',
      link: 'https://discord.com/invite/kunaimp',
      title: 'Youtube',
      subTitle: 'Youtube.com',
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
          bgURL={''}
          username={username ? `${username}` : ''}
          socialMedias={socialMedias}
          profileImage={'https://i.imgur.com/yIrcTos.jpg'}
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
