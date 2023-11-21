import { Botao, BotoesContainer, CartaoFeed, Titulo,LocalPredio,DescricaoPredio } from "./style";
import ImagemEscolhida from '../ImagensPosts/casa3.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const QFeed3 = () =>{
    const [curtido, setCurtido] = useState(false);

    const handleLike = () => {
      setCurtido(!curtido);
    };
    return(
        
    <>
        <CartaoFeed>
            <Titulo>
                Prédio antigo - 3
            </Titulo>
            <LocalPredio>
                Candelária
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
                <Botao>Ver no Mapa</Botao>
            </BotoesContainer>
        </CartaoFeed>
    </>
    );
    };

export default QFeed3;