import {
  Container,
  Form,
  NewAccount,
  StyledImage,
  StyledTextInput,
  Title,
  Wrap,
} from '../Login/Login-styles'

import { FullLogo } from 'components/shared/FullLogo/FullLogo'
import Image from 'next/image'
import SideImage from 'public/assets/images/LoginImage.svg'
import { SignupForm } from 'components/shared/SignupForm/SignupForm'

export const Signup = () => {
  return (
    <Container>
      <Wrap>
        <FullLogo />
        <Title>Create your account</Title>
        <SignupForm />
      </Wrap>
      <StyledImage>
        <Image src={SideImage} layout="responsive" width="1000" height="1000" />
      </StyledImage>
    </Container>
  )
}
