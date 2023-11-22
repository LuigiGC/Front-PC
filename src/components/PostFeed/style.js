import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;


const CartaoFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  border-left: 3px #03364f solid;
  border-right: 3px #03364f solid;
  border-top: 2px #03364f solid;
  min-width: 10em;
  width: 500px;
  min-height: 550px;
  max-height: 800px;
  overflow:hidden;
  padding: 0px;
  p {
    word-wrap: break-word;
  }
  .liked {
    animation: ${pulseAnimation} 1s ease-in-out;
    color: blue;
  }
  @media screen and (max-width:400px){
    width:350px;
  }
`;

const Titulo = styled.h3`
  color: #03364f;
  text-align: center;
  margin: 0px;
`;
const LocalPredio = styled.p`
 margin-top: 0px;
 text-align: center;
 color:blue;
`;
const DescricaoPredio = styled.p`
 text-align: left;
 `;

const BotoesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;

const Botao = styled.button`
  padding: 10px;
  cursor: pointer;
  border: 2px solid #03364f;
  border-radius: 20px;
  width: 50%;
  margin: 0px;
  color: #03364f;

  &:hover {
    background-color: #d1f0ff;
  }
`;

export {Titulo, BotoesContainer, Botao, LocalPredio, DescricaoPredio,CartaoFeed};
