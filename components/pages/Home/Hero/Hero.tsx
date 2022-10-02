import {
  ClaimUsername,
  Container,
  CreateUserContainer,
  Desc,
  Images,
  PhoneImage,
  Title,
  UsernameInput,
} from './Hero-styles'

import Image from 'next/image'
import { useState } from 'react'

export const Hero = () => {
  const [username, setUsername] = useState('')

  const onTextChange = (text: string) => {
    setUsername(text)
  }

  return (
    <Container>
      <CreateUserContainer>
        <Title>One bio link for everything</Title>
        <Desc>
          Share and cross promote your links, music, videos, social media, and
          more on one page.
        </Desc>
        <UsernameInput
          icon={<p>slTree.io/</p>}
          placeholder="username"
          onChange={(e) => onTextChange(e.target.value)}
          value={username}
        />
        <ClaimUsername reverse>Claim Your Username</ClaimUsername>
      </CreateUserContainer>
      <Images>
        <PhoneImage>
          <Image
            layout="responsive"
            src={'https://i.imgur.com/joJwtNP.png'}
            width="274"
            height="616"
          />
        </PhoneImage>
        <PhoneImage>
          <Image
            layout="responsive"
            src={'https://i.imgur.com/joJwtNP.png'}
            width="274"
            height="616"
          />
        </PhoneImage>
      </Images>
    </Container>
  )
}
