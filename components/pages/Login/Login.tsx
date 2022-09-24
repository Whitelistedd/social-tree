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
import { useForm } from '@mantine/form'

export const Login = () => {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <Container>
      <Wrap>
        <FullLogo />
        <Title>Log in to your account</Title>
        <LoginFormContainer>
          <SocialLoginButtons />
          <Splitter />
          <Form>
            <StyledTextInput
              label="Email Address"
              {...form.getInputProps('email')}
            />
            <StyledTextInput
              label="Password"
              {...form.getInputProps('password')}
            />
            <LoginButton>
              <StyledButton>Login</StyledButton>
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
