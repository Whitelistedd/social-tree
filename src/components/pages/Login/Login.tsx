import {
  Container,
  Icon,
  LoginFormContainer,
  Logo,
  Name,
  SocialLoginButton,
  Splitter,
  Title,
  Wrap,
} from './Login-styles'

import GoogleIcon from 'public/assets/images/google.svg'
import LogoIcon from 'public/logo.svg'

export const Login = () => {
  return (
    <Container>
      <Wrap>
        <Logo>
          <Icon src={LogoIcon} width="58" height="58" />
          Social Tree
        </Logo>
        <Title>Log in to your account</Title>
        <LoginFormContainer>
          <SocialLoginButton>
            <Icon src={GoogleIcon} width="28" height="28" />
            <Name>Google</Name>
          </SocialLoginButton>
          <Splitter>or</Splitter>
        </LoginFormContainer>
      </Wrap>
    </Container>
  )
}
