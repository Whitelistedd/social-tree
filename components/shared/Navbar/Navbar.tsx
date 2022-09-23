import { Dot, LoginButton, NavContainer, NavItem, NavItems, RegisterButton, StyledNavbar } from './navbar-styles'

import Image from 'next/image'
import Link from 'next/link'
import LogoSrc from '/public/logo.svg'
import React from 'react'

const navItems = [
  { name: "Marketplace", path: "/marketplace" },
  { name: "Discover", path: "/discover" },
  { name: "Learn", path: "/learn" },
]

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavContainer>
        <Link href="/">
        <Image height="50" width="50" src={LogoSrc} />
        </Link>
        <NavItems>
          {navItems.map(navItem => <Link href={navItem.path} key={navItem.name}><NavItem>{navItem.name}</NavItem></Link>)}
          <Dot />
          <Link href=""><LoginButton>Sign in</LoginButton></Link>
          <RegisterButton>Create Account</RegisterButton>
        </NavItems>
      </NavContainer>
    </StyledNavbar>
  )
}

export default Navbar