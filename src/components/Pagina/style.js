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
  height:35px;
  cursor: pointer;
  border: 2px solid #ccc;
  border-radius: 20px;
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
  justify-content: left;
  background: white;
  height: auto;
  display:flex;
  width: auto;
  @media screen and (max-width:400px){
    width:350px;
  }
`;

const PasseioCarioca = styled.p`
 color:#06368a;
 font-size: 30px;
 font-family: 'PT Serif', serif;
 text-align:left;


`;

export {ContainerFeed,FeedP,Botao,DivBotoes,PasseioCarioca};
