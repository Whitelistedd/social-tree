import {
  Container,
  Form,
  LoginFormContainer,
  NewAccount,
  StyledButton,
  StyledTextInput,
  Title,
  Wrap,
} from './Login-styles'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

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
    validateInputOnChange: true,
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 9 ? 'password length should be atleast 10 characters' : null),
    },
  })


  console.log(auth)

  const handleFormSubmit = async (values: values) => {
    try {
      const { user }: any = await signInWithEmailAndPassword(auth, values.email, values.password)

      const token = user.accessToken

      Cookies.set('token', token ? token : '')
      router.push('/')

    } catch ({ code, message }) {
      console.log({ code, message })
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // if (user) {
      //   router.push('/')
      // } else {
      //   // User is signed out
      //   // ...
      // }
    })

    return () => {
      unsubscribe()

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
          <Form onSubmit={form.onSubmit((values) => handleFormSubmit(values))} noValidate>
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
            {/* @ts-ignore */}
            <StyledButton type="submit">Login</StyledButton>
            <NewAccount>
              Don't have an account? <Link href={'/signup'}>Signup</Link>
            </NewAccount>
          </Form>
        </LoginFormContainer>
      </Wrap>
    </Container>
  )
}


