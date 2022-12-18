import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./components/CSSReset";
import Jogo from "./components/jogo";

const StyledBody = createGlobalStyle`
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <>
      <CSSReset />
      <StyledBody />
      <Jogo />
    </>
  )
}

export default App;
