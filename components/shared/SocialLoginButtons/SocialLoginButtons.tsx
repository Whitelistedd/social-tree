import { Container, Icon, Name } from './SocialLoginButtons-styles'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import Cookies from 'js-cookie'
import GoogleIcon from 'public/assets/images/google.svg'
import { auth } from 'lib/clientApp'

export const SocialLoginButtons: React.FC = () => {
  const provider = new GoogleAuthProvider()

  const handleLoginWithGoogle = async () => {
    const { user }: any = await signInWithPopup(auth, provider)
      const token = user.accessToken
      Cookies.set('token', token ? token : '')
  }

  return (
    <>
      <Container onClick={() => handleLoginWithGoogle()}>
        <Icon src={GoogleIcon} width="28" height="28" />
        <Name>Google</Name>
      </Container>
    </>
  )
}
