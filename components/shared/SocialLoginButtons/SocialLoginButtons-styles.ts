import { Button } from '@mantine/core'
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
  margin-left: 10px;
  color: black;
  font-family: 'League Spartan', sans-serif;
`

export const Container = styled(Button)<{ theme: themeType }>`
  background-color: white;
  padding: 10px 50px;
  width: 100%;
  height: 50px;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  transition: 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
  }
`
