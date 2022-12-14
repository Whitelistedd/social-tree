import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }


  button, input {
    border: none;
    outline: none;
  }

  button:hover, a:hover {
      cursor: pointer;
    }

    #_next {
      width: max-content;
      height: max-content;
    }
`;

