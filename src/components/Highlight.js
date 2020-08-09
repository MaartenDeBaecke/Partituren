import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Highlight(){
  const [cards, setCards] = useState([]);
  let frontCard = [];
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:4000/cards/');
      setCards(result.data);
    };

    fetchData();
  }, []);

  const cardArr = [];

  cards.forEach(card =>{
    cardArr.push(card);
  })

  cardArr.forEach(card => {
    if (card.section === "0"){
      frontCard = card;

    }
  })



  return(
    <div className="highlight far-right">
      <Row className="hRow">

        <Col className="ccolOne hcolOne">
          <Card listen={frontCard.listen} title={frontCard.title} img={frontCard.img} subTitle={frontCard.subTitle} description={frontCard.description} buy={frontCard.buy} free={frontCard.free}/>
        </Col>
      </Row>
    </div>
  );
}

export default Highlight;
