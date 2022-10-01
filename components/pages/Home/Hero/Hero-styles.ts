import Image from 'next/image'
import { StyledButton } from 'components/shared/Button/Button-styles'
import { StyledTextInput } from 'components/pages/Login/Login-styles'
import { TextInput } from '@mantine/core'
import styled from 'styled-components'

export const PhoneImage = styled(Image)`
  border-radius: 20px;
`

export const ClaimUsername = styled(StyledButton)`
  font-size: 1rem;
  align-self: flex-start;
`

export const UsernameInput = styled(TextInput)`
  border: none !important;
  width: 100%;
  .mantine-TextInput-icon {
    width: 80px;
    height: 50px;
    padding-left: 10px;
    p {
      height: 19px;
      color: black;
    }
  }
  input {
    width: 100%;
    height: 50px;
    padding-left: 75px;
  }
`

export const Desc = styled.p`
  color: grey;
`

export const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 400;
`

export const Images = styled.section`
  height: 100%;
  flex: 1;
  width: 100%;
  max-width: 511px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CreateUserContainer = styled(Images)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Container = styled.section`
  height: calc(100vh - 144px);
  width: 100%;
  padding: 0px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
