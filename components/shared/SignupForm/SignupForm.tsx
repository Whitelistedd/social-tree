import {
  NewAccount,
  StyledTextInput,
} from 'components/pages/Login/Login-styles'
import { SignUpForm, SignUpFormContainer } from './SignupForm-styles'
import { auth, db } from 'lib/clientApp'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth'

import { Button } from '../Button/Button'
import Link from 'next/link'
import { PasswordInput } from '@mantine/core'
import { SocialLoginButtons } from '../SocialLoginButtons/SocialLoginButtons'
import { Splitter } from '../Splitter/Splitter'
import { useEffect } from 'react'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'

type values = {
  email: string
  username: string
  password: string
  confirmPassword: string
}

export const SignupForm = () => {
  const router = useRouter()
  const [user] = useAuthState(auth)
  const [createUserWithEmailAndPassword, , loading, error] =
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

  const createUserData = async () => {
    console.log(user)
    try {
      if (user) {
        const username = await form.values.username
        const usersRef = doc(db, 'users', user.uid)
        const usernamesRef = doc(db, 'usernames', username)
        const data = {
          username: username,
        }
        const usernameData = {
          uid: user.uid,
        }
        console.log(usernamesRef, usernameData)
        console.log(usersRef, data)
        await setDoc(usernamesRef, usernameData)
        await getDoc(usernamesRef).then((res) => console.log(res))
        await setDoc(usersRef, data)
        router.push('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormSubmit = async (values: values) => {
    try {
      if (values.password === values.confirmPassword) {
        await createUserWithEmailAndPassword(values.email, values.password)
        createUserData()
      } else {
        form.setErrors({
          password: 'password doesnt match',
          confirmPassword: 'password doesnt match',
        })
      }
    } catch (err) {
      console.log({ err })
    }
  }

  useEffect(() => {
    if (error?.code === 'auth/email-already-in-use') {
      form.setErrors({
        email: 'Email Address already in use',
      })
    }
    const redirectUser = async () => {
      if (user || auth.currentUser) {
        await createUserData()
        router.push('/')
      }
    }
    redirectUser()
  }, [user, error])

  return (
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
        <Button
          text={'Sign Up'}
          error={error ? true : false}
          loading={loading}
          type="submit"
        />
        <NewAccount>
          Already have an account? <Link href={'/login'}>Login</Link>
        </NewAccount>
      </SignUpForm>
    </SignUpFormContainer>
  )
}
