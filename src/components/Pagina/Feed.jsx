import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faRss, faPager } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import QFeed1 from "../PostFeed/QFeed1";
import QFeed2 from "../PostFeed/QFeed2";
import QFeed3 from "../PostFeed/QFeed3";
import QFeed4 from "../PostFeed/QFeed4";
import QFeed5 from "../PostFeed/QFeed5";
import { ContainerFeed, FeedP, TituloFeed, Botao,DivBotoes,PasseioCarioca } from "./style";

const Feed = () => {
  return (
    <div>
    <DivBotoes>
      <PasseioCarioca>Passeio Carioca</PasseioCarioca>
      <Link to="/Mapa">
        <Botao>
          <FontAwesomeIcon icon={faMapMarker} /> Mapa
        </Botao>
      </Link>
      <Link to="/">
        <Botao>
          <FontAwesomeIcon icon={faPager} /> Feed
        </Botao>
      </Link>
    </DivBotoes>

      <QFeed1 />
      <QFeed2 />
      <QFeed3 />
      <QFeed4 />
      <QFeed5 />
    </div>
  );
};

export default Feed;
