import styled from 'styled-components'

export const StyledNavbar = styled.header`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: space-between;
`

export const NavContainer = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
`

export const NavItems = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 14px;
`

export const NavItem = styled.li`
  color: #929292;
  list-style: none;

  &:hover {
    cursor: pointer;
  }
`

export const Dot = styled.span`
  height: 3px;
  width: 3px;
  background-color: #929292;
  border-radius: 50%;
  margin-right: 1rem;
`

export const LoginButton = styled.button`
    height: auto;
    padding: 15px 17px;
    font-size: 14px;
    border: 1px solid #3673fc;
    background-color: transparent;
    box-shadow: none;
    color: #3673fc;
    border-radius: 3px;
`

export const RegisterButton = styled.button`
    padding: 15px 17px;
    display: flex;
    overflow: visible;
    justify-content: center;
    align-items: center;
    background-color: #3673fc;
    box-shadow: 0 14px 30px -5px rgba(0,0,0,.13);
    color: #fff;
    text-align: center;
    padding: 1rem 1.4rem;
    border-radius: 3px;
    border: 1px solid transparent;

`