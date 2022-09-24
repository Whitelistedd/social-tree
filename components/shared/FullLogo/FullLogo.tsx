import { Icon, Logo } from './FullLogo-styles'

import Link from 'next/link'
import LogoIcon from 'public/logo.svg'

export const FullLogo = () => {
  return (
    <Link href="/">
      <Logo>
        <Icon src={LogoIcon} width="58" height="58" />
        Social Tree
      </Logo>
    </Link>
  )
}
