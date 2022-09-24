import Link from 'next/link'
import { NavItem } from './navitems-styles'
import React from 'react'
import { useRouter } from 'next/router'

interface PropTypes {
  setOpen?: Function
}

const NavItems = ({ setOpen }: PropTypes) => {
  const router = useRouter()

  const navItems = [
    { name: 'Learn', path: '/learn' },
    { name: 'Discover', path: '/discover' },
    { name: 'Marketplace', path: '/marketplace' },
  ]

  return (
    <>
      {navItems.map((navItem) => (
        <Link href={navItem.path} key={navItem.name}>
          <NavItem
            className={router.pathname === navItem.path ? 'active' : ''}
            onClick={() => setOpen && setOpen(false)}
          >
            {navItem.name}
          </NavItem>
        </Link>
      ))}
    </>
  )
}

export default NavItems
