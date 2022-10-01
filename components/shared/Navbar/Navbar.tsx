import {
  BurgerWrapper,
  Dot,
  LoginButton,
  Logo,
  NavContainer,
  NavItemsWrapper,
  RegisterButton,
  StyledNavbar,
} from './navbar-styles'
import React, { useEffect } from 'react'

import { AnimatePresence } from 'framer-motion'
import { Burger } from '@mantine/core'
import { Button } from '../Button/Button'
import Cookies from 'js-cookie'
import Link from 'next/link'
import LogoSrc from '/public/logo.svg'
import Modal from './Modal/Modal'
import NavItems from './NavItems/NavItems'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const title = open ? 'Close navigation' : 'Open navigation'
  const handleNavClick = () => setOpen(false)

  let buttons = (
    <>
      <Link href="/signup">
        <RegisterButton onClick={() => handleNavClick()}>
          Create Account
        </RegisterButton>
      </Link>
      <Link href="/login">
        <LoginButton onClick={() => handleNavClick()}>Sign in</LoginButton>
      </Link>
    </>
  )

  return (
    <>
      <StyledNavbar>
        <NavContainer>
          <Link href="/">
            <Logo height="50" width="50" src={LogoSrc} />
          </Link>
          <BurgerWrapper>
            <Burger
              opened={open}
              onClick={() => setOpen(!open)}
              title={title}
            />
          </BurgerWrapper>
          <NavItemsWrapper>
            <NavItems />
            <Dot />
            {buttons}
          </NavItemsWrapper>
        </NavContainer>
      </StyledNavbar>
      <AnimatePresence>
        {open && <Modal setOpen={setOpen} buttons={buttons} />}
      </AnimatePresence>
    </>
  )
}

export default Navbar
