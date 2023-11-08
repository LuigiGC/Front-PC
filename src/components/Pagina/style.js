const { styled } = require("styled-components");

const TituloFeed = styled.h1`
color: blue;
`;

const ContainerFeed = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`;

const FeedP = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 600px;
width: 100%;
justify-content: center;
`;

export {TituloFeed,ContainerFeed,FeedP};
