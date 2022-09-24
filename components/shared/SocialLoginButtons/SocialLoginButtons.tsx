import { Container, Icon, Name } from './SocialLoginButtons-styles'

import GoogleIcon from 'public/assets/images/google.svg'

export const SocialLoginButtons: React.FC = () => {
  return (
    <Container>
      <Icon src={GoogleIcon} width="28" height="28" />
      <Name>Google</Name>
    </Container>
  )
}
