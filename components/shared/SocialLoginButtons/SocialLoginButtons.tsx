import { Container, Icon, Name } from './SocialLoginButtons-styles'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import Cookies from 'js-cookie'
import GoogleIcon from 'public/assets/images/google.svg'
import { auth } from 'lib/clientApp'

export const SocialLoginButtons: React.FC = () => {
  const provider = new GoogleAuthProvider()

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result: any) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.user.accessToken
      Cookies.set('token', token ? token : '')
    })
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
