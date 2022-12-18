import styled from "styled-components";

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  background-color: #000;

  div {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    aspect-ratio: 1/1;
  }

  .icon {
    width: 100px;
  }
`;

export const StyledText = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 50px;
`

export const StyledButton = styled.button`
  background-color: #fff;
  border: solid 1px #000;
  font-size: 20px;
  padding: 10px 20px;
  margin-top: 30px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`