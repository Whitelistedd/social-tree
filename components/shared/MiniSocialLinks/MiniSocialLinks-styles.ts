import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const Icon = styled(Image)`
  filter: invert(100%);
`

export const IconContainer = styled.div`
  border: 1px solid grey;
  border-radius: 50%;
  height: 48px;
  width: 48px;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`

export const Container = styled(Link)``
