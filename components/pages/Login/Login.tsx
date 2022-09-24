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

import { FullLogo } from 'components/shared/FullLogo/FullLogo'
import Link from 'next/link'
import { SocialLoginButtons } from 'components/shared/SocialLoginButtons/SocialLoginButtons'
import { Splitter } from 'components/shared/Splitter/Splitter'
import { useEffect } from 'react'
import { useForm } from '@mantine/form'

type values = {
  email: string
  password: string
}

export const Login = () => {
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
    console.log(values)
  }

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
            <StyledTextInput
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
