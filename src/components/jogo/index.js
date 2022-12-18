import { StyledDiv, StyledText, StyledButton, FlexCenter } from "./style";
import { FiCircle } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";
import { useState } from "react";


export default function Jogo() {
  const [jogo, setJogo] = useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ]);
  const [vez, setVez] = useState('o');
  const [acabou, setAcabou] = useState(false);
  const [ganhou, setGanhou] = useState(false);

  function setIcon(target) {
    if (acabou || ganhou) return;

    if (jogo[target.id] !== '') return;

    let newJogo = jogo;

    if (vez === 'o') {
      newJogo[target.id] = 'o';
    }
    if (vez === 'x') {
      newJogo[target.id] = 'x';
    }

    setJogo(newJogo);

    if (ganhouTeste()) {
      setGanhou(true);
      return;
    }
    if (!jogo.includes('')) setAcabou(true);

    setVez(vez === 'x' ? 'o' : 'x');
  }

  function ganhouTeste() {
    if (jogo[0] === vez && jogo[3] === vez && jogo[6] === vez) return true;
    if (jogo[1] === vez && jogo[4] === vez && jogo[7] === vez) return true;
    if (jogo[2] === vez && jogo[5] === vez && jogo[8] === vez) return true;

    if (jogo[0] === vez && jogo[1] === vez && jogo[2] === vez) return true;
    if (jogo[3] === vez && jogo[4] === vez && jogo[5] === vez) return true;
    if (jogo[6] === vez && jogo[7] === vez && jogo[8] === vez) return true;

    if (jogo[0] === vez && jogo[4] === vez && jogo[8] === vez) return true;
    if (jogo[2] === vez && jogo[4] === vez && jogo[6] === vez) return true;

    return false;
  }

  let lenghtJogo = -1;

  return (
    <IconContext.Provider value={{ size: "100px" }}>
      <StyledText>{
        ganhou ?
          vez.toUpperCase() + ' ganhou' :
          acabou ?
            'Velha' :
            'Vez: ' + vez.toUpperCase()
      }</StyledText>
      <StyledText></StyledText>
      <StyledDiv>
        {jogo.map((value) => {
          let icon = '';

          if (value === 'x') {
            icon = <GrClose />
          }
          if (value === 'o') {
            icon = <FiCircle />
          }

          lenghtJogo++

          return <div key={lenghtJogo} id={lenghtJogo} onClick={(e) => setIcon(e.currentTarget)}>{icon}</div>
        })}
      </StyledDiv>
      <FlexCenter>
        <StyledButton
          onClick={(e) => {
            setJogo(['', '', '', '', '', '', '', '', '']);
            setVez('o');
            setAcabou(false);
            setGanhou(false);
          }}
        >
          Novo Jogo
        </StyledButton>
      </FlexCenter>
    </IconContext.Provider>
  )
}