import React from "react";
import Element from "./card/Card";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Catalog(){
  return(
    <div className="catalog">
      <hr />
      <h1>Nieuw</h1>

      <Container className="catalogContainer">
        <Row class="row">
          <Col lg={4} md={6}><Element /></Col>
          <Col lg={4} md={6}><Element /></Col>
          <Col lg={4} md={6}><Element /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Catalog;
