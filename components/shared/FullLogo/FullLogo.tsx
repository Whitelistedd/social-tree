import { Icon, Logo } from './FullLogo-styles'

import LogoIcon from 'public/logo.svg'

export const FullLogo = () => {
  return (
    <Logo>
      <Icon src={LogoIcon} width="58" height="58" />
      Social Tree
    </Logo>
  )
}
