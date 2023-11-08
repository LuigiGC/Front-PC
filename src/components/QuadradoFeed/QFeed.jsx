import { CartaoFeed, Titulo } from "./style";
import ImagemEscolhida from '../ImagensPosts/casa1.jpg'

const QFeed = () =>{
    return(
    <>
        <CartaoFeed>
            <Titulo>
                Central
            </Titulo>
            <img src={ImagemEscolhida}/>
            <p>
                Com uma historia rica....
            </p>
        </CartaoFeed>
    </>
    );
    };

export default QFeed;