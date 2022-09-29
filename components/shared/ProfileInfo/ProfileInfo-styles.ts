import Image from 'next/image'
import styled from 'styled-components'

export const MiniLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const BackgroundImage = styled.div`
  min-width: 100%;
  min-height: 237px;
  @media only screen and (max-width: 974px) {
    min-height: 57px;
  }
`

export const SocialMediaImage = styled(Image)`
  filter: invert(100%);
`

export const SocialMediaText = styled.p`
  font-size: 1.1rem;
`

export const SocialMediaBox = styled.div`
  color: white;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  border: 1px solid grey;
  padding: 10px;
  transition: 400ms ease;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }
`

export const SocialMediaBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 10px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Username = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 0px 0px 20px black;
`

export const ProfileImage = styled.div`
  border-radius: 50%;
  min-height: 200px;
  min-width: 200px;
  span {
    box-shadow: 0px 0px 20px black;
    border-radius: 50%;
    min-height: 200px;
    min-width: 200px;
  }
  @media only screen and (max-width: 974px) {
    min-height: 100px;
    min-width: 100px;
    height: 150px;
    width: 150px;
    span {
      height: 150px;
      width: 150px;
      min-height: 100px;
      min-width: 100px;
    }
  }

  @media only screen and (max-width: 474px) {
    height: 120px;
    width: 120px;
    span {
      height: 120px;
      width: 120px;
    }
  }
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: -120px;
  @media only screen and (max-width: 974px) {
    margin-top: -90px;
  }
  @media only screen and (max-width: 474px) {
    margin-top: -70px;
    ${Username} {
      font-size: 1.5rem;
    }
    ${SocialMediaText} {
      font-size: 0.9rem;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`
