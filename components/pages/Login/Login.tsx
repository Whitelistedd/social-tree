import {
  Container,
  Form,
  LoginFormContainer,
  NewAccount,
  StyledButton,
  StyledImage,
  StyledTextInput,
  Title,
  Wrap,
} from './Login-styles'

import Cookies from 'js-cookie'
import { FullLogo } from 'components/shared/FullLogo/FullLogo'
import Image from 'next/image'
import Link from 'next/link'
import { PasswordInput } from '@mantine/core'
import SideImage from 'public/assets/images/LoginImage.svg'
import { SocialLoginButtons } from 'components/shared/SocialLoginButtons/SocialLoginButtons'
import { Splitter } from 'components/shared/Splitter/Splitter'
import { auth } from 'lib/clientApp'
import { useEffect } from 'react'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

type values = {
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 9
          ? 'password length should be atleast 10 characters'
          : null,
    },
  })

  console.log(auth)

  const handleFormSubmit = async (values: values) => {
    try {
      if (values.password === values.confirmPassword) {
        signInWithEmailAndPassword(values.email, values.password)
        if (user) {
          console.log(document)
          const token = user.user?.accessToken
          Cookies.set('token', token ? token : '')
          router.push('/')
        }
      } else {
        form.setErrors({
          password: 'password doesnt match',
          confirmPassword: 'password doesnt match',
        })
      }
    } catch ({ code, message }) {
      console.log({ code, message })
    }
  }

  return (
    <Container>
      <Wrap>
        <FullLogo />
        <Title>Log in to your account</Title>
        <LoginFormContainer>
          <SocialLoginButtons />
          <Splitter />
          <Form
            onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
            noValidate
          >
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
      <StyledImage>
        <Image src={SideImage} layout="responsive" width="1000" height="1000" />
      </StyledImage>
    </Container>
  )
}

export default Login
