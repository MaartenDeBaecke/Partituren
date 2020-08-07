import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Card from "./card/Card";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fuse from 'fuse.js';

function Catalog(props){
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:4000/cards/');
      setCards(result.data);
    };

    fetchData();
  }, []);


  const cardArr = [];
  let sections = [];

  cards.forEach(card =>{
    cardArr.push(card);
  })

  const fuse = new Fuse(cards, {
    keys: [
      'title',
      'subTitle',
      'description',
      'section'
    ],
    includeScore: true
  });


  const [query, setQuery] = useState(props.search);

  useEffect(() => {
    setQuery(props.search);
  },[props.search]);

  const results = fuse.search(query)
  const searchedCards = query ? results.map(card => card.item) : cards;
  console.log(results);
  cardArr.forEach(card =>{
    !sections.includes(card.section) && searchedCards.includes(card) ? sections.push(card.section) : sections.push();
  });

  sections.sort();

  return(
    <div className="bgCatalog">
      <div className="catalog">
        {sections.map(collection => (
          <div key={collection}>
            <span className="catalogHeader">{collection.substring(1)}</span>
            <Container className="catalogContainer">
              <Row className="row">
               {searchedCards.map(card => (
                 card.section === collection ?
                 <Col className="col" key={card._id}>
                   <Card
                     key={card._id}
                     title={card.title}
                     img={card.img}
                     subTitle={card.subTitle}
                     description={card.description}
                     listen={card.listen}
                     buy={card.buy}
                     id={card._id}
                     section={collection}
                   />
                 </Col> : null
               ))}
              </Row>
            </Container>
          </div>
        ))}

      </div>
    </div>
  );
}



export {Catalog};
