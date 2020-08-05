import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./card/Card";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fuse from 'fuse.js';

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
  const sections = [];

  cards.forEach(card =>{
    cardArr.push(card);
  })
  cardArr.forEach(card =>{
    !sections.includes(card.section) ? sections.push(card.section) : sections.push();
  });

  const fuse = new Fuse(cards, {
    keys: [
      'title',
      'subTitle',
      'description'
    ]
  });

  const [query, setQuery] = useState("");

  function onSearch({ currentTarget }) {
    setQuery(currentTarget.value);
  }

  const results = fuse.search(query)
  const searchedCards = query ? results.map(card => card.item) : cards;

  sections.sort();

  return(
    <div className="bgCatalog">
      <input type="text" value={query} onChange={onSearch}/>
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

export default Catalog;
