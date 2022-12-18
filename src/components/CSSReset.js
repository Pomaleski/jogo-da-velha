import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    overflow-x: hidden;
    background-color: #fff;
    color: #000;
  }
  a {
    text-decoration: none;
  }
`;