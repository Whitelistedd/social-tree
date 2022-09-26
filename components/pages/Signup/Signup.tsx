import {
  Container,
  Form,
  NewAccount,
  StyledButton,
  StyledImage,
  StyledTextInput,
  Title,
  Wrap,
} from '../Login/Login-styles'
import { SignUpForm, SignUpFormContainer, StyledLottie } from './Signup-styles'
import { auth, db } from 'lib/clientApp'
import { doc, setDoc } from 'firebase/firestore'

import Cookies from 'js-cookie'
import { FullLogo } from 'components/shared/FullLogo/FullLogo'
import Image from 'next/image'
import Link from 'next/link'
import Loading from 'public/assets/lotties/loading.json'
import { PasswordInput } from '@mantine/core'
import SideImage from 'public/assets/images/LoginImage.svg'
import { SocialLoginButtons } from 'components/shared/SocialLoginButtons/SocialLoginButtons'
import { Splitter } from 'components/shared/Splitter/Splitter'
import { onAuthStateChanged } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
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
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      username: (value) =>
        value.length < 4 ? 'username should be atleast 4 characters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 9 ? 'password should be atleast 10 characters' : null,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  })

  const handleFormSubmit = async (values: values) => {
    try {
      if (values.password === values.confirmPassword) {
        await createUserWithEmailAndPassword(values.email, values.password)
        if (user) {
          const usersRef = doc(db, 'users', user.user.uid)
          const data = {
            username: values.username,
          }
          const document = await setDoc(usersRef, data)
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
        <Title>Create your account</Title>
        <SignUpFormContainer>
          <SocialLoginButtons />
          <Splitter />
          <SignUpForm
            onSubmit={form.onSubmit((values) => handleFormSubmit(values))}
            noValidate
          >
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
            <StyledButton error={error} loadingState={loading} type="submit">
              {loading ? (
                <StyledLottie animationData={Loading} />
              ) : error ? (
                'Something went wrong'
              ) : (
                'Sign Up'
              )}
            </StyledButton>
            <NewAccount>
              Already have an account? <Link href={'/login'}>Login</Link>
            </NewAccount>
          </SignUpForm>
        </SignUpFormContainer>
      </Wrap>
      <StyledImage>
        <Image src={SideImage} layout="responsive" width="1000" height="1000" />
      </StyledImage>
    </Container>
  )
}
