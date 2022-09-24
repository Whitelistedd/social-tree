import {
  Container,
  Form,
  LoginButton,
  LoginFormContainer,
  NewAccount,
  StyledButton,
  StyledTextInput,
  Title,
  Wrap,
} from './Login-styles'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import Cookies from 'js-cookie'
import { FullLogo } from 'components/shared/FullLogo/FullLogo'
import Link from 'next/link'
import { PasswordInput } from '@mantine/core'
import { SocialLoginButtons } from 'components/shared/SocialLoginButtons/SocialLoginButtons'
import { Splitter } from 'components/shared/Splitter/Splitter'
import { auth } from 'lib/clientApp'
import { useEffect } from 'react'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'

type values = {
  email: string
  password: string
}

export const Login = () => {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const handleFormSubmit = (values: values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential: any) => {
        const token = userCredential.user.accessToken
        Cookies.set('token', token ? token : '')
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log({ errorCode, errorMessage })
      })
  }

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      router.push('/')
    }
  }, [])

  return (
    <Container>
      <Wrap>
        <FullLogo />
        <Title>Log in to your account</Title>
        <LoginFormContainer>
          <SocialLoginButtons />
          <Splitter />
          <Form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
            <StyledTextInput
              required
              label="Email Address"
              {...form.getInputProps('email')}
            />
            <PasswordInput
              required
              label="Password"
              {...form.getInputProps('password')}
            />
            <LoginButton>
              <StyledButton type="submit">Login</StyledButton>
              <NewAccount>
                Don't have an account? <Link href={'/signup'}>Signup</Link>
              </NewAccount>
            </LoginButton>
          </Form>
        </LoginFormContainer>
      </Wrap>
    </Container>
  )
}
