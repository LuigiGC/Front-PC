const { styled } = require("styled-components");

const CartaoFeed = styled.div`
display: flex;
flex-direction: column;
border: 3px black solid;
min-width: 8em;
align-items: center;
P{
    text-align: center;
}`;

const Titulo = styled.h3`
color: red;
`;

export{CartaoFeed,Titulo};