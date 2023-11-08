const { styled } = require("styled-components");

const CartaoFeed = styled.div`
display: grid;
grid-template-columns: 1fr;

flex-direction: column;
border: 3px black solid;
min-width: 10em;
align-items: center;
P{
    text-align: center;
}`;

const Titulo = styled.h3`
color: red;
`;

export{CartaoFeed,Titulo};