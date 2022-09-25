import Image from 'next/image'
import styled from 'styled-components'
import { themeType } from 'src/theme'

export const Icon = styled(Image)`
  width: 42px;
  height: 42px;
`

export const Name = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'League Spartan', sans-serif;
`

export const Container = styled.button<{ theme: themeType }>`
  background-color: white;
  padding: 10px 50px;
  width: 100%;
  border: 0px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  transition: 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
  }
`
