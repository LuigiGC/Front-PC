import styled from "styled-components";

const Botao = styled.button`
  padding: 10px;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 20px;
  margin-top: 20px;
  width: 50%;

  &:hover {
    background-color: #d1f0ff;
  }

  svg {
    margin-right: 5px;
  }
`;
const divBotoes = styled.div`

`;

export {Botao,divBotoes};
