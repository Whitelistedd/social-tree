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

import { AnimatePresence } from 'framer-motion'
import { Burger } from '@mantine/core'
import Link from 'next/link'
import LogoSrc from '/public/logo.svg'
import Modal from './Modal/Modal'
import NavItems from './NavItems/NavItems'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const title = open ? 'Close navigation' : 'Open navigation'

  const handleNavClick = () => setOpen(false);

  const buttons = (
    <>
      <Link href="/signup">
        <RegisterButton onClick={() => setOpen(false)}>Create Account</RegisterButton>
      </Link>
      <Link href="/login">
        <LoginButton onClick={() => setOpen(false)}>Sign in</LoginButton>
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
              onClick={() => setOpen((o) => !o)}
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
      <AnimatePresence>{open && <Modal setOpen={setOpen} buttons={buttons} />}</AnimatePresence>
    </>
  )
}

export default Navbar
