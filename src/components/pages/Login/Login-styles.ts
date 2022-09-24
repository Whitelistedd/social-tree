import Image from 'next/image'
import styled from 'styled-components'

export const Splitter = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ::before {
    content: ' ';
    width: 45%;
    background-color: white;
    height: 2px;
  }
  ::after {
    content: ' ';
    width: 45%;
    background-color: white;
    height: 2px;
  }
`

export const LoginFormContainer = styled.div`
  padding-right: 42px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`

export const Name = styled.p`
  font-weight: 600;
  font-size: 1rem;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
  font-weight: 700;
`

export const Icon = styled(Image)`
  width: 42px;
  height: 42px;
`

export const SocialLoginButton = styled.button`
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

export const Title = styled.h1`
  margin: 0px;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-size: 1.8rem;
`

export const Wrap = styled.div`
  width: 360px;
  padding: 50px 0px 0px 42px;
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: #3773fd;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
