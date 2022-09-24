import Image from 'next/image'
import styled from 'styled-components'

export const Icon = styled(Image)`
  width: 42px;
  height: 42px;
`

export const Name = styled.p`
  font-weight: 600;
  font-size: 1rem;
`

export const Container = styled.button`
  background-color: white;
  padding: 10px 50px;
  width: 100%;
  border: 0px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 5px;
`
