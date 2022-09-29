import { Button, TextInput } from '@mantine/core'

import Image from 'next/image'
import styled from 'styled-components'
import { themeType } from 'src/theme'

export const StyledImage = styled.div`
  max-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    max-height: 100%;
    min-width: 100%;
    max-width: 1000px;
    min-height: 100%;
  }

  @media (max-width: 1018px) {
    display: none;
  }
`

export const NewAccount = styled.span`
  font-size: 1rem;
  text-align: center;
  a {
    color: blue;
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
  gap: 0.5rem;

  @media (max-width: 1000px) {
    width: 60%;
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
`

export const Wrap = styled.div`
  min-width: 500px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1000px) {
    width: 100vw;
  }
`

export const Container = styled.div<{ theme: themeType }>`
  width: 100vw;
  height: 100vh;
  display: flex;

  background-color: ${({ theme }) => theme.primary};
`
