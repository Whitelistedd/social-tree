import { Container, StyledModal } from './modal-styles'

import NavItems from '../NavItems/NavItems'
import React from 'react'

interface PropTypes {
    buttons: JSX.Element;
}

const Modal = ({ buttons }: PropTypes) => {
    return (
        <StyledModal>
            <Container>
                <NavItems />
                {buttons}
            </Container>
        </StyledModal>
    )
}

export default Modal