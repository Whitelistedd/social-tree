import Image from 'next/image'
import { StyledButton } from '../Button/Button-styles'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledNavbar = styled.header`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: space-between;
`

export const NavContainer = styled.nav`
  width: 90%;
  display: flex;
  position: relative;
  justify-content: space-between;
  z-index: 15;
`

export const NavItemsWrapper = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const BurgerWrapper = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`

export const Dot = styled.span`
  height: 3px;
  width: 3px;
  background-color: #929292;
  border-radius: 50%;
  margin-right: 1rem;
`

export const LoginButton = styled(StyledButton)`
  font-size: 0.9rem !important;
  border: 1px solid #3673fc;
  font-weight: 300;
  background-color: transparent;
  color: #3673fc;
  border-radius: 3px;

  @media (max-width: 1000px) {
    width: 300px;
    font-size: 20px;
  }
`

export const RegisterButton = styled(LoginButton)`
  box-shadow: 0 14px 30px -5px rgba(0, 0, 0, 0.13);
  color: #fff;
`

export const Logo = styled(motion(Image))`
  &:hover {
    cursor: pointer;
  }
`
