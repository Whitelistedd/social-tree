import styled from "styled-components"

export const NavItems = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 1000px){
    display: none;
  }
`


export const NavItem = styled.li`
  color: #929292;
  list-style: none;
  height: 80%;
  width: max-content;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: 1s border-bottom ease;

  &:hover {
    cursor: pointer;
    border-bottom-color: rgba(0, 0, 0, 0.2);
  }

  &.active {
    border-bottom-color: #3673fc;
  }

  @media (max-width: 1000px){
    font-size: 1.3rem;
  }
`


