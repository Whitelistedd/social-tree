import { Container, StyledModal } from './modal-styles'

import NavItems from '../NavItems/NavItems'
import React from 'react'

interface PropTypes {
  buttons: JSX.Element
  setOpen: Function
}

const animation = {
  hidden: {
    top: '-100vh',
  },

  visible: {
    top: 0,
    transition: { duration: .5 },
  },

  exit: {
    top: '-100vh',
    transition: { duration: .5 },
    
  },
}

const Modal = ({ buttons, setOpen }: PropTypes) => {
  return (
    <StyledModal variants={animation} initial="hidden" animate="visible" exit="exit">
      <Container>
        <NavItems setOpen={setOpen} />
        {buttons}
      </Container>
    </StyledModal>
  )
}

export default Modal
