import React from "react";
import Card from "./card/Card";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Catalog(){
  return(
    <div className="catalog">
      <hr />
      <h1>Nieuw</h1>

      <Container className="catalogContainer">
        <Row className="row">
          <Col className="col-lg-4"><Card title="Morning Blue" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/16/morning_blue.jpg"/></Col>
          <Col className="col-lg-4"><Card title="4 Mysterious Pieces" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/26/four_mysterious_pieces.jpg"/></Col>
          <Col className="col-lg-4"><Card title="Luister en Speel" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/15/luister_en_speel_begeleiding.jpg"/></Col>
          <Col className="col-lg-4"><Card title="Peter Pan" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/24/2_pieces_for_double_bass.jpg"/></Col>
          <Col className="col-lg-4"><Card title="afscheid" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/13/Peter_Pan.jpg"/></Col>
          <Col className="col-lg-4"><Card title="Fingers crossed" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/3/Afscheid.jpg"/></Col>
          <Col className="col-lg-4"><Card title="6 Dynamic Pieces" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/27/fingers_crossed.jpg"/></Col>
          <Col className="col-lg-4"><Card title="Luister en Speel" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/22/6_Dynamic_pieces.jpg"/></Col>
          <Col className="col-lg-4"><Card title="Met de fluit" link="https://sdb-steven-de-baecke.s3.eu-west-2.amazonaws.com/uploads/my_music/image/11/spelenderwijs_met_de_fluit.jpg"/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Catalog;
