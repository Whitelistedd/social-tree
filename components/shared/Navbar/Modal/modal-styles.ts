import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledModal = styled(motion.header)`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    height: 100vh;
    width: 100vw;
    background-color: white;
    position: fixed;
    z-index: 10;
    inset: 0;
    display: grid;

  }
`

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: max-content;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  align-items: center;
`
