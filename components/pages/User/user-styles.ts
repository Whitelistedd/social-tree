import Image from 'next/image'
import styled from 'styled-components'

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 100%;
  padding: 0px 60px;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-height: 100%;
  padding-bottom: 50px;
`

export const Container = styled.div<{ halfBg: boolean }>`
  width: 100vw;
  min-height: 100vh;
  ${({ bgURL }) => (bgURL ? `background: url(${bgURL});` : ``)}
  background-color: #242424;
  background-repeat: no-repeat;
  background-size: contain;
`
