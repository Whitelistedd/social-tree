import styled, { keyframes } from 'styled-components'

import { Arrow } from 'public/assets/images/arrow'
import Image from 'next/image'

export const RightArrow = styled(Arrow)`
  transform: rotate(90deg);
  margin-right: 20px;
  transition: 200ms ease;
  width: 20px;
  height: 20px;
`

export const SubTitle = styled.p`
  color: grey;
`

export const Title = styled.p`
  font-weight: 700;
`

export const LinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  gap: 5px;
`

export const LinkImage = styled(Image)`
  border-radius: 5px;
`

export const BGLinkImage = styled(Image)`
  border-radius: 5px;
`

const popupAnimation = keyframes`
  0% {
    
  }20% {}30% {}40% {}45% {}55% {}65% {}68% {}
  70% {
    transform: scale(1);
    filter: blur(0px);
    top: 0px;
    left: 0px;
    opacity: 1;
  }

  100% {
    transform: scale(1.7);
    opacity: 0;
    filter: blur(0px);
    top: 0px;
    left: 0px;
  }
`

export const ImageContainer = styled.div`
  min-width: 50px;
  min-height: 50px;
  position: relative;
  transition: 200ms ease;
  span {
    position: absolute !important;
    min-width: 50px;
    min-height: 50px;
  }
  span:nth-child(2) {
    filter: blur(5px);
    top: 4px;
    left: 2px;
  }
  span:first-child {
    animation: ${popupAnimation} 3s ease-out infinite;
  }
`

export const LinkBox = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 10px;
  gap: 20px;
  margin: auto;
  height: 70px;
  background-color: #333;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: white;

  &:hover {
    ${ImageContainer} {
      transform: translateY(-5px);
    }
    ${RightArrow} {
      margin-right: 10px;
    }
    cursor: pointer;
  }
`
