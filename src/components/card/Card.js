import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Img from './img';
import Header from './header';
import Body from './body';
import Footer from './footer';

function Element(){
  return(
    <Container className="cardContainer">
      <Jumbotron className="card">
        <Img />
        <div className="description">
          <Header />
          <Body />
          <Footer />
        </div>
      </Jumbotron>
    </Container>
  );
}


export default Element;
