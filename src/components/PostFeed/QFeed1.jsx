import { Botao, BotoesContainer, CartaoFeed, Titulo,LocalPredio ,DescricaoPredio } from "./style";
import ImagemEscolhida from '../ImagensPosts/casa1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const QFeed1 = () =>{
    const [curtido, setCurtido] = useState(false);

    const handleLike = () => {
      setCurtido(!curtido);
    };

    const irParaMapa = () =>{
        window.location = "https://luigigc.github.io/Front-PC/#/Mapa";
    };
    return(
        
    <>
        <CartaoFeed>
            <Titulo>
                Prédio antigo - 1
            </Titulo>
            <LocalPredio>
                Centro
            </LocalPredio>
            <img src={ImagemEscolhida} style={{ width: '100%' }}/>
            <DescricaoPredio>
            Uma breve descrição sobre o lugar, contendo algumas informaçoes uteis para o usuario que deseja descobrir um pouco mais sobre a história do local.
            </DescricaoPredio>
            <BotoesContainer>
            <Botao className={curtido ? "liked" : ""} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} /> {curtido ? "Descurtir" : "Curtir"}
            </Botao>
                <Botao>Comentários</Botao>                
                <Botao onClick={irParaMapa}> Ver no Mapa </Botao>
                
            </BotoesContainer>
        </CartaoFeed>
    </>
    );
    };

export default QFeed1;