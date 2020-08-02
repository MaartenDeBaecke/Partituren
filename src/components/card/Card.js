import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Img from './img';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Edit from "./edit";
import Delete from "./delete";

function Card(props){
  return(
    <Container className="cardContainer">
      <Jumbotron id="card">
        <Img url={props.img}/>
        <Edit id={props.id} />
        <Delete id={props.id} />
        <div id="description">
          <Header head={props.title} />
          <Body sub={props.subTitle} des={props.description} />
          <Footer lis={props.listen} buy={props.buy} />
        </div>
      </Jumbotron>
    </Container>
  );
}


export default Card;
