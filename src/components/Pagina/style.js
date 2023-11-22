import styled from "styled-components";



const ContainerFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FeedP = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
  justify-content: center;
`;
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

const PasseioCarioca = styled.p`
 color:#06368a;
 font-size: 30px;
 font-family: 'PT Serif', serif;
 text-align:left;


`;
const Cabecalho = styled.div`
  display: flex;
  height:85px;
  
  
  @media screen and (max-width:500px){
    width:350px;
  }
`;

export {ContainerFeed,FeedP,Botao,DivBotoes,PasseioCarioca,Cabecalho};
