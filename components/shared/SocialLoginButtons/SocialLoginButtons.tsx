import { Container, Icon, Name } from './SocialLoginButtons-styles'
import { auth, db } from 'lib/clientApp'
import { doc, setDoc } from 'firebase/firestore'

import Cookies from 'js-cookie'
import GoogleIcon from 'public/assets/images/google.svg'
import { useRouter } from 'next/router'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

export const SocialLoginButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const router = useRouter()

  const handleLoginWithGoogle = async () => {
    await signInWithGoogle()
    if (user) {
      const usersRef = doc(db, 'users', user.user.uid)
      const data = {
        username: user.user.displayName,
      }
      const document = await setDoc(usersRef, data)
    }

    router.push('/')
  }

  return (
    <>
      <Container loading={loading} onClick={() => handleLoginWithGoogle()}>
        <Icon src={GoogleIcon} width="28" height="28" />
        <Name>Google</Name>
      </Container>
    </>
  )
}
