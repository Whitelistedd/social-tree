import { Button } from '@mantine/core'
import Lottie from 'lottie-react'
import styled from 'styled-components'
import { themeType } from 'src/theme'

export const StyledLottie = styled(Lottie)`
  width: 100px;
  height: 100px;
`

interface StyledButtonProps extends React.HTMLAttributes<HTMLElement> {
  theme?: themeType
  type?: string
  error?: boolean
  loadingState?: boolean
  reverse?: boolean
  children?: string
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  background-color: ${({ theme, reverse }) =>
    reverse ? theme.secondary : theme.primary};
  font-size: 1.2rem;
  color: ${({ theme, reverse }) => (reverse ? theme.primary : 'white')};
  min-height: 45px;
  border: 1px solid
    ${({ theme, reverse }) => (reverse ? theme.primary : theme.p)};
  transition: 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ loadingState }) =>
    loadingState &&
    `
        background-color: #E0E5E7 !important;
      `}

  ${({ error }) =>
    error &&
    `
    border: none;
    background-color: #E64E35 ;
      `}
  
  &:hover {
    background-color: ${({ theme, reverse, error }) =>
      error ? '#eb6066' : reverse ? theme.primary : theme.secondary};
    color: ${({ theme, error, reverse }) =>
      error ? 'white' : reverse ? theme.secondary : theme.primary};
  }
`
