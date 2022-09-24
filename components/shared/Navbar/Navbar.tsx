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



  const buttons = (
    <>
      <Link href="/login">
        <LoginButton>Sign in</LoginButton>
      </Link>
      <Link href="/signup">
        <RegisterButton>Create Account</RegisterButton>
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
      <AnimatePresence>
      {open && <Modal buttons={buttons} />}
      </AnimatePresence>
    </>
  )
}

export default Navbar



