import { Button, TextInput } from '@mantine/core'

import styled from 'styled-components'
import { themeType } from 'src/theme'

export const NewAccount = styled.span`
  font-size: 1rem;
  text-align: center;
  a {
    color: blue;
  }
`

export const StyledButton = styled(Button)<{ theme: themeType; type: string }>`
  background-color: ${({ theme }) => theme.primary};
  color: black;
  font-size: 1.2rem;
  color: white;
  min-height: 40px;
  border: 1px solid ${({ theme }) => theme.primary};
  transition: 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`

export const StyledTextInput = styled(TextInput)`
  label {
    font-size: 0.9rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const LoginFormContainer = styled.div`
  display: flex;
  margin-right: 42px;
  gap: 20px;
  flex-direction: column;
`

export const Title = styled.h1`
  margin: 0px;
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 50px;
`

export const Wrap = styled.div`
  width: 400px;
  padding: 50px 0px 0px 42px;
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: white;
`

export const Container = styled.div<{ theme: themeType }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`
