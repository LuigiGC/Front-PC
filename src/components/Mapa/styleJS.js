import styled from "styled-components";

const Botao = styled.button`
  width: 100px;
  height:50px;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 30px;
  margin-top: 5px;
  text-align:center;

  &:hover {
    background-color: #d1f0ff;
  }

  svg {
    margin-right: 5px;
  }
`;
const DivBotoes = styled.div`
  //border: 1px blue solid
  justify-content: right;
  height: auto;
  display:flex;
  width: 100%;
  /*@media screen and (max-width:450px){
    width:350px;
  }*/
`;
const Cabecalho = styled.div`
  display: flex;
  height:85px;
  
  
  @media screen and (max-width:500px){
    width:350px;
  }
`;
const PasseioCarioca = styled.p`
 color:#06368a;
 font-size: 30px;
 font-family: 'PT Serif', serif;
 text-align:left;


`;

export {Botao,DivBotoes,Cabecalho,PasseioCarioca};
