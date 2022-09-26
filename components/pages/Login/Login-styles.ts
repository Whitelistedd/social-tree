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
  flex-direction: column;
  width: 90%;
  gap: .5rem;

  @media (max-width: 1000px){
    width: 60%;
  }

  @media (max-width: 550px){
    width: 90%;
  }
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
`

export const Wrap = styled.div`
  width: 500px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;


  @media (max-width: 1000px){
    width: 100vw;
  }
`

export const Container = styled.div<{ theme: themeType }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`
