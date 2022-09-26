import {
  Container,
  Form,
  NewAccount,
  StyledButton,
  StyledTextInput,
  Title,
  Wrap,
} from '../Login/Login-styles'
import { SignUpForm, SignUpFormContainer } from './Signup-styles'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

import Cookies from 'js-cookie'
import { FullLogo } from 'components/shared/FullLogo/FullLogo'
import Link from 'next/link'
import { PasswordInput } from '@mantine/core'
import { SocialLoginButtons } from 'components/shared/SocialLoginButtons/SocialLoginButtons'
import { Splitter } from 'components/shared/Splitter/Splitter'
import { auth } from 'lib/firebase'
import { useEffect } from 'react'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'

type values = {
  email: string
  username: string
  password: string
  confirmPassword: string
}



export const Signup = () => {
  const router = useRouter()
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      username: (value) => (value.length < 4 ? "username should be atleast 4 characters" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 9 ? 'password should be atleast 10 characters' : null),
      confirmPassword: (value, values) => value !== values.password ? 'Passwords did not match' : null,

    },
  })

  const handleFormSubmit = async (values: values) => {
    try {
      if (values.password === values.confirmPassword) {
        const { user }: any = await createUserWithEmailAndPassword(auth, values.email, values.password)
        const token = user.accessToken
        Cookies.set('token', token ? token : '')
        router.push('/')
      } 

      form.setErrors({
        password: 'password doesnt match',
        confirmPassword: 'password doesnt match',
      })

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
        <Title>Create your account</Title>
        <SignUpFormContainer>
          <SocialLoginButtons />
          <Splitter />
          <SignUpForm onSubmit={form.onSubmit((values) => handleFormSubmit(values))} noValidate>
            <StyledTextInput
              required
              label="Username"
              {...form.getInputProps('username')}
            />
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
            <PasswordInput
              required
              label="Confirm your password"
              {...form.getInputProps('confirmPassword')}
            />
            {/* @ts-ignore */}
            <StyledButton type="submit">Sign Up</StyledButton>
            <NewAccount>
              Already have an account? <Link href={'/login'}>Login</Link>
            </NewAccount>
          </SignUpForm>
        </SignUpFormContainer>
      </Wrap>
    </Container>
  )
}
