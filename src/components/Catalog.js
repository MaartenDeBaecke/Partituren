import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./card/Card";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Catalog(){
  const [cards, setCards] = useState([]);
  const apiUrl = 'http://localhost:4000/cards/';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setCards(result.data);
    };

    fetchData();
  }, []);

  const cardArr = [];

  cards.forEach(card =>{
    cardArr.push(card);
  })

  return(
    <div className="bgCatalog">
      <div className="catalog">

        <span className="catalogHeader">Nieuw</span>
        <Container className="catalogContainer">
          <Row className="row">


             {cardArr.map(card => (
               <Col className="col" key={card._id}><Card
                 key={card._id}
                 title={card.title}
                 img={card.img}
                 description={card.description}
                 listen={card.listen}
                 style={card.style}
                 buy={card.buy}
                 id={card._id}
               /></Col>
             ))}

          </Row>
        </Container>
        <span className="catalogHeader">Dwarsfluit</span>
        <Container className="catalogContainer">
          <Row className="row">
            <Col className="col"><Card title="Peter Pan" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/24/2_pieces_for_double_bass.jpg"/></Col>
            <Col className="col"><Card title="afscheid" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/13/Peter_Pan.jpg"/></Col>
            <Col className="col"><Card title="Fingers crossed" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/3/Afscheid.jpg"/></Col>

            <Col className="col"><Card title="6 Dynamic Pieces" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/27/fingers_crossed.jpg"/></Col>

          </Row>
        </Container>
        <span className="catalogHeader">Contrabas</span>
        <Container className="catalogContainer">
          <Row className="row">
            <Col className="col"><Card title="Peter Pan" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/24/2_pieces_for_double_bass.jpg"/></Col>
            <Col className="col"><Card title="Luister en Speel" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/22/6_Dynamic_pieces.jpg"/></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Catalog;
