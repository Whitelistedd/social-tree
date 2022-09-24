import { Button, TextInput } from '@mantine/core'

import styled from 'styled-components'

export const NewAccount = styled.p`
  font-size: 0.9rem;
`

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledButton = styled(Button)<{ type: string }>`
  background-color: #3773fd;
  color: black;
  font-size: 1.2rem;
  color: white;
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
  color: white;
  font-size: 1.8rem;
`

export const Wrap = styled.div`
  width: 360px;
  padding: 50px 0px 0px 42px;
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: white;
  * {
    font-family: 'League Spartan', sans-serif;
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3773fd;
`
