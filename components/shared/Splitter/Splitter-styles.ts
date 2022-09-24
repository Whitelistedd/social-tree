import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ::before {
    content: ' ';
    width: 45%;
    background-color: grey;
    opacity: 0.7;
    height: 1px;
  }
  ::after {
    content: ' ';
    width: 45%;
    background-color: grey;
    opacity: 0.7;
    height: 1px;
  }
`
