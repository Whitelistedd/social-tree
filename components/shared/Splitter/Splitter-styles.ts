import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ::before {
    content: ' ';
    width: 45%;
    background-color: black;
    height: 1px;
  }
  ::after {
    content: ' ';
    width: 45%;
    background-color: black;
    height: 1px;
  }
`
