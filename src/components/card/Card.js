import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Img from './img';
import Header from './header';
import Body from './body';
import Footer from './footer';

function Card(props){
  return(
    <Container className="cardContainer">
      <Jumbotron id="card">
        <Img url={props.link}/>
        <div id="description">
          <Header head={props.title} />
          <Body sub={props.subTitle} des={props.description} />
          <Footer lis={props.listen} />
        </div>
      </Jumbotron>
    </Container>
  );
}


export default Card;
