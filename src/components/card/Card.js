import React, {useState, useEffect} from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import Img from './img';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Edit from "./edit";
import Delete from "./delete";

function Card(props){
  const [permission, setPermission] = useState()


  axios.get('http://localhost:4000/permission').then(resp => {
    setPermission(resp.data);

  });


  return(
    <Container className="cardContainer">
      <Jumbotron id="card">
        <Img url={props.img} title={props.title}/>
        { permission ?
          <div>
            <Edit id={props.id} />
            <Delete id={props.id} />
          </div>
        :
          null
        }
        <div id="description">
          <Header head={props.title} />
          <Body sub={props.subTitle} des={props.description} />
          <Footer lis={props.listen} buy={props.buy} free={props.free}/>
        </div>
      </Jumbotron>
    </Container>

  );
}


export default Card;
