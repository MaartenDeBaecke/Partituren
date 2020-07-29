import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './card/Card';




function CreateCard(props){
  const [card, setCard] = useState({
    title: "Titel",
    subTitle: "SubTitel",
    img: "https://static.wixstatic.com/media/299c16_9dd9a16c108542d48849edc401169d3c~mv2.png/v1/fill/w_339,h_465,al_c,q_85,usm_0.66_1.00_0.01/img_not_found.webp",
    description: "Telt x paginas...",
    listen: "none",
    buy: "",
    style: ""
  });

  function handleChange(event){
    const {name, value} = event.target;



    setCard(prevCard => {
      return {
        ...prevCard,
        [name]: value
      }
    });

    if (name === "listen" && value !== "none" && value !== ""){
      setCard(prevCard => {
        return {
          ...prevCard,
          style: "true"
        }
      });
    } else {
      setCard(prevCard => {
        return {
          ...prevCard,
          style: ""
        }
      });
    }
  }

  function submit(event){
    console.log(card);
    console.log(cards);
    axios.post('http://localhost:4000/cards/create', card)
        .then(res => console.log(res.data));
    event.preventDefault();
  }



  return(
    <div className="create">
    {addCards()}
    <Row className="cRow">
      <Col className="ccolTwo" xl={7}>
        <div className="formCard">
        <h1 className="ccTitle">Nieuw</h1>
          <form className="createFrom" >

            <Row>
              <Col md={6}>
                <p className="flabel">Titel</p>
                <input autoComplete="off" onChange={handleChange} name="title" className="cInput" type="text" placeholder="Morning Blue" />

                <p className="flabel">Ondertitel</p>
                <input autoComplete="off" onChange={handleChange} name="subTitle" className="cInput" type="text" placeholder="For Flute Solo" />

                <p className="flabel">Luisteren</p>
                <input autoComplete="off" onChange={handleChange} name="listen" className="cInput" type="text" placeholder="https://www.youtube.com/ochtendblauw" />

                <p className="flabel">Kopen</p>
                <input autoComplete="off" onChange={handleChange} name="buy" className="cInput cKopen" type="text" placeholder="https://www.euprint.be/nl/ochtendblauw-morning-blue" />
              </Col>
              <Col md={6} className="cscol">
                <p className="flabel">Beschrijving</p>
                <textarea autoComplete="off" onChange={handleChange} name="description" className="textarea" placeholder="Telt 5 pagina’s, Gepubliceerd in 2003" />

                <p className="flabel cKaft">Kaft</p>
                <input autoComplete="off" onChange={handleChange} name="img" className="cInput" type="text" placeholder="https://www.euprint.be/ochtentblauw.jpg" />
              </Col>
              <button className="saveBtn" onClick={submit}>Toevoegen</button>
            </Row>
          </form>
        </div>
      </Col>
      <Col className="ccolOne" xl={5} >
        <Card style={card.style} listen={card.listen} title={card.title} link={card.img} subTitle={card.subTitle} description={card.description}/>
      </Col>



      </Row>
    </div>
  );
}

export default CreateCard;
